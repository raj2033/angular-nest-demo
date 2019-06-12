import { Controller, Get } from '@nestjs/common';
import { ItemsService } from '../services/items.service';
import { Item } from '../interfaces/item.interface';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}
    @Get()
    getAllItems(): Item[] {
        return this.itemService.getItems();
    }
}
