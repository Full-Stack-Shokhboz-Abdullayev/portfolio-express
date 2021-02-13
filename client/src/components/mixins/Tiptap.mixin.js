import asyncGetter from '@/assets/jsComponents/asyncGetter'
import 'highlight.js/styles/atom-one-dark.css'
import 'victormono'

import {
	Editor,
	EditorContent,
	EditorMenuBubble,
	EditorFloatingMenu
} from 'tiptap'

import {
	Placeholder,
	Blockquote,
	BulletList,
	CodeBlock,
	HardBreak,
	Heading,
	ListItem,
	OrderedList,
	Bold,
	Code,
	Italic,
	Image,
	Link,
	History,
	CodeBlockHighlight
} from 'tiptap-extensions'

import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import xml from 'highlight.js/lib/languages/xml'
import python from 'highlight.js/lib/languages/python'

export const Tiptap = {
	components: {
		EditorContent,
		EditorMenuBubble,
		EditorFloatingMenu
	},
	data() {
		return {
			keepInBounds: true,
			linkUrl: null,
			linkMenuIsActive: false,
			existingLoading: false,
			editor: new Editor({
				autoFocus: true,
				extensions: [
					new Placeholder({
						emptyEditorClass: 'is-editor-empty',
						emptyNodeClass: 'is-empty'
					}),
					new Blockquote(),
					new BulletList(),
					new CodeBlock(),
					new HardBreak(),
					new Heading({ levels: [1, 2, 3] }),
					new ListItem(),
					new OrderedList(),
					new Bold(),
					new Code(),
					new Italic(),
					new Link(),
					new History(),
					new Image(),
					new CodeBlockHighlight({
						languages: {
							scss,
							javascript,
							css,
							xml,
							python
						}
					})
				],
				onUpdate: ({ getJSON, getHTML }) => {
					this.form.content = getJSON()
					console.log(this.form)
					this.html = getHTML()
				}
			})
		}
	},
	computed: {
		editable() {
			return this.$route.name === 'add-blog'
		},
		publish() {
			return this.$route.query.edit ? 'Change' : 'Publish'
		}
	},
	methods: {
		showLinkMenu(attrs) {
			this.linkUrl = attrs.href
			this.linkMenuIsActive = true
			this.$nextTick(() => {
				this.$refs.linkInput.focus()
			})
		},
		setEditable() {
			this.editor.setOptions({
				editable: this.editable
			})
		},
		hideLinkMenu() {
			this.linkUrl = null
			this.linkMenuIsActive = false
		},
		setLinkUrl(command, url) {
			command({ href: url })
			this.hideLinkMenu()
		},
		async getBlog() {
			const { slug } = this.$route.params
			let blog
			if (this.blogPosts.length !== 0) {
				blog = this.blogPosts.filter((i) => i.slug === slug)[0]
			} else {
				blog = await asyncGetter('/blogs/' + slug, {
					get: true
				})
			}
			this.blog = { ...blog }
			console.log(this.blog)
			this.editor.setContent(blog.content)
		},
		async editingExisting() {
			const slug = this.$route.query.edit
			if (slug) {
				let blog
				if (this.blogPosts.length !== 0) {
					blog = this.blogPosts.filter((i) => i.slug === slug)[0]
				} else {
					this.existingLoading = true
					blog = await asyncGetter('/blogs/' + slug, {
						get: true
					})
					this.existingLoading = false
				}

				this.form = {
					...blog
				}
				this.editor.setContent(this.form.content)
			}
		}
	},
	async mounted() {
		this.editingExisting()
		this.setEditable()
	},
	destroy() {
		this.editor.destroy()
	}
}
