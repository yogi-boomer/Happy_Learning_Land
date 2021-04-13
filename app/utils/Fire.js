import firebase from "firebase";

class Fire{
    addPost = async ({localUri}) =>{
        const remoteUri = await this.uploadPhotoAsync(localUri)

        return new Promise((res, rej)=>{
            this.firestore.collection("characters").add({
                uid:this.uid, Image: remoteUri
            }).then(ref =>{
                res(ref);
            }).catch(error => {
                rej(error);
            });
        });
    };

    uploadPhotoAsync = async uri =>{
        const path = "characters/"+this.uid+"/character.png"

        return new Promise(async (res, rej) => {
            const response = await fetch(uri)
            const file = await response.blob()

            let upload = firebase.storage().ref(path).put(file)

            upload.on("state_changed", snapshot => {}, err =>{
                rej(err);
            }, async () => {
                const url = await upload.snapshot.ref.getDownloadURL();
                res(url);
            });
        });
    };

    get firestore(){
        return firebase.firestore();
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid;
    }

}

Fire.shared = new Fire();

export default Fire;