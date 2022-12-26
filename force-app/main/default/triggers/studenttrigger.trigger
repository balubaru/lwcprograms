trigger studenttrigger on student__c (before insert) {
    
    if(trigger.isbefore && trigger.isinsert){
        system.debug('before insert==');
        for(student__c std : trigger.new){
            if(std.email__c == null){
                std.email__c.adderror('please enter email');
            }
        }
    }
}