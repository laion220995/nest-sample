import { Injectable } from '@nestjs/common';
import IOffers from './IOffers';

@Injectable()
export class OffersService {
    private readonly offers: IOffers[] = [];

    findAll(): IOffers[] {
        return this.offers;
    }

    createOffer(offers: IOffers): void {
        this.offers.push(offers);
    }
}
