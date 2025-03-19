namespace com.eventsmanager.org;
entity Event {
    key EventID: String(50);
    title: String(50);
    description: String(100);
    dateTime: Timestamp;
    location: String(50);
    capacity: Integer;
    organizerId: UUID;
}
