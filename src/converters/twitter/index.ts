import { TanaIntermediateFile, TanaIntermediateNode, TanaIntermediateSummary } from '../../types/types';
import { idgenerator } from '../../utils/utils';

export class TwitterConverter {
  private summary: TanaIntermediateSummary = {
    leafNodes: 0,
    topLevelNodes: 0,
    totalNodes: 0,
    calendarNodes: 0,
    fields: 0,
    brokenRefs: 0,
  };

  convert(fileContent: string): TanaIntermediateFile | undefined {
    const nodes: TanaIntermediateNode[] = [];

    return {
      version: 'TanaIntermediateFile V0.1',
      summary: this.summary,
      nodes,
    };
  }

  /** Creates a TanaIntemrediateNode with the given content and children. Sets created and editedAt timestamps to now and bumps the summary counts. */
  private createTanaNode(content: string, children?: TanaIntermediateNode[]): TanaIntermediateNode {
    // update summary
    this.summary.totalNodes += 1;
    if (!children?.length) {
      this.summary.leafNodes += 1;
    }

    return {
      uid: idgenerator(),
      name: content,
      children,
      createdAt: new Date().getTime(),
      editedAt: new Date().getTime(),
      type: 'node',
    };
  }
}
