import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input() value = '';
    @Input() placeholder = '';

    @Output() OnChange = new EventEmitter<string>();
    @Output() OnEnterPress = new EventEmitter<boolean>();

    textChange($event: any): void {
        this.OnChange.emit($event.target.value);
    }

    checkEnterPress($event: KeyboardEvent): void {
        if ($event.key === 'Enter') {
            this.OnEnterPress.emit(true);
        } else {
            this.OnChange.emit(($event.target as HTMLInputElement).value);
        }
    }
}
