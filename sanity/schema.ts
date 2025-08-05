import { type TypeDefinition } from 'sanity';
import event from './schemas/event';
import application from '../schemas/application';
import gallery from '../schemas/gallery';
import teacher from '../schemas/teacher';

export const schema: { types: TypeDefinition[] } = {
  types: [event, application, gallery, teacher],
}