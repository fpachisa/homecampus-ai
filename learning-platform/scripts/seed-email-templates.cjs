const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Check for production flag
const isProd = process.argv.includes('--prod');

if (isProd) {
    console.warn('⚠️  WARNING: Running in PRODUCTION mode. Connecting to real Firestore...');
    // In prod, specific credentials are usually handled by the environment (GOOGLE_APPLICATION_CREDENTIALS)
    // or through gcloud application-default login
} else {
    // Default to Emulator Mode
    console.log('🔧 Running in EMULATOR mode');
    process.env.FIRESTORE_EMULATOR_HOST = '127.0.0.1:8080';
    process.env.FIREBASE_AUTH_EMULATOR_HOST = '127.0.0.1:9099';
}

if (!admin.apps.length) {
    const config = { projectId: 'homecampus-ai' };

    // Attempt to use application default credentials in prod if available, otherwise Admin SDK auto-detects
    if (isProd) {
        config.credential = admin.credential.applicationDefault();
    }

    admin.initializeApp(config);
}

const db = admin.firestore();

async function seedEmailTemplates() {
    console.log('🌱 Seeding email templates...');

    try {
        const templatesPath = path.join(__dirname, 'data', 'email_templates.json');
        if (!fs.existsSync(templatesPath)) {
            throw new Error(`Templates file not found at: ${templatesPath}`);
        }

        const rawData = fs.readFileSync(templatesPath, 'utf8');
        const templates = JSON.parse(rawData);

        console.log(`Found ${templates.length} templates to seed.`);

        const batch = db.batch();

        templates.forEach((template) => {
            const docRef = db.collection('email_templates').doc(template.name);
            batch.set(docRef, {
                subject: template.subject,
                html: template.html,
                text: template.text,
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
            });
        });

        await batch.commit();
        console.log('✅ Successfully seeded all email templates!');

    } catch (error) {
        console.error('❌ Error seeding specific email templates:', error);
    }
}

// Run if called directly
if (require.main === module) {
    seedEmailTemplates()
        .then(() => process.exit(0))
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}
