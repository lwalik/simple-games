import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HangmanGameContext } from '../ports/secondary/context/hangman-game/hangman-game.context';
import { HangmanGameDTO } from '../ports/secondary/dto/hangman-game.dto';
import { HangmanGameStateModule } from './hangman-game.state-module';
import { SETS_STATE_HANGMAN_GAME_CONTEXT } from '../ports/secondary/context/hangman-game/sets-state-hangman-game.context-port';
import { SELECTS_HANGMAN_GAME_CONTEXT } from '../ports/secondary/context/hangman-game/selects-hangman-game.context-port';
import { PATCHES_HANGMAN_GAME_CONTEXT } from '../ports/secondary/context/hangman-game/patches-hangman-game.context-port';
import { GETS_ONE_HANGMAN_GAME_DTO } from '../ports/secondary/dto/gets-one-hangman-game.dto-port';
import { TakeWordCommand } from '../ports/primary/command/take-word.command';
import { TAKE_WORD_COMMAND } from '../ports/primary/command/take-word.command-port';

describe('HangmanGameState', () => {
  const given = (
    data: Partial<{
      selectsHangmanGameContextPortStub: HangmanGameContext;
      getsOneHangmanGameDtoPortStub: HangmanGameDTO;
    }>
  ) => {
    TestBed.configureTestingModule({
      imports: [HangmanGameStateModule],
      providers: [
        {
          provide: SETS_STATE_HANGMAN_GAME_CONTEXT,
          useValue: {
            setState: () => of(void 0),
          },
        },
        {
          provide: SELECTS_HANGMAN_GAME_CONTEXT,
          useValue: {
            select: () => of(data.selectsHangmanGameContextPortStub),
          },
        },
        {
          provide: PATCHES_HANGMAN_GAME_CONTEXT,
          useValue: {
            patch: () => of(void 0),
          },
        },
        {
          provide: GETS_ONE_HANGMAN_GAME_DTO,
          useValue: {
            getOne: () => of(data.getsOneHangmanGameDtoPortStub),
          },
        },
      ],
    });

    return {
      setsStateHangmanGameContextPortSetStateSpy: jest.spyOn(
        TestBed.inject(SETS_STATE_HANGMAN_GAME_CONTEXT),
        'setState'
      ),
      patchesHangmanGameContextPortPatchSpy: jest.spyOn(
        TestBed.inject(PATCHES_HANGMAN_GAME_CONTEXT),
        'patch'
      ),
      takeWord: (command: TakeWordCommand) =>
        TestBed.inject(TAKE_WORD_COMMAND).takeWord(command).toPromise(),
    };
  };
  [
    {
      givenData: {
        selectsHangmanGameContextPortStub: {
          username: '',
          selectedLevel: 'mid',
          selectedLetters: [],
          words: ['MOTYKA', 'CZAPKA', 'KALIBER', 'KARABIN', 'KILOF'],
          currentWord: '',
        },
      },
      whenData: {},
      thenData: {
        setsStateHangmanGameContextPortSetStateSpyParams: {
          username: '',
          selectedLevel: 'mid',
          selectedLetters: [],
          words: ['MOTYKA', 'CZAPKA', 'KALIBER', 'KARABIN'],
          currentWord: 'KILOF',
        },
      },
    },
  ].forEach(({ givenData, whenData, thenData }, i) =>
    it(`should handle takeWord #${i + 1}`, async () => {
      const { setsStateHangmanGameContextPortSetStateSpy, takeWord } =
        given(givenData);
      await takeWord(whenData);
      expect(setsStateHangmanGameContextPortSetStateSpy).toHaveBeenCalledWith(
        thenData.setsStateHangmanGameContextPortSetStateSpyParams
      );
    })
  );
});
