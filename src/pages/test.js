import React from 'react'

const enrich = (node, depthOffset = 0) => {
  if (!node.children) {
    return {
      ...node,
      depth: depthOffset,
      descendentsCount: 0,
      heightDiffWithLastDirectChild: 0,
    }
  }

  const enrichedChildren = node.children.map((child) =>
    enrich(child, depthOffset + 1)
  )
  const descendentsCount =
    node.children.length +
    enrichedChildren.reduce(
      (acc, enrichedChild) => acc + enrichedChild.descendentsCount,
      0
    )

  const heightDiffWithLastDirectChild =
    descendentsCount -
    enrichedChildren[node.children.length - 1].descendentsCount
  return {
    ...node,
    children: enrichedChildren,
    depth: depthOffset,
    descendentsCount,
    heightDiffWithLastDirectChild,
  }
}

// Flatten nodes with a depth first search
const flatten = (node) => {
  const { children = [], ...nodeWithoutChildren } = node
  return [
    { ...nodeWithoutChildren },
    ...children.map((childNode) => flatten(childNode)).flat(),
  ]
}

const boxHeight = 20
const boxGap = 10
const linkPositionOffset = 5

const LinkedBox = ({ node, order }) => (
  <div
    style={{
      position: 'absolute',
      left: `${node.depth * boxGap}px`,
      top: `${order * (boxHeight + boxGap)}px`,
      height: `${boxHeight}px`,
      border: '1px solid grey',
      borderRadius: '2px',
      padding: '10px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {node.depth > 0 && (
      <div
        style={{
          position: 'absolute',
          left: `-${boxGap - linkPositionOffset}px`,
          top: `${linkPositionOffset - 1}px`,
          width: `${boxGap - linkPositionOffset}px`,
          borderTop: 'solid 1px grey',
        }}
      />
    )}

    {node.heightDiffWithLastDirectChild > 0 && (
      <div
        style={{
          position: 'absolute',
          top: `${boxHeight}px`,
          left: `${linkPositionOffset - 1}px`,
          height: `${
            boxGap +
            (node.heightDiffWithLastDirectChild - 1) * (boxGap + boxHeight) +
            linkPositionOffset
          }px`,
          borderLeft: 'solid 1px grey',
        }}
      />
    )}
    {node.img}
    {node.text}
  </div>
)

const Diagram = ({ topLevelNode }) => (
  <div style={{ position: 'relative' }}>
    {flatten(enrich(topLevelNode)).map((enrichedNode, order) => (
      <LinkedBox
        node={enrichedNode}
        order={order}
        key={JSON.stringify(enrichedNode)}
      />
    ))}
  </div>
)

export default () => (
  <Diagram
    topLevelNode={{
      text: 'Parent',
      children: [
        {
          img: './static/icons/product/canderel.png',
          text: 'Child 1',
          children: [{ text: 'Grandchild 1' }],
        },
        { text: 'Child 2' },
        {
          text: 'Child 3',
          children: [{ text: 'Grandchild 2' }, { text: 'Grandchild 3' }],
        },
      ],
    }}
  />
)
