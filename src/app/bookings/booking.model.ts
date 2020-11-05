export class  Booking {
    constructor(
        public id: string, 
        public placeId: string, 
        public userId: string,
        public guestNumber: Number,
        public placeTitle: string
    ) {}
}


