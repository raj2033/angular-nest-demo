import { Injectable } from '@nestjs/common';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [];

    getItems(): Item[] {
        return this.items;
    }

    createTodo(newItem: Item): string {
        this.items.push(newItem);
        return `added new item`;
    }
}
