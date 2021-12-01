import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
    @Input() count = 0;
    @Input() perPage = 10;

    @Output() OnPagination = new EventEmitter<number>();

    @Input() page = 1;

    get pages(): number[] {
        return [...Array(Math.ceil(this.count / this.perPage) + 1).keys()].slice(1);
    }

    get pagesToShow(): number[] {
        const pages = this.pages;
        const last = this.pages[this.pages.length - 1];

        if (pages.length > 7) {
            let toShow: number[] = [];
            toShow = [...toShow, 1];

            if ([1, 2, 3, 4].includes(this.page)) {
                toShow = [...toShow, 2, 3, 4, 5, -1];
            } else if ([last, last - 1, last - 2, last - 3].includes(this.page)) {
                toShow = [...toShow, -1, last - 4, last - 3, last - 2, last - 1];
            } else {
                toShow = [...toShow, -1, this.page - 1, this.page, this.page + 1, -1];
            }

            toShow = [...toShow, last];

            return toShow;
        } else {
            return pages;
        }
    }

    get show(): boolean {
        if (this.count > 10) {
            return true;
        } else {
            return false;
        }
    }

    isSelected(page: number): boolean {
        return this.page === page;
    }

    changePage(page: number): void {
        this.page = page;
        this.OnPagination.emit(this.page);
    }

    next(): void {
        if (this.page < this.pages.length) {
            this.page += 1;
        }
        this.OnPagination.emit(this.page);
    }

    previous(): void {
        if (this.page > 1) {
            this.page -= 1;
        }
        this.OnPagination.emit(this.page);
    }
}
