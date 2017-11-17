import { Factory } from 'rosie';
import FrameScoring from '../../../src/models/frame-scoring';

export default new Factory(FrameScoring)
  .sequence('id')
  .attr('rolls', [10,null])
  .attr('total', 30)
