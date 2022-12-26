public class CreateTaskEmailExample implements Messaging.InboundEmailHandler {
 
        public Messaging.InboundEmailResult handleInboundEmail(Messaging.InboundEmail email, 
                                                             Messaging.InboundEnvelope env){
          Messaging.InboundEmailResult result = new Messaging.InboundEmailResult();
        
          String conemail= email.fromAddress;
          
          System.debug('New Object: '+conemail );
          
            Contact Con = [select Id, Name, Email FROM contact WHERE Email =: conemail LIMIT 1];
            
          if(Con!=null){
             Case cas = new Case();
              cas.Contactid='Con.id';
                cas.Priority = 'medium';
                 cas.Status = 'new';
                 cas.Subject = email.subject;
                cas.Origin='email';
                    try{
                        Insert cas; 
                       result.success = true;
                    }catch(dmlexception e){
                  system.debug('following error message is occured'+e);
                    }
               }else{
                        system.debug('contact not exist');
                    }
         return result;
        }
      }