import {
  ChangeDetectorRef,
  Directive,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  IS_GAME_OVER_QUERY_PORT,
  IsGameOverQueryPort,
} from '../../../../application/ports/primary/query/is-game-over.query-port';
import { Subject, takeUntil } from 'rxjs';
import { GameOverQuery } from '../../../../application/ports/primary/query/game-over.query';

@Directive({ selector: '[ifGameOver]' })
export class IfGameOverDirective implements OnInit, OnDestroy {
  @Input() ifGameOver: string | null = null;
  @Input()
  set ifGameOverElse(templateRef: TemplateRef<any> | null) {
    this._elseTpl = templateRef;
  }

  private _elseTpl: TemplateRef<any> | null = null;
  private _onDestroy$ = new Subject<void>();

  constructor(
    private _templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private cdr: ChangeDetectorRef,
    @Inject(IS_GAME_OVER_QUERY_PORT)
    private _isGameOverQueryPort: IsGameOverQueryPort
  ) {}

  ngOnInit() {
    this._isGameOverQueryPort
      .isGameOverQuery()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((isGameOverQuery: GameOverQuery) => {
        const isGameOver = isGameOverQuery.isGameOver;
        this.viewContainer.clear();

        if (isGameOver) {
          this.viewContainer.createEmbeddedView(this._templateRef);
        } else {
          if (this._elseTpl) {
            this.viewContainer.createEmbeddedView(this._elseTpl);
          }
        }

        this.cdr.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
