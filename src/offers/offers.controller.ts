import { Controller, Get, Post, Body } from '@nestjs/common';
import CreateOfferDto from './create-offer.dto';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
    constructor(private readonly offersService: OffersService) { }

    @Get()
    findAll() {
        return this.offersService.findAll();
    }

    @Post()
    create(@Body() offer: CreateOfferDto) {
        this.offersService.createOffer(offer);
        return `new offer ${offer.name}`;
    }
}
