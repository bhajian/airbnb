import Contacts from "react-native-contacts";

export const getAllContact = async () => {
    try{
        Contacts.iosEnableNotesUsage(true);
        const permission = await Contacts.checkPermission();
        if (permission === 'undefined') {
            console.log('Undefined');
            const request = Contacts.requestPermission();
            console.log('Requested');
            Contacts.iosEnableNotesUsage(false);
            const contacts = await Contacts.getAll();
            return contacts;
        }
        if (permission === 'authorized') {
            Contacts.iosEnableNotesUsage(false);
            const contacts = await Contacts.getAll();
            return contacts;
        }
        if (permission === 'denied') {
            console.log('Denied');
        }
    } catch (e){
        console.error(e);
    }
}
