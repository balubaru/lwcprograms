@RestResource(urlmapping='/inboundmethod/*')
global with sharing class Welcomeapex {
    @httpget
    global static String WelcomeApexClass() {
         return 'enter the apex class';
    }
}