using { com.eventsmanager.org as my } from '../db/schema';

service EventsManagerService {
    entity Event as projection on my.Event;
}