import {Block, Textblock, Paragraph, TextNode, Text, Fragment, Attribute, Pos} from "../../../../git/prosemirror/dist/model"
import {elt, insertCSS} from "../../../../git/prosemirror/dist/dom"
import {defParser, defParamsClick, andScroll, namePattern, nameTitle, selectedNodeAttr} from "../utils"

export class Choice extends Block {
	static get kinds() { return "choice" }
	get isTextblock() { return true }
	get attrs() {
		return {
			name: new Attribute(),
			value: new Attribute(),
			class: new Attribute({default: "widgets-choice"})
		}
	}
	create(attrs, content, marks) {
		// if content not null then it is a fragment with paragraph as first child
		let para = content? content.firstChild: pm.schema.defaultTextblockType().create(null)
		return super.create(attrs,[this.schema.node("radiobutton",attrs),para],marks)
	}
}
 
export class MultipleChoice extends Block {
	static get contains() { return "choice"}
	get attrs() {
		return {
			name: new Attribute,
			title: new Attribute,
			class: new Attribute({default: "widgets-multiplechoice widgets-edit"})
		}
	}
	get isList() { return true }
}

defParser(Choice,"div","widgets-choice")
defParser(MultipleChoice,"div","widgets-multiplechoice")

Choice.prototype.serializeDOM = (node,s) => s.renderAs(node,"div",node.attrs)

MultipleChoice.prototype.serializeDOM = (node,s) => s.renderAs(node,"div",node.attrs)

function renumber(pm, node) {
	let i = 1
	node.forEach(ch => {
		let radio = ch.firstChild
		if (radio) radio.attrs.value = i++
	})
}

Choice.register("command", {
  name: "splitChoice",
  label: "Split the current choice",
  run(pm) {
    let {from, to, node} = pm.selection
    if ((node && node.isBlock) || from.path.length < 2 || !Pos.samePath(from.path, to.path)) return false
    let toParent = from.shorten(), parent = pm.doc.path(toParent.path)
    if (parent.type != this) return false
    //let toMC = toParent.shorten(), mc = pm.doc.path(toMC.path)
    let nextType = to.offset == parent.child(toParent.offset).size ? pm.schema.defaultTextblockType() : null
    // need to renumber nodes and move cursor
    return pm.tr.delete(from, to).split(from, 2, nextType).apply(andScroll)
  },
  keys: ["Enter(19)"]
})

Choice.register("command", {
  name: "deleteChoice",
  label: "delete this choice or multiplechoice",
  run(pm) {
	let {from,to} = pm.selection
    return pm.tr.delete(from.move(-1),to).apply(andScroll)
  },
  keys: ["Backspace(20)", "Mod-Backspace(20)"]
})

MultipleChoice.register("command",{
	name: "insertMultipleChoice",
	label: "MultipleChoice",
	run(pm, name, title) {
    	let mc = this.create({name, title}, pm.schema.node("choice",{name, value: 0}))
   		let tr = pm.tr.replaceSelection(mc).apply(andScroll)
  		return tr
   		// need to move to newly added node
	},
	select(pm) {
		return true
		//return pm.doc.path(pm.selection.from.path).type.canContainType(this)
	},
	params: [
 	    { name: "Name", label: "Short ID", type: "text",
   	  	  prefill: function(pm) { return selectedNodeAttr(pm, this, "name") },
 		  options: {
 			  pattern: namePattern, 
 			  size: 10, 
 			  title: nameTitle}},
	 	{ name: "Title", label: "Description", type: "text", 
	      prefill: function(pm) { return selectedNodeAttr(pm, this, "title") }}
	]
})

defParamsClick(MultipleChoice,"schema:multiplechoice:insertMultipleChoice")

insertCSS(`

.widgets-choice input {
	float: left;
}

div.widgets-choice:first-child input {
	display: none;
}

.widgets-multiplechoice:before {
	content: attr(title);
	color: black;
	font-size: 14px;
	font-weight: bold;
}

.ProseMirror .widgets-choice:hover {
	cursor: text;
}

.ProseMirror .widgets-multiplechoice {}

`)