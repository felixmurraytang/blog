import { visit } from 'unist-util-visit';

interface Headline extends Node {
    type: 'headline'
    level: number
}

// fix headline level to meet seo standard
export function customHeadline() {  
  return (tree: any) => {
    visit(tree, 'headline', (node: Headline) => { 
      if (node.level < 6) {
        node.level += 1
      }
    })
  }
}