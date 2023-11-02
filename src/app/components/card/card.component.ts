import { Component, Input } from '@angular/core';

// JSON
import dataFake from '../../../assets/data/dataFake.json';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

	@Input() gameCover: string = '';
	@Input() gameLabel: string = '';
	@Input() gameType: string = 'Digital PS4';
	@Input() gamePrice: string = 'R$ 129,99';

}
