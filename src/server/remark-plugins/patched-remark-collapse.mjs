import {headingRange}  from 'mdast-util-heading-range';
import {toString}  from 'mdast-util-to-string';

function defaultSummarizer (str) {
  return 'Open ' + str
}

function isString (str) {
  return typeof str === 'string'
}

function isFunction (fn) {
  return typeof fn === 'function'
}

export function customCollapse (opts) {
  if (opts == null || opts.test == null) throw new Error('options.test must be given')

  const summarizer = opts.summary == null
    ? defaultSummarizer
    : isString(opts.summary)
    ? () => opts.summary
    : opts.summary

  if (!isFunction(summarizer)) throw new Error('options.summary must be function');

  const className = opts.detailsClassname || 'generated-details'; 

  return function (node) {
    headingRange(node, opts.test, function (start, nodes, end) {
      return [
        start,
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: `<details class="${className}">`
            },
            {
              type: 'html',
              value: '<summary>'
            },
            {
              type: 'text',
              value: summarizer(toString(start))
            },
            {
              type: 'html',
              value: '</summary>'
            }
          ]
        },
        ...nodes,
        {
          type: 'paragraph',
          children: [
            {
              type: 'html',
              value: '</details>'
            }
          ]
        },
        end
      ]
    })
  }
}