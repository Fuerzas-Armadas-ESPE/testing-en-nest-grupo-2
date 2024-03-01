import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comment.controller';
import { CommentsModule } from './comment.module';
import { CommentsService } from './comment.service';

// Este es el teste para los comentarios
describe('CommentsController', () => {
  let controller: CommentsController;
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommentsModule],
    })
      .overrideProvider(getModelToken('Comment'))
      .useValue(jest.fn())
      .compile();

    controller = module.get<CommentsController>(CommentsController);
    service = module.get<CommentsService>(CommentsService);
  });

  it('Debe estar definido', () => {
    expect(service).toBeDefined();
  });
});
