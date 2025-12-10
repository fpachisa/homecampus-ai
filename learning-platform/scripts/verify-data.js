import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
initializeApp({ projectId: 'homecampus-ai' });

const db = getFirestore();

async function checkUser() {
    const parentUid = 'test_parent_uid';
    console.log(`Checking user ${parentUid}...`);

    const doc = await db.collection('users').doc(parentUid).get();

    if (!doc.exists) {
        console.log('❌ User document does not exist!');
    } else {
        const data = doc.data();
        if (Array.isArray(data.childProfiles)) {
            console.log(`✅ childProfiles check passed.`);
            // Check for shadow documents and proper fields
            if (data.childProfiles.length > 0) {
                console.log('\nChecking shadow documents for security fields...');
                for (let i = 0; i < Math.min(3, data.childProfiles.length); i++) {
                    const profile = data.childProfiles[i];
                    const shadowDoc = await db.collection('users').doc(profile.profileId).get();
                    if (shadowDoc.exists) {
                        const sData = shadowDoc.data();
                        const hasParents = Array.isArray(sData.parents) && sData.parents.includes(parentUid);
                        if (hasParents) {
                            console.log(`✅ Shadow doc for ${profile.profileId}:`);
                            console.log(`   - parents: [${sData.parents.join(', ')}] (Matches parentUid)`);
                        } else {
                            console.log(`❌ Shadow doc for ${profile.profileId} MISSING correct 'parents' array!`);
                            console.log(`   - Found: ${JSON.stringify(sData.parents)}`);
                        }
                    } else {
                        console.log(`❌ Shadow doc for ${profile.profileId} is MISSING!`);
                    }
                }
            }
        }
    }
}

checkUser().catch(console.error);
