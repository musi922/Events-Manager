namespace com.eventsmanager.org;
using { cuid } from '@sap/cds/common';
entity Event : cuid{
    title: String(50);
    description: String(100);
    dateTime: Timestamp;
    location: String(50);
    capacity: Integer;
    organizerId: UUID;
}
