import { marked, type Tokens, Renderer } from 'marked'

// Configure marked for GFM (GitHub Flavored Markdown) with tables support
marked.setOptions({
    gfm: true,
    breaks: true,
})

// Custom renderer for RTL support and better styling
const renderer = new Renderer()

// Style tables for RTL Arabic content
renderer.table = function (token: Tokens.Table): string {
    let header = ''
    let body = ''

    // Build header
    const headerCells = token.header.map((cell) => {
        const alignment = cell.align ? `text-${cell.align}` : 'text-right'
        return `<th class="px-4 py-3 font-bold text-foreground ${alignment}">${this.parser.parseInline(cell.tokens)}</th>`
    }).join('')
    header = `<tr>${headerCells}</tr>`

    // Build body rows
    body = token.rows.map((row) => {
        const cells = row.map((cell) => {
            const alignment = cell.align ? `text-${cell.align}` : 'text-right'
            return `<td class="px-4 py-3 text-muted-foreground ${alignment}">${this.parser.parseInline(cell.tokens)}</td>`
        }).join('')
        return `<tr class="hover:bg-muted/30 transition-colors">${cells}</tr>`
    }).join('')

    return `<div class="overflow-x-auto my-6">
    <table class="min-w-full border-collapse border border-border rounded-lg overflow-hidden">
      <thead class="bg-muted/50">${header}</thead>
      <tbody class="divide-y divide-border">${body}</tbody>
    </table>
  </div>`
}

// Style blockquotes with alert support
renderer.blockquote = function (token: Tokens.Blockquote): string {
    const body = this.parser.parse(token.tokens)

    // Check for GitHub-style alerts
    const alertMatch = body.match(/^\s*<p[^>]*>\s*\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*([\s\S]*)/i)

    if (alertMatch) {
        const type = alertMatch[1].toUpperCase()
        const content = alertMatch[2]

        const alertStyles: Record<string, { bg: string; border: string; icon: string }> = {
            NOTE: { bg: 'bg-blue-50 dark:bg-blue-950/20', border: 'border-blue-500', icon: 'ℹ️' },
            TIP: { bg: 'bg-green-50 dark:bg-green-950/20', border: 'border-green-500', icon: '💡' },
            IMPORTANT: { bg: 'bg-purple-50 dark:bg-purple-950/20', border: 'border-purple-500', icon: '⚠️' },
            WARNING: { bg: 'bg-amber-50 dark:bg-amber-950/20', border: 'border-amber-500', icon: '⚡' },
            CAUTION: { bg: 'bg-red-50 dark:bg-red-950/20', border: 'border-red-500', icon: '🚨' },
        }

        const style = alertStyles[type] || alertStyles.NOTE

        return `<div class="my-6 p-4 rounded-lg border-r-4 ${style.bg} ${style.border}">
      <div class="flex items-start gap-3">
        <span class="text-xl">${style.icon}</span>
        <div class="flex-1">${content}</div>
      </div>
    </div>`
    }

    return `<blockquote class="my-6 pr-4 border-r-4 border-primary/50 bg-muted/30 py-3 pl-4 rounded-l-lg italic text-muted-foreground">${body}</blockquote>`
}

// Style headings
renderer.heading = function (token: Tokens.Heading): string {
    const text = this.parser.parseInline(token.tokens)
    const level = token.depth
    const sizes: Record<number, string> = {
        1: 'text-3xl font-bold mb-6 mt-8',
        2: 'text-2xl font-bold mb-4 mt-8 pb-2 border-b border-border',
        3: 'text-xl font-bold mb-3 mt-6',
        4: 'text-lg font-bold mb-2 mt-4',
        5: 'text-base font-bold mb-2 mt-3',
        6: 'text-sm font-bold mb-2 mt-3',
    }
    const id = encodeURIComponent(text.replace(/<[^>]*>/g, '').replace(/\s+/g, '-').toLowerCase())
    return `<h${level} id="${id}" class="${sizes[level] || sizes[3]} text-foreground font-heading">${text}</h${level}>`
}

// Style lists
renderer.list = function (token: Tokens.List): string {
    const tag = token.ordered ? 'ol' : 'ul'
    const listStyle = token.ordered ? 'list-decimal' : 'list-disc'
    const body = token.items.map((item) => this.listitem(item)).join('')
    return `<${tag} class="${listStyle} pr-6 my-4 space-y-2 text-muted-foreground">${body}</${tag}>`
}

renderer.listitem = function (token: Tokens.ListItem): string {
    const text = this.parser.parse(token.tokens)
    return `<li class="leading-relaxed">${text}</li>`
}

// Style paragraphs
renderer.paragraph = function (token: Tokens.Paragraph): string {
    const text = this.parser.parseInline(token.tokens)
    return `<p class="my-4 leading-loose text-muted-foreground">${text}</p>`
}

// Style code blocks
renderer.code = function (token: Tokens.Code): string {
    return `<pre class="my-6 p-4 bg-muted rounded-xl overflow-x-auto border border-border"><code class="text-sm font-mono text-foreground">${token.text}</code></pre>`
}

// Style inline code
renderer.codespan = function (token: Tokens.Codespan): string {
    return `<code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono text-primary">${token.text}</code>`
}

// Style horizontal rules
renderer.hr = function (): string {
    return `<hr class="my-8 border-t border-border" />`
}

// Style strong/bold
renderer.strong = function (token: Tokens.Strong): string {
    const text = this.parser.parseInline(token.tokens)
    return `<strong class="font-bold text-foreground">${text}</strong>`
}

// Style links
renderer.link = function (token: Tokens.Link): string {
    const text = this.parser.parseInline(token.tokens)
    const titleAttr = token.title ? ` title="${token.title}"` : ''
    return `<a href="${token.href}"${titleAttr} class="text-primary hover:underline">${text}</a>`
}

marked.use({ renderer })

/**
 * Parse markdown content to HTML with proper styling for RTL Arabic content
 * Supports: headers, paragraphs, lists, tables, blockquotes, code blocks, alerts
 */
export function parseMarkdown(content: string): string {
    if (!content) return ''
    return marked.parse(content) as string
}

/**
 * Parse markdown content synchronously
 */
export function parseMarkdownSync(content: string): string {
    if (!content) return ''
    return marked.parse(content, { async: false }) as string
}
