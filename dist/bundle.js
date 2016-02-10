(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["libraryname"] = factory();
	else
		root["libraryname"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.widgetInsertMenu = exports.TextArea = exports.TextField = exports.Select = exports.RadioButton = exports.CheckBox = exports.Website = exports.SpreadSheet = exports.InlineMath = exports.Image = exports.CarryForward = exports.BlockMath = exports.Selection = exports.ShortAnswer = exports.Essay = exports.Scale = exports.ScaleDisplay = exports.Choice = exports.MultipleChoice = exports.CheckItem = exports.CheckList = exports.TextBox = exports.Input = undefined;

	var _questions = __webpack_require__(1);

	Object.defineProperty(exports, "Input", {
		enumerable: true,
		get: function get() {
			return _questions.Input;
		}
	});
	Object.defineProperty(exports, "TextBox", {
		enumerable: true,
		get: function get() {
			return _questions.TextBox;
		}
	});
	Object.defineProperty(exports, "CheckList", {
		enumerable: true,
		get: function get() {
			return _questions.CheckList;
		}
	});
	Object.defineProperty(exports, "CheckItem", {
		enumerable: true,
		get: function get() {
			return _questions.CheckItem;
		}
	});
	Object.defineProperty(exports, "MultipleChoice", {
		enumerable: true,
		get: function get() {
			return _questions.MultipleChoice;
		}
	});
	Object.defineProperty(exports, "Choice", {
		enumerable: true,
		get: function get() {
			return _questions.Choice;
		}
	});
	Object.defineProperty(exports, "ScaleDisplay", {
		enumerable: true,
		get: function get() {
			return _questions.ScaleDisplay;
		}
	});
	Object.defineProperty(exports, "Scale", {
		enumerable: true,
		get: function get() {
			return _questions.Scale;
		}
	});
	Object.defineProperty(exports, "Essay", {
		enumerable: true,
		get: function get() {
			return _questions.Essay;
		}
	});
	Object.defineProperty(exports, "ShortAnswer", {
		enumerable: true,
		get: function get() {
			return _questions.ShortAnswer;
		}
	});
	Object.defineProperty(exports, "Selection", {
		enumerable: true,
		get: function get() {
			return _questions.Selection;
		}
	});

	var _content = __webpack_require__(67);

	Object.defineProperty(exports, "BlockMath", {
		enumerable: true,
		get: function get() {
			return _content.BlockMath;
		}
	});
	Object.defineProperty(exports, "CarryForward", {
		enumerable: true,
		get: function get() {
			return _content.CarryForward;
		}
	});
	Object.defineProperty(exports, "Image", {
		enumerable: true,
		get: function get() {
			return _content.Image;
		}
	});
	Object.defineProperty(exports, "InlineMath", {
		enumerable: true,
		get: function get() {
			return _content.InlineMath;
		}
	});
	Object.defineProperty(exports, "SpreadSheet", {
		enumerable: true,
		get: function get() {
			return _content.SpreadSheet;
		}
	});
	Object.defineProperty(exports, "Website", {
		enumerable: true,
		get: function get() {
			return _content.Website;
		}
	});

	var _input = __webpack_require__(55);

	Object.defineProperty(exports, "Input", {
		enumerable: true,
		get: function get() {
			return _input.Input;
		}
	});
	Object.defineProperty(exports, "CheckBox", {
		enumerable: true,
		get: function get() {
			return _input.CheckBox;
		}
	});
	Object.defineProperty(exports, "RadioButton", {
		enumerable: true,
		get: function get() {
			return _input.RadioButton;
		}
	});
	Object.defineProperty(exports, "Select", {
		enumerable: true,
		get: function get() {
			return _input.Select;
		}
	});
	Object.defineProperty(exports, "TextField", {
		enumerable: true,
		get: function get() {
			return _input.TextField;
		}
	});
	Object.defineProperty(exports, "TextArea", {
		enumerable: true,
		get: function get() {
			return _input.TextArea;
		}
	});

	var _dom = __webpack_require__(14);

	var _menu = __webpack_require__(76);

	var contentInsertMenu = new _menu.DropdownSubmenu({ label: "Content" }, [new _menu.MenuCommandGroup("content")]);
	var questionInsertMenu = new _menu.DropdownSubmenu({ label: "Question" }, [new _menu.MenuCommandGroup("question")]);

	var widgetInsertMenu = exports.widgetInsertMenu = new _menu.Dropdown({ label: "Insert..", displayActive: true, class: "ProseMirror-widgetinsert-dropdown" }, [contentInsertMenu, questionInsertMenu]);

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-edit:hover {\n\tbackground-image: url('icons/settings.png');\n\tbackground-repeat: no-repeat;\n\tbackground-position: top left;\n\tcursor: pointer;\n }\n\n.ProseMirror-menu-dropdown-item {\n\twhite-space: nowrap;\n}\n\n.ProseMirror-menu-dropdown-menu {\n\tborder-radius: 6px;\n}\n\n.ProseMirror-menu-submenu {\n\tborder-radius: 6px;\n}\n\n");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _textbox = __webpack_require__(2);

	Object.defineProperty(exports, "TextBox", {
	  enumerable: true,
	  get: function get() {
	    return _textbox.TextBox;
	  }
	});

	var _shortanswer = __webpack_require__(54);

	Object.defineProperty(exports, "ShortAnswer", {
	  enumerable: true,
	  get: function get() {
	    return _shortanswer.ShortAnswer;
	  }
	});

	var _essay = __webpack_require__(62);

	Object.defineProperty(exports, "Essay", {
	  enumerable: true,
	  get: function get() {
	    return _essay.Essay;
	  }
	});

	var _multiplechoice = __webpack_require__(63);

	Object.defineProperty(exports, "MultipleChoice", {
	  enumerable: true,
	  get: function get() {
	    return _multiplechoice.MultipleChoice;
	  }
	});
	Object.defineProperty(exports, "Choice", {
	  enumerable: true,
	  get: function get() {
	    return _multiplechoice.Choice;
	  }
	});

	var _checklist = __webpack_require__(64);

	Object.defineProperty(exports, "CheckList", {
	  enumerable: true,
	  get: function get() {
	    return _checklist.CheckList;
	  }
	});
	Object.defineProperty(exports, "CheckItem", {
	  enumerable: true,
	  get: function get() {
	    return _checklist.CheckItem;
	  }
	});

	var _scale = __webpack_require__(65);

	Object.defineProperty(exports, "Scale", {
	  enumerable: true,
	  get: function get() {
	    return _scale.Scale;
	  }
	});
	Object.defineProperty(exports, "ScaleDisplay", {
	  enumerable: true,
	  get: function get() {
	    return _scale.ScaleDisplay;
	  }
	});

	var _selection = __webpack_require__(66);

	Object.defineProperty(exports, "Selection", {
	  enumerable: true,
	  get: function get() {
	    return _selection.Selection;
	  }
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.TextBox = undefined;

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextBox = exports.TextBox = function (_Textblock) {
		_inherits(TextBox, _Textblock);

		function TextBox() {
			_classCallCheck(this, TextBox);

			return _possibleConstructorReturn(this, _Textblock.apply(this, arguments));
		}

		return TextBox;
	}(_model.Textblock);

	(0, _utils.defParser)(TextBox, "div", "widgets-textbox");

	TextBox.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", { class: "widgets-textbox" });
	};

	(0, _dom.insertCSS)("\n\n.widgets-textbox {\n\tmargin-left: 1.2em;\n}\n\n");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	        value: true
	});

	var _node = __webpack_require__(4);

	Object.defineProperty(exports, "Node", {
	        enumerable: true,
	        get: function get() {
	                return _node.Node;
	        }
	});

	var _fragment = __webpack_require__(5);

	Object.defineProperty(exports, "Fragment", {
	        enumerable: true,
	        get: function get() {
	                return _fragment.Fragment;
	        }
	});
	Object.defineProperty(exports, "emptyFragment", {
	        enumerable: true,
	        get: function get() {
	                return _fragment.emptyFragment;
	        }
	});

	var _mark = __webpack_require__(8);

	Object.defineProperty(exports, "Mark", {
	        enumerable: true,
	        get: function get() {
	                return _mark.Mark;
	        }
	});

	var _schema = __webpack_require__(10);

	Object.defineProperty(exports, "SchemaSpec", {
	        enumerable: true,
	        get: function get() {
	                return _schema.SchemaSpec;
	        }
	});
	Object.defineProperty(exports, "Schema", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Schema;
	        }
	});
	Object.defineProperty(exports, "SchemaError", {
	        enumerable: true,
	        get: function get() {
	                return _schema.SchemaError;
	        }
	});
	Object.defineProperty(exports, "NodeType", {
	        enumerable: true,
	        get: function get() {
	                return _schema.NodeType;
	        }
	});
	Object.defineProperty(exports, "Block", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Block;
	        }
	});
	Object.defineProperty(exports, "Textblock", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Textblock;
	        }
	});
	Object.defineProperty(exports, "Inline", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Inline;
	        }
	});
	Object.defineProperty(exports, "Text", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Text;
	        }
	});
	Object.defineProperty(exports, "MarkType", {
	        enumerable: true,
	        get: function get() {
	                return _schema.MarkType;
	        }
	});
	Object.defineProperty(exports, "Attribute", {
	        enumerable: true,
	        get: function get() {
	                return _schema.Attribute;
	        }
	});

	var _defaultschema = __webpack_require__(12);

	Object.defineProperty(exports, "defaultSchema", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.defaultSchema;
	        }
	});
	Object.defineProperty(exports, "Doc", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.Doc;
	        }
	});
	Object.defineProperty(exports, "BlockQuote", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.BlockQuote;
	        }
	});
	Object.defineProperty(exports, "OrderedList", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.OrderedList;
	        }
	});
	Object.defineProperty(exports, "BulletList", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.BulletList;
	        }
	});
	Object.defineProperty(exports, "ListItem", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.ListItem;
	        }
	});
	Object.defineProperty(exports, "HorizontalRule", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.HorizontalRule;
	        }
	});
	Object.defineProperty(exports, "Paragraph", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.Paragraph;
	        }
	});
	Object.defineProperty(exports, "Heading", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.Heading;
	        }
	});
	Object.defineProperty(exports, "CodeBlock", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.CodeBlock;
	        }
	});
	Object.defineProperty(exports, "Image", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.Image;
	        }
	});
	Object.defineProperty(exports, "HardBreak", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.HardBreak;
	        }
	});
	Object.defineProperty(exports, "CodeMark", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.CodeMark;
	        }
	});
	Object.defineProperty(exports, "EmMark", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.EmMark;
	        }
	});
	Object.defineProperty(exports, "StrongMark", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.StrongMark;
	        }
	});
	Object.defineProperty(exports, "LinkMark", {
	        enumerable: true,
	        get: function get() {
	                return _defaultschema.LinkMark;
	        }
	});

	var _pos = __webpack_require__(9);

	Object.defineProperty(exports, "Pos", {
	        enumerable: true,
	        get: function get() {
	                return _pos.Pos;
	        }
	});

	var _diff = __webpack_require__(13);

	Object.defineProperty(exports, "findDiffStart", {
	        enumerable: true,
	        get: function get() {
	                return _diff.findDiffStart;
	        }
	});
	Object.defineProperty(exports, "findDiffEnd", {
	        enumerable: true,
	        get: function get() {
	                return _diff.findDiffEnd;
	        }
	});

	var _error = __webpack_require__(6);

	Object.defineProperty(exports, "ModelError", {
	        enumerable: true,
	        get: function get() {
	                return _error.ModelError;
	        }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.TextNode = exports.Node = undefined;

	var _fragment = __webpack_require__(5);

	var _mark = __webpack_require__(8);

	var _pos = __webpack_require__(9);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var emptyArray = [],
	    emptyAttrs = Object.create(null);

	// ;; This class represents a node in the tree that makes up a
	// ProseMirror document. So a document is an instance of `Node`, with
	// children that are also instances of `Node`.
	//
	// Nodes are persistent data structures. Instead of changing them, you
	// create new ones with the content you want. Old ones keep pointing
	// at the old document shape. This is made cheaper by sharing
	// structure between the old and new data as much as possible, which a
	// tree shape like this (without back pointers) makes easy.
	//
	// **Never** directly mutate the properties of a `Node` object. See
	// [this guide](guide/doc.html) for more information.

	var Node = function () {
	  function Node(type, attrs, content, marks) {
	    _classCallCheck(this, Node);

	    // :: NodeType
	    // The type of node that this is.
	    this.type = type;

	    // :: Object
	    // An object mapping attribute names to string values. The kind of
	    // attributes allowed and required are determined by the node
	    // type.
	    this.attrs = attrs;

	    // :: Fragment
	    // The node's content.
	    this.content = content || _fragment.emptyFragment;

	    // :: [Mark]
	    // The marks (things like whether it is emphasized or part of a
	    // link) associated with this node.
	    this.marks = marks || emptyArray;
	  }

	  // :: number
	  // The size of the node's content, which is the maximum offset in
	  // the node. For nodes that don't contain text, this is also the
	  // number of child nodes that the node has.

	  _createClass(Node, [{
	    key: "child",

	    // :: (number) → Node
	    // Retrieve the child at the given offset. Note that this is **not**
	    // the appropriate way to loop over a node. `child`'s complexity may
	    // be non-constant for some nodes, and it will return the same node
	    // multiple times when calling it for different offsets within a
	    // text node.
	    value: function child(off) {
	      return this.content.child(off);
	    }

	    // :: (?number, ?number) → Iterator<Node>
	    // Create an iterator over this node's children, optionally starting
	    // and ending at a given offset.

	  }, {
	    key: "iter",
	    value: function iter(start, end) {
	      return this.content.iter(start, end);
	    }

	    // :: (?number, ?number) → Iterator<Node>
	    // Create a reverse iterator (iterating from the node's end towards
	    // its start) over this node's children, optionally starting and
	    // ending at a given offset. **Note**: if given, `start` should be
	    // greater than (or equal) to `end`.

	  }, {
	    key: "reverseIter",
	    value: function reverseIter(start, end) {
	      return this.content.reverseIter(start, end);
	    }

	    // :: (number) → {start: number, node: Node}
	    // Find the node that sits before a given offset. Can be used to
	    // find out which text node covers a given offset. The `start`
	    // property of the return value is the starting offset of the
	    // returned node. It is an error to call this with offset 0.

	  }, {
	    key: "chunkBefore",
	    value: function chunkBefore(off) {
	      return this.content.chunkBefore(off);
	    }

	    // :: (number) → {start: number, node: Node}
	    // Find the node that sits after a given offset. The `start`
	    // property of the return value is the starting offset of the
	    // returned node. It is an error to call this with offset
	    // corresponding to the end of the node.

	  }, {
	    key: "chunkAfter",
	    value: function chunkAfter(off) {
	      return this.content.chunkAfter(off);
	    }

	    // :: ((node: Node, start: number, end: number))
	    // Call the given function for each child node. The function will be
	    // given the node, as well as its start and end offsets, as
	    // arguments.

	  }, {
	    key: "forEach",
	    value: function forEach(f) {
	      this.content.forEach(f);
	    }

	    // :: string
	    // Concatenate all the text nodes found in this fragment and its
	    // children.

	  }, {
	    key: "sameMarkup",

	    // :: (Node) → bool
	    // Compare the markup (type, attributes, and marks) of this node to
	    // those of another. Returns `true` if both have the same markup.
	    value: function sameMarkup(other) {
	      return this.hasMarkup(other.type, other.attrs, other.marks);
	    }

	    // :: (NodeType, ?Object, ?[Mark]) → bool
	    // Check whether this node's markup correspond to the given type,
	    // attributes, and marks.

	  }, {
	    key: "hasMarkup",
	    value: function hasMarkup(type, attrs, marks) {
	      return this.type == type && Node.sameAttrs(this.attrs, attrs || emptyAttrs) && _mark.Mark.sameSet(this.marks, marks || emptyArray);
	    }
	  }, {
	    key: "copy",

	    // :: (?Fragment) → Node
	    // Create a new node with the same markup as this node, containing
	    // the given content (or empty, if no content is given).
	    value: function copy() {
	      var content = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	      return new this.constructor(this.type, this.attrs, content, this.marks);
	    }

	    // :: ([Mark]) → Node
	    // Create a copy of this node, with the given set of marks instead
	    // of the node's own marks.

	  }, {
	    key: "mark",
	    value: function mark(marks) {
	      return new this.constructor(this.type, this.attrs, this.content, marks);
	    }

	    // :: (number, ?number) → Node
	    // Create a copy of this node with only the content between the
	    // given offsets. If `to` is not given, it defaults to the end of
	    // the node.

	  }, {
	    key: "slice",
	    value: function slice(from, to) {
	      return this.copy(this.content.slice(from, to));
	    }

	    // :: (number, number, Fragment) → Node
	    // Create a copy of this node with the content between the given
	    // offsets replaced by the given fragment.

	  }, {
	    key: "splice",
	    value: function splice(from, to, replace) {
	      return this.copy(this.content.slice(0, from).append(replace).append(this.content.slice(to)));
	    }

	    // :: (Fragment, ?number, ?number) → Node
	    // [Append](#Fragment.append) the given fragment to this node's
	    // content, and create a new node with the result.

	  }, {
	    key: "append",
	    value: function append(fragment) {
	      var joinLeft = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	      var joinRight = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      return this.copy(this.content.append(fragment, joinLeft, joinRight));
	    }

	    // :: (number, Node) → Node
	    // Return a copy of this node with the child at the given offset
	    // replaced by the given node. **Note**: The offset should not fall
	    // within a text node.

	  }, {
	    key: "replace",
	    value: function replace(pos, node) {
	      return this.copy(this.content.replace(pos, node));
	    }

	    // :: ([number], Node) → Node
	    // Return a copy of this node with the descendant at `path` replaced
	    // by the given replacement node. This will copy as many sub-nodes as
	    // there are elements in `path`.

	  }, {
	    key: "replaceDeep",
	    value: function replaceDeep(path, node) {
	      var depth = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      if (depth == path.length) return node;
	      var pos = path[depth];
	      return this.replace(pos, this.child(pos).replaceDeep(path, node, depth + 1));
	    }

	    // :: (number, string) → Node
	    // “Close” this node by making sure that, if it is empty, and is not
	    // allowed to be so, it has its default content inserted. When depth
	    // is greater than zero, sub-nodes at the given side (which can be
	    // `"start"` or `"end"`) are closed too. Returns itself if no work
	    // is necessary, or a closed copy if something did need to happen.

	  }, {
	    key: "close",
	    value: function close(depth, side) {
	      if (depth == 0 && this.size == 0 && !this.type.canBeEmpty) return this.copy(this.type.defaultContent());
	      var closedContent = undefined;
	      if (depth > 0 && (closedContent = this.content.close(depth - 1, side)) != this.content) return this.copy(closedContent);
	      return this;
	    }

	    // :: ([number]) → Node
	    // Get the descendant node at the given path, which is interpreted
	    // as a series of offsets into successively deeper nodes. For example,
	    // if a node contains a paragraph and a list with 3 items, the path
	    // to the first item in the list would be [1, 0].

	  }, {
	    key: "path",
	    value: function path(_path) {
	      for (var i = 0, node = this; i < _path.length; node = node.child(_path[i]), i++) {}
	      return node;
	    }

	    // :: (Pos) → ?Node
	    // Get the node after the given position, if any.

	  }, {
	    key: "nodeAfter",
	    value: function nodeAfter(pos) {
	      var parent = this.path(pos.path);
	      return pos.offset < parent.size ? parent.child(pos.offset) : null;
	    }
	  }, {
	    key: "pathNodes",
	    value: function pathNodes(path) {
	      var nodes = [];
	      for (var i = 0, node = this;; i++) {
	        nodes.push(node);
	        if (i == path.length) break;
	        node = node.child(path[i]);
	      }
	      return nodes;
	    }

	    // :: (Pos, Pos) → {from: Pos, to: Pos}
	    // Finds the narrowest sibling range (two positions that both point
	    // into the same node) that encloses the given positions.

	  }, {
	    key: "siblingRange",
	    value: function siblingRange(from, to) {
	      for (var i = 0, node = this;; i++) {
	        if (node.isTextblock) {
	          var path = from.path.slice(0, i - 1),
	              offset = from.path[i - 1];
	          return { from: new _pos.Pos(path, offset), to: new _pos.Pos(path, offset + 1) };
	        }
	        var fromEnd = i == from.path.length,
	            toEnd = i == to.path.length;
	        var left = fromEnd ? from.offset : from.path[i];
	        var right = toEnd ? to.offset : to.path[i];
	        if (fromEnd || toEnd || left != right) {
	          var path = from.path.slice(0, i);
	          return { from: new _pos.Pos(path, left), to: new _pos.Pos(path, right + (toEnd ? 0 : 1)) };
	        }
	        node = node.child(left);
	      }
	    }

	    // :: (?Pos, ?Pos, (node: Node, path: [number], parent: Node))
	    // Iterate over all nodes between the given two positions, calling
	    // the callback with the node, the path towards it, and its parent
	    // node, as arguments. `from` and `to` may be `null` to denote
	    // starting at the start of the node or ending at its end. Note that
	    // the path passed to the callback is mutated as iteration
	    // continues, so if you want to preserve it, make a copy.

	  }, {
	    key: "nodesBetween",
	    value: function nodesBetween(from, to, f) {
	      var path = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];
	      var parent = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

	      if (f(this, path, parent) === false) return;
	      this.content.nodesBetween(from, to, f, path, this);
	    }

	    // :: (?Pos, ?Pos, (node: Node, path: [number], start: number, end: number, parent: Node))
	    // Calls the given function for each inline node between the two
	    // given positions. Pass null for `from` or `to` to start or end at
	    // the start or end of the node.

	  }, {
	    key: "inlineNodesBetween",
	    value: function inlineNodesBetween(from, to, f) {
	      this.nodesBetween(from, to, function (node, path, parent) {
	        if (node.isInline) {
	          var last = path.length - 1;
	          f(node, path.slice(0, last), path[last], path[last] + node.width, parent);
	        }
	      });
	    }

	    // :: (?Pos, ?Pos) → Node
	    // Returns a copy of this node containing only the content between
	    // `from` and `to`. You can pass `null` for either of them to start
	    // or end at the start or end of the node.

	  }, {
	    key: "sliceBetween",
	    value: function sliceBetween(from, to) {
	      var depth = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      return this.copy(this.content.sliceBetween(from, to, depth));
	    }

	    // :: (Pos) → [Mark]
	    // Get the marks of the node before the given position or, if that
	    // position is at the start of a non-empty node, those of the node
	    // after it.

	  }, {
	    key: "marksAt",
	    value: function marksAt(pos) {
	      var parent = this.path(pos.path);
	      if (!parent.isTextblock || !parent.size) return emptyArray;
	      return parent.chunkBefore(pos.offset || 1).node.marks;
	    }

	    // :: (?Pos, ?Pos, MarkType) → bool
	    // Test whether a mark of the given type occurs in this document
	    // between the two given positions.

	  }, {
	    key: "rangeHasMark",
	    value: function rangeHasMark(from, to, type) {
	      var found = false;
	      this.nodesBetween(from, to, function (node) {
	        if (type.isInSet(node.marks)) found = true;
	      });
	      return found;
	    }

	    // :: bool
	    // True when this is a block (non-inline node)

	  }, {
	    key: "toString",

	    // :: () → string
	    // Return a string representation of this node for debugging
	    // purposes.
	    value: function toString() {
	      var name = this.type.name;
	      if (this.content.size) name += "(" + this.content.toString() + ")";
	      return wrapMarks(this.marks, name);
	    }

	    // :: () → Object
	    // Return a JSON-serializeable representation of this node.

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      var obj = { type: this.type.name };
	      for (var _ in this.attrs) {
	        obj.attrs = this.attrs;
	        break;
	      }
	      if (this.size) obj.content = this.content.toJSON();
	      if (this.marks.length) obj.marks = this.marks.map(function (n) {
	        return n.toJSON();
	      });
	      return obj;
	    }

	    // This is a hack to be able to treat a node object as an iterator result

	  }, {
	    key: "size",
	    get: function get() {
	      return this.content.size;
	    }

	    // :: number
	    // The width of this node. Always 1 for non-text nodes, and the
	    // length of the text for text nodes.

	  }, {
	    key: "width",
	    get: function get() {
	      return 1;
	    }
	  }, {
	    key: "textContent",
	    get: function get() {
	      return this.content.textContent;
	    }

	    // :: ?Node
	    // Returns this node's first child, or `null` if there are no
	    // children.

	  }, {
	    key: "firstChild",
	    get: function get() {
	      return this.content.firstChild;
	    }

	    // :: ?Node
	    // Returns this node's last child, or `null` if there are no
	    // children.

	  }, {
	    key: "lastChild",
	    get: function get() {
	      return this.content.lastChild;
	    }
	  }, {
	    key: "isBlock",
	    get: function get() {
	      return this.type.isBlock;
	    }

	    // :: bool
	    // True when this is a textblock node, a block node with inline
	    // content.

	  }, {
	    key: "isTextblock",
	    get: function get() {
	      return this.type.isTextblock;
	    }

	    // :: bool
	    // True when this is an inline node (a text node or a node that can
	    // appear among text).

	  }, {
	    key: "isInline",
	    get: function get() {
	      return this.type.isInline;
	    }

	    // :: bool
	    // True when this is a text node.

	  }, {
	    key: "isText",
	    get: function get() {
	      return this.type.isText;
	    }
	  }, {
	    key: "value",
	    get: function get() {
	      return this;
	    }

	    // :: (Schema, Object) → Node
	    // Deserialize a node from its JSON representation.

	  }], [{
	    key: "sameAttrs",
	    value: function sameAttrs(a, b) {
	      if (a == b) return true;
	      for (var prop in a) {
	        if (a[prop] !== b[prop]) return false;
	      }return true;
	    }
	  }, {
	    key: "fromJSON",
	    value: function fromJSON(schema, json) {
	      var type = schema.nodeType(json.type);
	      var content = json.text != null ? json.text : _fragment.Fragment.fromJSON(schema, json.content);
	      return type.create(json.attrs, content, json.marks && json.marks.map(schema.markFromJSON));
	    }
	  }]);

	  return Node;
	}();

	exports.Node = Node;

	if (typeof Symbol != "undefined") {
	  // :: () → Iterator<Node>
	  // A fragment is iterable, in the ES6 sense.
	  Node.prototype[Symbol.iterator] = function () {
	    return this.iter();
	  };
	}

	// ;; #forward=Node

	var TextNode = exports.TextNode = function (_Node) {
	  _inherits(TextNode, _Node);

	  function TextNode(type, attrs, content, marks) {
	    _classCallCheck(this, TextNode);

	    // :: ?string
	    // For text nodes, this contains the node's text content.

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextNode).call(this, type, attrs, null, marks));

	    _this.text = content;
	    return _this;
	  }

	  _createClass(TextNode, [{
	    key: "toString",
	    value: function toString() {
	      return wrapMarks(this.marks, JSON.stringify(this.text));
	    }
	  }, {
	    key: "mark",
	    value: function mark(marks) {
	      return new TextNode(this.type, this.attrs, this.text, marks);
	    }
	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      var base = _get(Object.getPrototypeOf(TextNode.prototype), "toJSON", this).call(this);
	      base.text = this.text;
	      return base;
	    }
	  }, {
	    key: "textContent",
	    get: function get() {
	      return this.text;
	    }
	  }, {
	    key: "width",
	    get: function get() {
	      return this.text.length;
	    }
	  }]);

	  return TextNode;
	}(Node);

	function wrapMarks(marks, str) {
	  for (var i = marks.length - 1; i >= 0; i--) {
	    str = marks[i].type.name + "(" + str + ")";
	  }return str;
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.emptyFragment = exports.Fragment = undefined;

	var _error = __webpack_require__(6);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A fragment is an abstract type used to represent a node's
	// collection of child nodes. It tries to hide considerations about
	// the actual way in which the child nodes are stored, so that
	// different representations (nodes that only contain simple nodes
	// versus nodes that also contain text) can be approached using the
	// same API.
	//
	// Fragments are persistent data structures. That means you should
	// _not_ mutate them or their content, but create new instances
	// whenever needed. The API tries to make this easy.

	var Fragment = exports.Fragment = function () {
	  function Fragment() {
	    _classCallCheck(this, Fragment);
	  }

	  _createClass(Fragment, [{
	    key: "append",

	    // :: (Fragment, number, number) → Fragment
	    // Create a fragment that combines this one with another fragment.
	    // Takes care of merging adjacent text nodes and can also merge
	    // “open” nodes at the boundary. `joinLeft` and `joinRight` give the
	    // depth to which the left and right fragments are open. If open
	    // nodes with the same markup are found on both sides, they are
	    // joined. If not, the open nodes are [closed](#Node.close).
	    value: function append(other) {
	      var joinLeft = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	      var joinRight = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      if (!this.size) return joinRight ? other.replace(0, other.firstChild.close(joinRight - 1, "start")) : other;
	      if (!other.size) return joinLeft ? this.replace(this.size - 1, this.lastChild.close(joinLeft - 1, "end")) : this;
	      return this.appendInner(other, joinLeft, joinRight);
	    }

	    // :: string
	    // Concatenate all the text nodes found in this fragment and its
	    // children.

	  }, {
	    key: "toString",

	    // :: () → string
	    // Return a debugging string that describes this fragment.
	    value: function toString() {
	      var str = "";
	      this.forEach(function (n) {
	        return str += (str ? ", " : "") + n.toString();
	      });
	      return str;
	    }

	    // :: (number, number, ?(Node) → Node) → [Node]
	    // Produce an array with the child nodes between the given
	    // boundaries, optionally mapping a function over them.

	  }, {
	    key: "toArray",
	    value: function toArray() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var to = arguments.length <= 1 || arguments[1] === undefined ? this.size : arguments[1];
	      var f = arguments[2];

	      var result = [];
	      for (var iter = this.iter(from, to), n; n = iter.next().value;) {
	        result.push(f ? f(n) : n);
	      }return result;
	    }

	    // :: ((Node) → Node) → Fragment
	    // Produce a new Fragment by mapping all this fragment's children
	    // through a function.

	  }, {
	    key: "map",
	    value: function map(f) {
	      return Fragment.fromArray(this.toArray(undefined, undefined, f));
	    }

	    // :: ((Node) → bool) → bool
	    // Returns `true` if the given function returned `true` for any of
	    // the fragment's children.

	  }, {
	    key: "some",
	    value: function some(f) {
	      for (var iter = this.iter(), n; n = iter.next().value;) {
	        if (f(n)) return n;
	      }
	    }
	  }, {
	    key: "close",
	    value: function close(depth, side) {
	      var child = side == "start" ? this.firstChild : this.lastChild;
	      var closed = child.close(depth - 1, side);
	      if (closed == child) return this;
	      return this.replace(side == "start" ? 0 : this.size - 1, closed);
	    }
	  }, {
	    key: "nodesBetween",
	    value: function nodesBetween(from, to, f, path, parent) {
	      var moreFrom = from && from.depth > path.length,
	          moreTo = to && to.depth > path.length;
	      var start = moreFrom ? from.path[path.length] : from ? from.offset : 0;
	      var end = moreTo ? to.path[path.length] + 1 : to ? to.offset : this.size;
	      for (var iter = this.iter(start, end), node; node = iter.next().value;) {
	        var startOffset = iter.offset - node.width;
	        path.push(startOffset);
	        node.nodesBetween(moreFrom && startOffset == start ? from : null, moreTo && iter.offset == end ? to : null, f, path, parent);
	        path.pop();
	      }
	    }

	    // :: (?Pos, ?Pos) → Fragment
	    // Slice out the sub-fragment between the two given positions.
	    // `null` can be passed for either to indicate the slice should go
	    // all the way to the start or end of the fragment.

	  }, {
	    key: "sliceBetween",
	    value: function sliceBetween(from, to) {
	      var depth = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      var moreFrom = from && from.depth > depth,
	          moreTo = to && to.depth > depth;
	      var start = moreFrom ? from.path[depth] : from ? from.offset : 0;
	      var end = moreTo ? to.path[depth] + 1 : to ? to.offset : this.size;
	      var nodes = [];
	      for (var iter = this.iter(start, end), node; node = iter.next().value;) {
	        var passFrom = moreFrom && iter.offset - node.width == start ? from : null;
	        var passTo = moreTo && iter.offset == end ? to : null;
	        if (passFrom || passTo) node = node.sliceBetween(passFrom, passTo, depth + 1);
	        nodes.push(node);
	      }
	      return new this.constructor(nodes);
	    }

	    // :: (Schema, Object) → Fragment
	    // Deserialize a fragment from its JSON representation.

	  }, {
	    key: "textContent",
	    get: function get() {
	      var text = "";
	      this.forEach(function (n) {
	        return text += n.textContent;
	      });
	      return text;
	    }
	  }], [{
	    key: "fromJSON",
	    value: function fromJSON(schema, value) {
	      return value ? this.fromArray(value.map(schema.nodeFromJSON)) : emptyFragment;
	    }

	    // :: ([Node]) → Fragment
	    // Build a fragment from an array of nodes.

	  }, {
	    key: "fromArray",
	    value: function fromArray(array) {
	      if (!array.length) return emptyFragment;
	      var hasText = false,
	          joined = undefined;
	      for (var i = 0; i < array.length; i++) {
	        var node = array[i];
	        if (node.isText) {
	          hasText = true;
	          if (i && array[i - 1].sameMarkup(node)) {
	            if (!joined) joined = array.slice(0, i);
	            joined[joined.length - 1] = node.copy(joined[joined.length - 1].text + node.text);
	            continue;
	          }
	        }
	        if (joined) joined.push(node);
	      }
	      return hasText ? new TextFragment(joined || array) : new FlatFragment(array);
	    }

	    // :: (?union<Fragment, Node, [Node]>) → Fragment
	    // Create a fragment from something that can be interpreted as a set
	    // of nodes. For `null`, it returns the empty fragment. For a
	    // fragment, the fragment itself. For a node or array of nodes, a
	    // fragment containing those nodes.

	  }, {
	    key: "from",
	    value: function from(nodes) {
	      if (!nodes) return emptyFragment;
	      if (nodes instanceof Fragment) return nodes;
	      return this.fromArray(Array.isArray(nodes) ? nodes : [nodes]);
	    }
	  }]);

	  return Fragment;
	}();

	var iterEnd = { done: true };

	var FlatIterator = function () {
	  function FlatIterator(array, pos, end) {
	    _classCallCheck(this, FlatIterator);

	    this.array = array;
	    this.pos = pos;
	    this.end = end;
	  }

	  _createClass(FlatIterator, [{
	    key: "copy",
	    value: function copy() {
	      return new this.constructor(this.array, this.pos, this.end);
	    }
	  }, {
	    key: "atEnd",
	    value: function atEnd() {
	      return this.pos == this.end;
	    }
	  }, {
	    key: "next",
	    value: function next() {
	      return this.pos == this.end ? iterEnd : this.array[this.pos++];
	    }
	  }, {
	    key: "offset",
	    get: function get() {
	      return this.pos;
	    }
	  }]);

	  return FlatIterator;
	}();

	var ReverseFlatIterator = function (_FlatIterator) {
	  _inherits(ReverseFlatIterator, _FlatIterator);

	  function ReverseFlatIterator() {
	    _classCallCheck(this, ReverseFlatIterator);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReverseFlatIterator).apply(this, arguments));
	  }

	  _createClass(ReverseFlatIterator, [{
	    key: "next",
	    value: function next() {
	      return this.pos == this.end ? iterEnd : this.array[--this.pos];
	    }
	  }]);

	  return ReverseFlatIterator;
	}(FlatIterator);

	// ;; #forward=Fragment

	var FlatFragment = function (_Fragment) {
	  _inherits(FlatFragment, _Fragment);

	  function FlatFragment(content) {
	    _classCallCheck(this, FlatFragment);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(FlatFragment).call(this));

	    _this2.content = content;
	    return _this2;
	  }

	  // :: (?number, ?number) → Iterator<Node>
	  // Create a forward iterator over the content of the fragment. An
	  // explicit start and end offset can be given to have the iterator
	  // go over only part of the content. If an iteration bound falls
	  // within a text node, only the part that is within the bounds is
	  // yielded.

	  _createClass(FlatFragment, [{
	    key: "iter",
	    value: function iter() {
	      var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var end = arguments.length <= 1 || arguments[1] === undefined ? this.size : arguments[1];

	      return new FlatIterator(this.content, start, end);
	    }

	    // :: (?number, ?number) → Iterator<Node>
	    // Create a reverse iterator over the content of the fragment. An
	    // explicit start and end offset can be given to have the iterator
	    // go over only part of the content. **Note**: `start` should be
	    // greater than `end`, when passed.

	  }, {
	    key: "reverseIter",
	    value: function reverseIter() {
	      var start = arguments.length <= 0 || arguments[0] === undefined ? this.size : arguments[0];
	      var end = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      return new ReverseFlatIterator(this.content, start, end);
	    }

	    // :: number
	    // The maximum offset in this fragment.

	  }, {
	    key: "child",

	    // :: (number) → Node
	    // Get the child at the given offset. Might return a text node that
	    // stretches before and/or after the offset.
	    value: function child(off) {
	      if (off < 0 || off >= this.content.length) _error.ModelError.raise("Offset " + off + " out of range");
	      return this.content[off];
	    }

	    // :: ((node: Node, start: number, end: number))
	    // Call the given function for each node in the fragment, passing it
	    // the node, its start offset, and its end offset.

	  }, {
	    key: "forEach",
	    value: function forEach(f) {
	      for (var i = 0; i < this.content.length; i++) {
	        f(this.content[i], i, i + 1);
	      }
	    }

	    // :: (number) → {start: number, node: Node}
	    // Find the node before the given offset. Returns an object
	    // containing the node as well as its start index. Offset should be
	    // greater than zero.

	  }, {
	    key: "chunkBefore",
	    value: function chunkBefore(off) {
	      return { node: this.child(off - 1), start: off - 1 };
	    }

	    // :: (number) → {start: number, node: Node}
	    // Find the node after the given offset. Returns an object
	    // containing the node as well as its start index. Offset should be
	    // less than the fragment's size.

	  }, {
	    key: "chunkAfter",
	    value: function chunkAfter(off) {
	      return { node: this.child(off), start: off };
	    }

	    // :: (number, ?number) → Fragment
	    // Return a fragment with only the nodes between the given offsets.
	    // When `to` is not given, the slice will go to the end of the
	    // fragment.

	  }, {
	    key: "slice",
	    value: function slice(from) {
	      var to = arguments.length <= 1 || arguments[1] === undefined ? this.size : arguments[1];

	      if (from == to) return emptyFragment;
	      return new FlatFragment(this.content.slice(from, to));
	    }

	    // :: (number, Node) → Fragment
	    // Return a fragment in which the node at the given offset is
	    // replaced by the given node. The node, as well as the one it
	    // replaces, should not be text nodes.

	  }, {
	    key: "replace",
	    value: function replace(offset, node) {
	      if (node.isText) _error.ModelError.raise("Argument to replace should be a non-text node");
	      var copy = this.content.slice();
	      copy[offset] = node;
	      return new FlatFragment(copy);
	    }
	  }, {
	    key: "appendInner",
	    value: function appendInner(other, joinLeft, joinRight) {
	      var last = this.content.length - 1,
	          content = this.content.slice(0, last);
	      var before = this.content[last],
	          after = other.firstChild;
	      if (joinLeft > 0 && joinRight > 0 && before.sameMarkup(after)) content.push(before.append(after.content, joinLeft - 1, joinRight - 1));else content.push(before.close(joinLeft - 1, "end"), after.close(joinRight - 1, "start"));
	      return Fragment.fromArray(content.concat(other.toArray(after.width)));
	    }

	    // :: () → Object
	    // Create a JSON-serializeable representation of this fragment.

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.content.map(function (n) {
	        return n.toJSON();
	      });
	    }
	  }, {
	    key: "size",
	    get: function get() {
	      return this.content.length;
	    }

	    // :: ?Node
	    // The first child of the fragment, or `null` if it is empty.

	  }, {
	    key: "firstChild",
	    get: function get() {
	      return this.content.length ? this.content[0] : null;
	    }

	    // :: ?Node
	    // The last child of the fragment, or `null` if it is empty.

	  }, {
	    key: "lastChild",
	    get: function get() {
	      return this.content.length ? this.content[this.content.length - 1] : null;
	    }
	  }]);

	  return FlatFragment;
	}(Fragment);

	// :: Fragment
	// An empty fragment. Intended to be reused whenever a node doesn't
	// contain anything (rather than allocating a new empty fragment for
	// each leaf node).

	var emptyFragment = exports.emptyFragment = new FlatFragment([]);

	var TextIterator = function () {
	  function TextIterator(fragment, startOffset, endOffset) {
	    var pos = arguments.length <= 3 || arguments[3] === undefined ? -1 : arguments[3];

	    _classCallCheck(this, TextIterator);

	    this.frag = fragment;
	    this.offset = startOffset;
	    this.pos = pos;
	    this.endOffset = endOffset;
	  }

	  _createClass(TextIterator, [{
	    key: "copy",
	    value: function copy() {
	      return new this.constructor(this.frag, this.offset, this.endOffset, this.pos);
	    }
	  }, {
	    key: "atEnd",
	    value: function atEnd() {
	      return this.offset == this.endOffset;
	    }
	  }, {
	    key: "next",
	    value: function next() {
	      if (this.pos == -1) {
	        var start = this.init();
	        if (start) return start;
	      }
	      return this.offset == this.endOffset ? iterEnd : this.advance();
	    }
	  }, {
	    key: "advance",
	    value: function advance() {
	      var node = this.frag.content[this.pos++],
	          end = this.offset + node.width;
	      if (end > this.endOffset) {
	        node = node.copy(node.text.slice(0, this.endOffset - this.offset));
	        this.offset = this.endOffset;
	        return node;
	      }
	      this.offset = end;
	      return node;
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this.pos = 0;
	      var offset = 0;
	      while (offset < this.offset) {
	        var node = this.frag.content[this.pos++],
	            end = offset + node.width;
	        if (end == this.offset) break;
	        if (end > this.offset) {
	          var sliceEnd = node.width;
	          if (end > this.endOffset) {
	            sliceEnd = this.endOffset - offset;
	            end = this.endOffset;
	          }
	          node = node.copy(node.text.slice(this.offset - offset, sliceEnd));
	          this.offset = end;
	          return node;
	        }
	        offset = end;
	      }
	    }
	  }]);

	  return TextIterator;
	}();

	var ReverseTextIterator = function (_TextIterator) {
	  _inherits(ReverseTextIterator, _TextIterator);

	  function ReverseTextIterator() {
	    _classCallCheck(this, ReverseTextIterator);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReverseTextIterator).apply(this, arguments));
	  }

	  _createClass(ReverseTextIterator, [{
	    key: "advance",
	    value: function advance() {
	      var node = this.frag.content[--this.pos],
	          end = this.offset - node.width;
	      if (end < this.endOffset) {
	        node = node.copy(node.text.slice(this.endOffset - end));
	        this.offset = this.endOffset;
	        return node;
	      }
	      this.offset = end;
	      return node;
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this.pos = this.frag.content.length;
	      var offset = this.frag.size;
	      while (offset > this.offset) {
	        var node = this.frag.content[--this.pos],
	            end = offset - node.width;
	        if (end == this.offset) break;
	        if (end < this.offset) {
	          if (end < this.endOffset) {
	            node = node.copy(node.text.slice(this.endOffset - end, this.offset - end));
	            end = this.endOffset;
	          } else {
	            node = node.copy(node.text.slice(0, this.offset - end));
	          }
	          this.offset = end;
	          return node;
	        }
	        offset = end;
	      }
	    }
	  }]);

	  return ReverseTextIterator;
	}(TextIterator);

	var TextFragment = function (_Fragment2) {
	  _inherits(TextFragment, _Fragment2);

	  function TextFragment(content, size) {
	    _classCallCheck(this, TextFragment);

	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(TextFragment).call(this));

	    _this4.content = content;
	    _this4.size = size || 0;
	    if (size == null) for (var i = 0; i < content.length; i++) {
	      _this4.size += content[i].width;
	    }return _this4;
	  }

	  _createClass(TextFragment, [{
	    key: "iter",
	    value: function iter() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var to = arguments.length <= 1 || arguments[1] === undefined ? this.size : arguments[1];

	      return new TextIterator(this, from, to);
	    }
	  }, {
	    key: "reverseIter",
	    value: function reverseIter() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? this.size : arguments[0];
	      var to = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      return new ReverseTextIterator(this, from, to);
	    }
	  }, {
	    key: "child",
	    value: function child(off) {
	      if (off < 0 || off >= this.size) _error.ModelError.raise("Offset " + off + " out of range");
	      for (var i = 0, curOff = 0; i < this.content.length; i++) {
	        var child = this.content[i];
	        curOff += child.width;
	        if (curOff > off) return child;
	      }
	    }
	  }, {
	    key: "forEach",
	    value: function forEach(f) {
	      for (var i = 0, off = 0; i < this.content.length; i++) {
	        var child = this.content[i];
	        f(child, off, off += child.width);
	      }
	    }
	  }, {
	    key: "chunkBefore",
	    value: function chunkBefore(off) {
	      if (!off) _error.ModelError.raise("No chunk before start of node");
	      for (var i = 0, curOff = 0; i < this.content.length; i++) {
	        var child = this.content[i],
	            end = curOff + child.width;
	        if (end >= off) return { node: child, start: curOff };
	        curOff = end;
	      }
	    }
	  }, {
	    key: "chunkAfter",
	    value: function chunkAfter(off) {
	      if (off == this.size) _error.ModelError.raise("No chunk after end of node");
	      for (var i = 0, curOff = 0; i < this.content.length; i++) {
	        var child = this.content[i],
	            end = curOff + child.width;
	        if (end > off) return { node: child, start: curOff };
	        curOff = end;
	      }
	    }
	  }, {
	    key: "slice",
	    value: function slice() {
	      var from = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var to = arguments.length <= 1 || arguments[1] === undefined ? this.size : arguments[1];

	      if (from == to) return emptyFragment;
	      return new TextFragment(this.toArray(from, to));
	    }
	  }, {
	    key: "replace",
	    value: function replace(off, node) {
	      if (node.isText) _error.ModelError.raise("Argument to replace should be a non-text node");
	      var curNode = undefined,
	          index = undefined;
	      for (var curOff = 0; curOff < off; index++) {
	        curNode = this.content[index];
	        curOff += curNode.width;
	      }
	      if (curNode.isText) _error.ModelError.raise("Can not replace text content with replace method");
	      var copy = this.content.slice();
	      copy[index] = node;
	      return new TextFragment(copy);
	    }
	  }, {
	    key: "appendInner",
	    value: function appendInner(other, joinLeft, joinRight) {
	      var last = this.content.length - 1,
	          content = this.content.slice(0, last);
	      var before = this.content[last],
	          after = other.firstChild;
	      var same = before.sameMarkup(after);
	      if (same && before.isText) content.push(before.copy(before.text + after.text));else if (same && joinLeft > 0 && joinRight > 0) content.push(before.append(after.content, joinLeft - 1, joinRight - 1));else content.push(before.close(joinLeft - 1, "end"), after.close(joinRight - 1, "start"));
	      return Fragment.fromArray(content.concat(other.toArray(after.width)));
	    }
	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.content.map(function (n) {
	        return n.toJSON();
	      });
	    }
	  }, {
	    key: "firstChild",
	    get: function get() {
	      return this.size ? this.content[0] : null;
	    }
	  }, {
	    key: "lastChild",
	    get: function get() {
	      return this.size ? this.content[this.content.length - 1] : null;
	    }
	  }]);

	  return TextFragment;
	}(Fragment);

	if (typeof Symbol != "undefined") {
	  // :: () → Iterator<Node>
	  // A fragment is iterable, in the ES6 sense.
	  Fragment.prototype[Symbol.iterator] = function () {
	    return this.iter();
	  };
	  FlatIterator.prototype[Symbol.iterator] = TextIterator.prototype[Symbol.iterator] = function () {
	    return this;
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModelError = undefined;

	var _error = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ;; Class used to signal model-related errors.

	var ModelError = exports.ModelError = function (_ProseMirrorError) {
	  _inherits(ModelError, _ProseMirrorError);

	  function ModelError() {
	    _classCallCheck(this, ModelError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ModelError).apply(this, arguments));
	  }

	  return ModelError;
	}(_error.ProseMirrorError);

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ;; Superclass for ProseMirror-related errors. Does some magic to
	// make it safely subclassable even on ES5 runtimes.

	var ProseMirrorError = exports.ProseMirrorError = function (_Error) {
	  _inherits(ProseMirrorError, _Error);

	  // :: (string)
	  // Create an instance of this error type, capturing the current
	  // stack.

	  function ProseMirrorError(message) {
	    _classCallCheck(this, ProseMirrorError);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProseMirrorError).call(this, message));

	    if (_this.message != message) {
	      _this.message = message;
	      if (Error.captureStackTrace) Error.captureStackTrace(_this, _this.name);else _this.stack = new Error(message).stack;
	    }
	    return _this;
	  }

	  _createClass(ProseMirrorError, [{
	    key: "name",
	    get: function get() {
	      return this.constructor.name || functionName(this.constructor) || "ProseMirrorError";
	    }

	    // :: (string)
	    // Raise an exception of this type, with the given message.
	    // (Somewhat shorter than `throw new ...`, and can appear in
	    // expression position.)

	  }], [{
	    key: "raise",
	    value: function raise(message) {
	      throw new this(message);
	    }
	  }]);

	  return ProseMirrorError;
	}(Error);

	// ;; Error type used to signal miscellaneous invariant violations.

	var AssertionError = exports.AssertionError = function (_ProseMirrorError) {
	  _inherits(AssertionError, _ProseMirrorError);

	  function AssertionError() {
	    _classCallCheck(this, AssertionError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AssertionError).apply(this, arguments));
	  }

	  return AssertionError;
	}(ProseMirrorError);

	// ;; Error type used to report name clashes or other violations in
	// namespacing.

	var NamespaceError = exports.NamespaceError = function (_ProseMirrorError2) {
	  _inherits(NamespaceError, _ProseMirrorError2);

	  function NamespaceError() {
	    _classCallCheck(this, NamespaceError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(NamespaceError).apply(this, arguments));
	  }

	  return NamespaceError;
	}(ProseMirrorError);

	function functionName(f) {
	  var match = /^function (\w+)/.exec(f.toString());
	  return match && match[1];
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A mark is a piece of information that can be attached to a node,
	// such as it being emphasized, in code font, or a link. It has a type
	// and optionally a set of attributes that provide further information
	// (such as the target of the link). Marks are created through a
	// `Schema`, which controls which types exist and which
	// attributes they have.

	var Mark = exports.Mark = function () {
	  function Mark(type, attrs) {
	    _classCallCheck(this, Mark);

	    // :: MarkType
	    // The type of this mark.
	    this.type = type;
	    // :: Object
	    // The attributes associated with this mark.
	    this.attrs = attrs;
	  }

	  // :: () → Object
	  // Convert this mark to a JSON-serializeable representation.

	  _createClass(Mark, [{
	    key: "toJSON",
	    value: function toJSON() {
	      var obj = { _: this.type.name };
	      for (var attr in this.attrs) {
	        obj[attr] = this.attrs[attr];
	      }return obj;
	    }

	    // :: ([Mark]) → [Mark]
	    // Given a set of marks, create a new set which contains this one as
	    // well, in the right position. If this mark or another of its type
	    // is already in the set, the set itself is returned.

	  }, {
	    key: "addToSet",
	    value: function addToSet(set) {
	      for (var i = 0; i < set.length; i++) {
	        var other = set[i];
	        if (other.type == this.type) {
	          if (this.eq(other)) return set;else return set.slice(0, i).concat(this).concat(set.slice(i + 1));
	        }
	        if (other.type.rank > this.type.rank) return set.slice(0, i).concat(this).concat(set.slice(i));
	      }
	      return set.concat(this);
	    }

	    // :: ([Mark]) → [Mark]
	    // Remove this mark from the given set, returning a new set. If this
	    // mark is not in the set, the set itself is returned.

	  }, {
	    key: "removeFromSet",
	    value: function removeFromSet(set) {
	      for (var i = 0; i < set.length; i++) {
	        if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
	      }return set;
	    }

	    // :: ([Mark]) → bool
	    // Test whether this mark is in the given set of marks.

	  }, {
	    key: "isInSet",
	    value: function isInSet(set) {
	      for (var i = 0; i < set.length; i++) {
	        if (this.eq(set[i])) return true;
	      }return false;
	    }

	    // :: (Mark) → bool
	    // Test whether this mark has the same type and attributes as
	    // another mark.

	  }, {
	    key: "eq",
	    value: function eq(other) {
	      if (this == other) return true;
	      if (this.type != other.type) return false;
	      for (var attr in this.attrs) {
	        if (other.attrs[attr] != this.attrs[attr]) return false;
	      }return true;
	    }

	    // :: ([Mark], [Mark]) → bool
	    // Test whether two sets of marks are identical.

	  }], [{
	    key: "sameSet",
	    value: function sameSet(a, b) {
	      if (a == b) return true;
	      if (a.length != b.length) return false;
	      for (var i = 0; i < a.length; i++) {
	        if (!a[i].eq(b[i])) return false;
	      }return true;
	    }

	    // :: (?union<Mark, [Mark]>) → [Mark]
	    // Create a properly sorted mark set from null, a single mark, or an
	    // unsorted array of marks.

	  }, {
	    key: "setFrom",
	    value: function setFrom(marks) {
	      if (!marks || marks.length == 0) return empty;
	      if (marks instanceof Mark) return [marks];
	      var copy = marks.slice();
	      copy.sort(function (a, b) {
	        return a.type.rank - b.type.rank;
	      });
	      return copy;
	    }
	  }]);

	  return Mark;
	}();

	var empty = [];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Pos = undefined;

	var _error = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; Instances of the `Pos` class represent positions in a document.
	// A position is an array of integers that describe a path to the target
	// node (see `Node.path`) and an integer offset into that target node.

	var Pos = exports.Pos = function () {
	  // :: (path: [number], number)

	  function Pos(path, offset) {
	    _classCallCheck(this, Pos);

	    // :: [number] The path to the target node.
	    this.path = path;
	    // :: number The offset into the target node.
	    this.offset = offset;
	  }

	  // ;; Return a string representation of the path of the form
	  // `"0/2:10"`, where the numbers before the colon are the path, and
	  // the number after it is the offset.

	  _createClass(Pos, [{
	    key: "toString",
	    value: function toString() {
	      return this.path.join("/") + ":" + this.offset;
	    }

	    // :: number
	    // The length of the position's path.

	  }, {
	    key: "max",

	    // :: (Pos) → Pos
	    // Return the greater of two positions.
	    value: function max(other) {
	      return this.cmp(other) > 0 ? this : other;
	    }

	    // :: (Pos) → Pos
	    // Return the lesser of two positions.

	  }, {
	    key: "min",
	    value: function min(other) {
	      return this.cmp(other) < 0 ? this : other;
	    }

	    // :: ([number], [number]) → bool
	    // Compares two paths and returns true when they are the same.

	  }, {
	    key: "cmp",

	    // :: (Pos) → number
	    // Compares this position to another position, and returns a number.
	    // Of this result number, only the sign is significant. It is
	    // negative if this position is less than the other one, zero if
	    // they are the same, and positive if this position is greater.
	    value: function cmp(other) {
	      if (other == this) return 0;
	      return Pos.cmp(this.path, this.offset, other.path, other.offset);
	    }
	  }, {
	    key: "shorten",

	    // :: (?number, ?number) → Pos
	    // Create a position pointing into a parent of this position's
	    // target. When `to` is given, it determines the new length of the
	    // path. By default, the path becomes one shorter. The `offset`
	    // parameter can be used to determine where in this parent the
	    // position points. By default, it points before the old target. You
	    // can pass a negative or positive integer to move it backward or
	    // forward (**note**: this method performs no bounds checking).
	    value: function shorten() {
	      var to = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (to >= this.depth) return this;
	      return Pos.shorten(this.path, to, offset);
	    }

	    // :: (number) → Pos
	    // Create a position with an offset moved relative to this
	    // position's offset. For example moving `0/1:10` by `-2` yields
	    // `0/1:8`.

	  }, {
	    key: "move",
	    value: function move(by) {
	      return new Pos(this.path, this.offset + by);
	    }

	    // :: (?number) → [number]
	    // Convert this position to an array of numbers (including its
	    // offset). Optionally pass an argument to adjust the value of the
	    // offset.

	  }, {
	    key: "toPath",
	    value: function toPath() {
	      var move = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      return this.path.concat(this.offset + move);
	    }
	  }, {
	    key: "extend",
	    value: function extend(pos) {
	      var path = this.path.slice(),
	          add = this.offset;
	      for (var i = 0; i < pos.path.length; i++) {
	        path.push(pos.path[i] + add);
	        add = 0;
	      }
	      return new Pos(path, pos.offset + add);
	    }

	    // :: (Node, ?bool) → bool
	    // Checks whether this position is valid in the given document. When
	    // `requireTextblock` is true, only positions inside textblocks are
	    // considered valid.

	  }, {
	    key: "isValid",
	    value: function isValid(doc, requireTextblock) {
	      for (var i = 0, node = doc;; i++) {
	        if (i == this.path.length) {
	          if (requireTextblock && !node.isTextblock) return false;
	          return this.offset <= node.size;
	        } else {
	          var n = this.path[i];
	          if (n >= node.size) return false;
	          node = node.child(n);
	        }
	      }
	    }

	    // :: () → Object
	    // Convert the position to a JSON-safe representation.

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this;
	    }

	    // :: ([number], ?number) → Pos
	    // Build a position from an array of numbers (as in
	    // [`toPath`](#Pos.toPath)), taking the last element of the array as
	    // offset and optionally moving it by `move`.

	  }, {
	    key: "depth",
	    get: function get() {
	      return this.path.length;
	    }
	  }], [{
	    key: "cmp",
	    value: function cmp(pathA, offsetA, pathB, offsetB) {
	      var lenA = pathA.length,
	          lenB = pathB.length;
	      for (var i = 0, end = Math.min(lenA, lenB); i < end; i++) {
	        var diff = pathA[i] - pathB[i];
	        if (diff != 0) return diff;
	      }
	      if (lenA > lenB) return offsetB <= pathA[i] ? 1 : -1;else if (lenB > lenA) return offsetA <= pathB[i] ? -1 : 1;else return offsetA - offsetB;
	    }
	  }, {
	    key: "samePath",
	    value: function samePath(pathA, pathB) {
	      if (pathA.length != pathB.length) return false;
	      for (var i = 0; i < pathA.length; i++) {
	        if (pathA[i] !== pathB[i]) return false;
	      }return true;
	    }
	  }, {
	    key: "shorten",
	    value: function shorten(path) {
	      var to = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	      var offset = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	      if (to == null) to = path.length - 1;
	      return new Pos(path.slice(0, to), path[to] + offset);
	    }
	  }, {
	    key: "from",
	    value: function from(array) {
	      var move = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (!array.length) _error.ModelError.raise("Can't create a pos from an empty array");
	      return new Pos(array.slice(0, array.length - 1), array[array.length - 1] + move);
	    }

	    // :: (Object) → Pos
	    // Create a position from a JSON representation.

	  }, {
	    key: "fromJSON",
	    value: function fromJSON(json) {
	      return new Pos(json.path, json.offset);
	    }
	  }]);

	  return Pos;
	}();

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Schema = exports.SchemaSpec = exports.MarkType = exports.Attribute = exports.Text = exports.Inline = exports.Textblock = exports.Block = exports.NodeType = exports.SchemaError = undefined;

	var _node = __webpack_require__(4);

	var _fragment = __webpack_require__(5);

	var _mark = __webpack_require__(8);

	var _obj = __webpack_require__(11);

	var _error = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ;; The exception type used to signal schema-related
	// errors.

	var SchemaError = exports.SchemaError = function (_ProseMirrorError) {
	  _inherits(SchemaError, _ProseMirrorError);

	  function SchemaError() {
	    _classCallCheck(this, SchemaError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SchemaError).apply(this, arguments));
	  }

	  return SchemaError;
	}(_error.ProseMirrorError);

	// ;; The [node](#NodeType) and [mark](#MarkType) types
	// that make up a schema have several things in common—they support
	// attributes, and you can [register](#SchemaItem.register) values
	// with them. This class implements this functionality, and acts as a
	// superclass to those `NodeType` and `MarkType`.

	var SchemaItem = function () {
	  function SchemaItem() {
	    _classCallCheck(this, SchemaItem);
	  }

	  _createClass(SchemaItem, [{
	    key: "getDefaultAttrs",

	    // For node types where all attrs have a default value (or which don't
	    // have any attributes), build up a single reusable default attribute
	    // object, and use it for all nodes that don't specify specific
	    // attributes.
	    value: function getDefaultAttrs() {
	      var defaults = Object.create(null);
	      for (var attrName in this.attrs) {
	        var attr = this.attrs[attrName];
	        if (attr.default == null) return null;
	        defaults[attrName] = attr.default;
	      }
	      return defaults;
	    }
	  }, {
	    key: "computeAttrs",
	    value: function computeAttrs(attrs, arg) {
	      var built = Object.create(null);
	      for (var name in this.attrs) {
	        var value = attrs && attrs[name];
	        if (value == null) {
	          var attr = this.attrs[name];
	          if (attr.default != null) value = attr.default;else if (attr.compute) value = attr.compute(this, arg);else SchemaError.raise("No value supplied for attribute " + name);
	        }
	        built[name] = value;
	      }
	      return built;
	    }
	  }, {
	    key: "freezeAttrs",
	    value: function freezeAttrs() {
	      var frozen = Object.create(null);
	      for (var name in this.attrs) {
	        frozen[name] = this.attrs[name];
	      }Object.defineProperty(this, "attrs", { value: frozen });
	    }
	  }, {
	    key: "attrs",

	    // :: Object<Attribute>
	    // The set of attributes to associate with each node or mark of this
	    // type.
	    get: function get() {
	      return {};
	    }

	    // :: (Object<?Attribute>)
	    // Add or remove attributes from this type. Expects an object
	    // mapping names to either attributes (to add) or null (to remove
	    // the attribute by that name).

	  }], [{
	    key: "updateAttrs",
	    value: function updateAttrs(attrs) {
	      Object.defineProperty(this.prototype, "attrs", { value: overlayObj(this.prototype.attrs, attrs) });
	    }
	  }, {
	    key: "getRegistry",
	    value: function getRegistry() {
	      if (this == SchemaItem) return null;
	      if (!this.prototype.hasOwnProperty("registry")) this.prototype.registry = Object.create(Object.getPrototypeOf(this).getRegistry());
	      return this.prototype.registry;
	    }
	  }, {
	    key: "getNamespace",
	    value: function getNamespace(name) {
	      if (this == SchemaItem) return null;
	      var reg = this.getRegistry();
	      if (!Object.prototype.hasOwnProperty.call(reg, name)) reg[name] = Object.create(Object.getPrototypeOf(this).getNamespace(name));
	      return reg[name];
	    }

	    // :: (string, string, *)
	    // Register a value in this type's registry. Various components use
	    // `Schema.registry` to query values from the marks and nodes that
	    // make up the schema. The `namespace`, for example
	    // [`"command"`](#commands), determines which component will see
	    // this value. `name` is a name specific to this value. Its meaning
	    // differs per namespace.
	    //
	    // Subtypes inherit the registered values from their supertypes.
	    // They can override individual values by calling this method to
	    // overwrite them with a new value, or with `null` to disable them.

	  }, {
	    key: "register",
	    value: function register(namespace, name, value) {
	      this.getNamespace(namespace)[name] = function () {
	        return value;
	      };
	    }

	    // :: (string, string, (SchemaItem) → *)
	    // Register a value in this types's registry, like
	    // [`register`](#SchemaItem.register), but providing a function that
	    // will be called with the actual node or mark type, whose return
	    // value will be treated as the effective value (or will be ignored,
	    // if `null`).

	  }, {
	    key: "registerComputed",
	    value: function registerComputed(namespace, name, f) {
	      this.getNamespace(namespace)[name] = f;
	    }

	    // :: (string)
	    // By default, schema items inherit the
	    // [registered](#SchemaItem.register) items from their superclasses.
	    // Call this to disable that behavior for the given namespace.

	  }, {
	    key: "cleanNamespace",
	    value: function cleanNamespace(namespace) {
	      this.getNamespace(namespace).__proto__ = null;
	    }
	  }]);

	  return SchemaItem;
	}();

	// ;; Node types are objects allocated once per `Schema`
	// and used to tag `Node` instances with a type. They are
	// instances of sub-types of this class, and contain information about
	// the node type (its name, its allowed attributes, methods for
	// serializing it to various formats, information to guide
	// deserialization, and so on).

	var NodeType = exports.NodeType = function (_SchemaItem) {
	  _inherits(NodeType, _SchemaItem);

	  function NodeType(name, kind, schema) {
	    _classCallCheck(this, NodeType);

	    // :: string
	    // The name the node type has in this schema.

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeType).call(this));

	    _this2.name = name;
	    _this2.kind = kind;
	    // Freeze the attributes, to avoid calling a potentially expensive
	    // getter all the time.
	    _this2.freezeAttrs();
	    _this2.defaultAttrs = _this2.getDefaultAttrs();
	    // :: Schema
	    // A link back to the `Schema` the node type belongs to.
	    _this2.schema = schema;
	    return _this2;
	  }

	  // :: bool
	  // True if this is a block type.

	  _createClass(NodeType, [{
	    key: "canContainFragment",

	    // :: (Fragment) → bool
	    // Test whether the content of the given fragment could be contained
	    // in this node type.
	    value: function canContainFragment(fragment) {
	      var _this3 = this;

	      var ok = true;
	      fragment.forEach(function (n) {
	        if (!_this3.canContain(n)) ok = false;
	      });
	      return ok;
	    }

	    // :: (Node) → bool
	    // Test whether the given node could be contained in this node type.

	  }, {
	    key: "canContain",
	    value: function canContain(node) {
	      if (!this.canContainType(node.type)) return false;
	      for (var i = 0; i < node.marks.length; i++) {
	        if (!this.canContainMark(node.marks[i])) return false;
	      }return true;
	    }

	    // :: (MarkType) → bool
	    // Test whether this node type can contain children with the given
	    // mark type.

	  }, {
	    key: "canContainMark",
	    value: function canContainMark(mark) {
	      var contains = this.containsMarks;
	      if (contains === true) return true;
	      if (contains) for (var i = 0; i < contains.length; i++) {
	        if (contains[i] == mark.name) return true;
	      }return false;
	    }

	    // :: (NodeType) → bool
	    // Test whether this node type can contain nodes of the given node
	    // type.

	  }, {
	    key: "canContainType",
	    value: function canContainType(type) {
	      return this.schema.subKind(type.kind, this.contains);
	    }

	    // :: (NodeType) → bool
	    // Test whether the nodes that can be contained in the given node
	    // type are a sub-type of the nodes that can be contained in this
	    // type.

	  }, {
	    key: "canContainContent",
	    value: function canContainContent(type) {
	      return this.schema.subKind(type.contains, this.contains);
	    }

	    // :: (NodeType) → ?[NodeType]
	    // Find a set of intermediate node types, possibly empty, that have
	    // to be inserted between this type and `other` to put a node of
	    // type `other` into this type.

	  }, {
	    key: "findConnection",
	    value: function findConnection(other) {
	      if (this.canContainType(other)) return [];

	      var seen = Object.create(null);
	      var active = [{ from: this, via: [] }];
	      while (active.length) {
	        var current = active.shift();
	        for (var name in this.schema.nodes) {
	          var type = this.schema.nodes[name];
	          if (type.defaultAttrs && !(type.contains in seen) && current.from.canContainType(type)) {
	            var via = current.via.concat(type);
	            if (type.canContainType(other)) return via;
	            active.push({ from: type, via: via });
	            seen[type.contains] = true;
	          }
	        }
	      }
	    }
	  }, {
	    key: "computeAttrs",
	    value: function computeAttrs(attrs, content) {
	      if (!attrs && this.defaultAttrs) return this.defaultAttrs;else return _get(Object.getPrototypeOf(NodeType.prototype), "computeAttrs", this).call(this, attrs, content);
	    }

	    // :: (?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
	    // Create a `Node` of this type. The given attributes are
	    // checked and defaulted (you can pass `null` to use the type's
	    // defaults entirely, if no required attributes exist). `content`
	    // may be a `Fragment`, a node, an array of nodes, or
	    // `null`. Similarly `marks` may be `null` to default to the empty
	    // set of marks.

	  }, {
	    key: "create",
	    value: function create(attrs, content, marks) {
	      return new _node.Node(this, this.computeAttrs(attrs, content), _fragment.Fragment.from(content), _mark.Mark.setFrom(marks));
	    }
	  }, {
	    key: "createAutoFill",
	    value: function createAutoFill(attrs, content, marks) {
	      if ((!content || content.length == 0) && !this.canBeEmpty) content = this.defaultContent();
	      return this.create(attrs, content, marks);
	    }

	    // :: bool
	    // Controls whether this node is allowed to be empty.

	  }, {
	    key: "isBlock",
	    get: function get() {
	      return false;
	    }

	    // :: bool
	    // True if this is a textblock type, a block that contains inline
	    // content.

	  }, {
	    key: "isTextblock",
	    get: function get() {
	      return false;
	    }

	    // :: bool
	    // True if this is an inline type.

	  }, {
	    key: "isInline",
	    get: function get() {
	      return false;
	    }

	    // :: bool
	    // True if this is the text node type.

	  }, {
	    key: "isText",
	    get: function get() {
	      return false;
	    }

	    // :: bool
	    // Controls whether nodes of this type can be selected (as a user
	    // node selection).

	  }, {
	    key: "selectable",
	    get: function get() {
	      return true;
	    }

	    // :: bool
	    // Determines whether nodes of this type can be dragged. Enabling it
	    // causes ProseMirror to set a `draggable` attribute on its DOM
	    // representation, and to put its HTML serialization into the drag
	    // event's [data
	    // transfer](https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer)
	    // when dragged.

	  }, {
	    key: "draggable",
	    get: function get() {
	      return false;
	    }

	    // :: bool
	    // Controls whether this node type is locked.

	  }, {
	    key: "locked",
	    get: function get() {
	      return false;
	    }

	    // :: ?string
	    // The kind of nodes this node may contain. `null` means it's a
	    // leaf node.

	  }, {
	    key: "contains",
	    get: function get() {
	      return null;
	    }

	    // :: string
	    // Controls the _kind_ of the node, which is used to determine valid
	    // parent/child [relations](#NodeType.contains). Should be a single
	    // name or space-separated string of kind names, where later names
	    // are considered to be sub-kinds of former ones (for example
	    // `"textblock paragraph"`). When you want to extend the superclass'
	    // set of kinds, you can do something like
	    //
	    //     static get kinds() { return super.kind + " mykind" }

	  }, {
	    key: "canBeEmpty",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "containsMarks",

	    // :: union<bool, [string]>
	    // The mark types that child nodes of this node may have. `false`
	    // means no marks, `true` means any mark, and an array of strings
	    // can be used to explicitly list the allowed mark types.
	    get: function get() {
	      return false;
	    }
	  }], [{
	    key: "compile",
	    value: function compile(types, schema) {
	      var result = Object.create(null);
	      for (var name in types) {
	        var type = types[name];
	        var kinds = type.kinds.split(" ");
	        for (var i = 0; i < kinds.length; i++) {
	          schema.registerKind(kinds[i], i ? kinds[i - 1] : null);
	        }result[name] = new type(name, kinds[kinds.length - 1], schema);
	      }
	      for (var name in result) {
	        var contains = result[name].contains;
	        if (contains && !(contains in schema.kinds)) SchemaError.raise("Node type " + name + " is specified to contain non-existing kind " + contains);
	      }
	      if (!result.doc) SchemaError.raise("Every schema needs a 'doc' type");
	      if (!result.text) SchemaError.raise("Every schema needs a 'text' type");

	      return result;
	    }
	  }, {
	    key: "kinds",
	    get: function get() {
	      return "node";
	    }
	  }]);

	  return NodeType;
	}(SchemaItem);

	// ;; Base type for block nodetypes.

	var Block = exports.Block = function (_NodeType) {
	  _inherits(Block, _NodeType);

	  function Block() {
	    _classCallCheck(this, Block);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block).apply(this, arguments));
	  }

	  _createClass(Block, [{
	    key: "defaultContent",
	    value: function defaultContent() {
	      var inner = this.schema.defaultTextblockType().create();
	      var conn = this.findConnection(inner.type);
	      if (!conn) SchemaError.raise("Can't create default content for " + this.name);
	      for (var i = conn.length - 1; i >= 0; i--) {
	        inner = conn[i].create(null, inner);
	      }return _fragment.Fragment.from(inner);
	    }
	  }, {
	    key: "contains",
	    get: function get() {
	      return "block";
	    }
	  }, {
	    key: "isBlock",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "canBeEmpty",
	    get: function get() {
	      return this.contains == null;
	    }
	  }], [{
	    key: "kinds",
	    get: function get() {
	      return "block";
	    }
	  }]);

	  return Block;
	}(NodeType);

	// ;; Base type for textblock node types.

	var Textblock = exports.Textblock = function (_Block) {
	  _inherits(Textblock, _Block);

	  function Textblock() {
	    _classCallCheck(this, Textblock);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Textblock).apply(this, arguments));
	  }

	  _createClass(Textblock, [{
	    key: "contains",
	    get: function get() {
	      return "inline";
	    }
	  }, {
	    key: "containsMarks",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "isTextblock",
	    get: function get() {
	      return true;
	    }
	  }, {
	    key: "canBeEmpty",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return Textblock;
	}(Block);

	// ;; Base type for inline node types.

	var Inline = exports.Inline = function (_NodeType2) {
	  _inherits(Inline, _NodeType2);

	  function Inline() {
	    _classCallCheck(this, Inline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Inline).apply(this, arguments));
	  }

	  _createClass(Inline, [{
	    key: "isInline",
	    get: function get() {
	      return true;
	    }
	  }], [{
	    key: "kinds",
	    get: function get() {
	      return "inline";
	    }
	  }]);

	  return Inline;
	}(NodeType);

	// ;; The text node type.

	var Text = exports.Text = function (_Inline) {
	  _inherits(Text, _Inline);

	  function Text() {
	    _classCallCheck(this, Text);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
	  }

	  _createClass(Text, [{
	    key: "create",
	    value: function create(attrs, content, marks) {
	      return new _node.TextNode(this, this.computeAttrs(attrs, content), content, marks);
	    }
	  }, {
	    key: "selectable",
	    get: function get() {
	      return false;
	    }
	  }, {
	    key: "isText",
	    get: function get() {
	      return true;
	    }
	  }], [{
	    key: "kinds",
	    get: function get() {
	      return _get(Object.getPrototypeOf(Text), "kinds", this) + " text";
	    }
	  }]);

	  return Text;
	}(Inline);

	// Attribute descriptors

	// ;; Attributes are named strings associated with nodes and marks.
	// Each node type or mark type has a fixed set of attributes, which
	// instances of this class are used to control.

	var Attribute =
	// :: (Object)
	// Create an attribute. `options` is an object containing the
	// settings for the attributes. The following settings are
	// supported:
	//
	// **`default`**`: ?string`
	//   : The default value for this attribute, to choose when no
	//     explicit value is provided.
	//
	// **`compute`**`: ?(Fragment) → string`
	//   : A function that computes a default value for the attribute from
	//     the node's content.
	//
	// **`label`**`: ?string`
	//   : A user-readable text label associated with the attribute.
	//
	// Attributes that have no default or compute property must be
	// provided whenever a node or mark of a type that has them is
	// created.
	exports.Attribute = function Attribute() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  _classCallCheck(this, Attribute);

	  this.default = options.default;
	  this.compute = options.compute;
	  this.label = options.label;
	};

	// Marks

	// ;; Like nodes, marks (which are associated with nodes to signify
	// things like emphasis or being part of a link) are tagged with type
	// objects, which are instantiated once per `Schema`.

	var MarkType = exports.MarkType = function (_SchemaItem2) {
	  _inherits(MarkType, _SchemaItem2);

	  function MarkType(name, rank, schema) {
	    _classCallCheck(this, MarkType);

	    // :: string
	    // The name of the mark type.

	    var _this8 = _possibleConstructorReturn(this, Object.getPrototypeOf(MarkType).call(this));

	    _this8.name = name;
	    _this8.freezeAttrs();
	    _this8.rank = rank;
	    // :: Schema
	    // The schema that this mark type instance is part of.
	    _this8.schema = schema;
	    var defaults = _this8.getDefaultAttrs();
	    _this8.instance = defaults && new _mark.Mark(_this8, defaults);
	    return _this8;
	  }

	  // :: number
	  // Mark type ranks are used to determine the order in which mark
	  // arrays are sorted. (If multiple mark types end up with the same
	  // rank, they still get a fixed order in the schema, but there's no
	  // guarantee what it will be.)

	  _createClass(MarkType, [{
	    key: "create",

	    // :: (Object) → Mark
	    // Create a mark of this type. `attrs` may be `null` or an object
	    // containing only some of the mark's attributes. The others, if
	    // they have defaults, will be added.
	    value: function create(attrs) {
	      if (!attrs && this.instance) return this.instance;
	      return new _mark.Mark(this, this.computeAttrs(attrs));
	    }
	  }, {
	    key: "removeFromSet",

	    // :: ([Mark]) → [Mark]
	    // When there is a mark of this type in the given set, a new set
	    // without it is returned. Otherwise, the input set is returned.
	    value: function removeFromSet(set) {
	      for (var i = 0; i < set.length; i++) {
	        if (set[i].type == this) return set.slice(0, i).concat(set.slice(i + 1));
	      }return set;
	    }

	    // :: ([Mark]) → ?Mark
	    // Tests whether there is a mark of this type in the given set.

	  }, {
	    key: "isInSet",
	    value: function isInSet(set) {
	      for (var i = 0; i < set.length; i++) {
	        if (set[i].type == this) return set[i];
	      }
	    }
	  }], [{
	    key: "getOrder",
	    value: function getOrder(marks) {
	      var sorted = [];
	      for (var name in marks) {
	        sorted.push({ name: name, rank: marks[name].rank });
	      }sorted.sort(function (a, b) {
	        return a.rank - b.rank;
	      });
	      var ranks = Object.create(null);
	      for (var i = 0; i < sorted.length; i++) {
	        ranks[sorted[i].name] = i;
	      }return ranks;
	    }
	  }, {
	    key: "compile",
	    value: function compile(marks, schema) {
	      var order = this.getOrder(marks);
	      var result = Object.create(null);
	      for (var name in marks) {
	        result[name] = new marks[name](name, order[name], schema);
	      }return result;
	    }
	  }, {
	    key: "rank",
	    get: function get() {
	      return 50;
	    }
	  }]);

	  return MarkType;
	}(SchemaItem);

	// Schema specifications are data structures that specify a schema --
	// a set of node types, their names, attributes, and nesting behavior.

	// ;; A schema specification is a blueprint for an actual
	// `Schema`. It maps names to node and mark types, along
	// with extra information, such as additional attributes and changes
	// to node kinds and relations.
	//
	// A specification consists of an object that associates node names
	// with node type constructors and another similar object associating
	// mark names with mark type constructors.

	var SchemaSpec = exports.SchemaSpec = function () {
	  // :: (?Object<NodeType>, ?Object<MarkType>)
	  // Create a schema specification from scratch. The arguments map
	  // node names to node type constructors and mark names to mark type
	  // constructors.

	  function SchemaSpec(nodes, marks) {
	    _classCallCheck(this, SchemaSpec);

	    this.nodes = nodes || {};
	    this.marks = marks || {};
	  }

	  // :: (?Object<?NodeType>, ?Object<?MarkType>) → SchemaSpec
	  // Base a new schema spec on this one by specifying nodes and marks
	  // to add or remove.
	  //
	  // When `nodes` is passed, it should be an object mapping type names
	  // to either `null`, to delete the type of that name, or to a
	  // `NodeType` subclass, to add or replace the node type of that
	  // name.
	  //
	  // Similarly, `marks` can be an object to add, change, or remove
	  // [mark types](#MarkType) in the schema.

	  _createClass(SchemaSpec, [{
	    key: "update",
	    value: function update(nodes, marks) {
	      return new SchemaSpec(nodes ? overlayObj(this.nodes, nodes) : this.nodes, marks ? overlayObj(this.marks, marks) : this.marks);
	    }
	  }]);

	  return SchemaSpec;
	}();

	function overlayObj(base, update) {
	  var copy = (0, _obj.copyObj)(base);
	  for (var name in update) {
	    var value = update[name];
	    if (value == null) delete copy[name];else copy[name] = value;
	  }
	  return copy;
	}

	// ;; Each document is based on a single schema, which provides the
	// node and mark types that it is made up of (which, in turn,
	// determine the structure it is allowed to have).

	var Schema = function () {
	  // :: (SchemaSpec)
	  // Construct a schema from a specification.

	  function Schema(spec) {
	    _classCallCheck(this, Schema);

	    // :: SchemaSpec
	    // The specification on which the schema is based.
	    this.spec = spec;
	    this.kinds = Object.create(null);

	    // :: Object<NodeType>
	    // An object mapping the schema's node names to node type objects.
	    this.nodes = NodeType.compile(spec.nodes, this);
	    // :: Object<MarkType>
	    // A map from mark names to mark type objects.
	    this.marks = MarkType.compile(spec.marks, this);
	    for (var prop in this.nodes) {
	      if (prop in this.marks) SchemaError.raise(prop + " can not be both a node and a mark");
	    } // :: Object
	    // An object for storing whatever values modules may want to
	    // compute and cache per schema. (If you want to store something
	    // in it, try to use property names unlikely to clash.)
	    this.cached = Object.create(null);

	    this.node = this.node.bind(this);
	    this.text = this.text.bind(this);
	    this.nodeFromJSON = this.nodeFromJSON.bind(this);
	    this.markFromJSON = this.markFromJSON.bind(this);
	  }

	  // :: (union<string, NodeType>, ?Object, ?union<Fragment, Node, [Node]>, ?[Mark]) → Node
	  // Create a node in this schema. The `type` may be a string or a
	  // `NodeType` instance. Attributes will be extended
	  // with defaults, `content` may be a `Fragment`,
	  // `null`, a `Node`, or an array of nodes.
	  //
	  // When creating a text node, `content` should be a string and is
	  // interpreted as the node's text.
	  //
	  // This method is bound to the Schema, meaning you don't have to
	  // call it as a method, but can pass it to higher-order functions
	  // and such.

	  _createClass(Schema, [{
	    key: "node",
	    value: function node(type, attrs, content, marks) {
	      if (typeof type == "string") type = this.nodeType(type);else if (!(type instanceof NodeType)) SchemaError.raise("Invalid node type: " + type);else if (type.schema != this) SchemaError.raise("Node type from different schema used (" + type.name + ")");

	      return type.create(attrs, content, marks);
	    }

	    // :: (string, ?[Mark]) → Node
	    // Create a text node in the schema. This method is bound to the Schema.

	  }, {
	    key: "text",
	    value: function text(_text, marks) {
	      return this.nodes.text.create(null, _text, _mark.Mark.setFrom(marks));
	    }

	    // :: () → ?NodeType
	    // Return the default textblock type for this schema, or `null` if
	    // it does not contain a node type with a `defaultTextblock`
	    // property.

	  }, {
	    key: "defaultTextblockType",
	    value: function defaultTextblockType() {
	      var cached = this.cached.defaultTextblockType;
	      if (cached !== undefined) return cached;
	      for (var name in this.nodes) {
	        if (this.nodes[name].defaultTextblock) return this.cached.defaultTextblockType = this.nodes[name];
	      }
	      return this.cached.defaultTextblockType = null;
	    }

	    // :: (string, ?Object) → Mark
	    // Create a mark with the named type

	  }, {
	    key: "mark",
	    value: function mark(name, attrs) {
	      var spec = this.marks[name] || SchemaError.raise("No mark named " + name);
	      return spec.create(attrs);
	    }

	    // :: (Object) → Node
	    // Deserialize a node from its JSON representation. This method is
	    // bound.

	  }, {
	    key: "nodeFromJSON",
	    value: function nodeFromJSON(json) {
	      return _node.Node.fromJSON(this, json);
	    }

	    // :: (Object) → Mark
	    // Deserialize a mark from its JSON representation. This method is
	    // bound.

	  }, {
	    key: "markFromJSON",
	    value: function markFromJSON(json) {
	      var type = this.marks[json._];
	      var attrs = null;
	      for (var prop in json) {
	        if (prop != "_") {
	          if (!attrs) attrs = Object.create(null);
	          attrs[prop] = json[prop];
	        }
	      }return attrs ? type.create(attrs) : type.instance;
	    }

	    // :: (string) → NodeType
	    // Get the `NodeType` associated with the given name in
	    // this schema, or raise an error if it does not exist.

	  }, {
	    key: "nodeType",
	    value: function nodeType(name) {
	      return this.nodes[name] || SchemaError.raise("Unknown node type: " + name);
	    }
	  }, {
	    key: "registerKind",
	    value: function registerKind(kind, sup) {
	      if (kind in this.kinds) {
	        if (this.kinds[kind] == sup) return;
	        SchemaError.raise("Inconsistent superkinds for kind " + kind + ": " + sup + " and " + this.kinds[kind]);
	      }
	      if (this.subKind(kind, sup)) SchemaError.raise("Conflicting kind hierarchy through " + kind + " and " + sup);
	      this.kinds[kind] = sup;
	    }

	    // :: (string, string) → bool
	    // Test whether a node kind is a sub-kind of another kind.

	  }, {
	    key: "subKind",
	    value: function subKind(sub, sup) {
	      for (;;) {
	        if (sub == sup) return true;
	        sub = this.kinds[sub];
	        if (!sub) return false;
	      }
	    }

	    // :: (string, (name: string, value: *, source: union<NodeType, MarkType>, name: string))
	    // Retrieve all registered items under the given name from this
	    // schema. The given function will be called with the name, each item, the
	    // element—node type or mark type—that it was associated with, and
	    // that element's name in the schema.

	  }, {
	    key: "registry",
	    value: function registry(namespace, f) {
	      for (var i = 0; i < 2; i++) {
	        var obj = i ? this.marks : this.nodes;
	        for (var tname in obj) {
	          var type = obj[tname],
	              registry = type.registry,
	              ns = registry && registry[namespace];
	          if (ns) for (var prop in ns) {
	            var value = ns[prop](type);
	            if (value != null) f(prop, value, type, tname);
	          }
	        }
	      }
	    }
	  }]);

	  return Schema;
	}();

	exports.Schema = Schema;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.copyObj = copyObj;
	function copyObj(obj, base) {
	  var copy = base || Object.create(null);
	  for (var prop in obj) {
	    copy[prop] = obj[prop];
	  }return copy;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultSchema = exports.CodeMark = exports.LinkMark = exports.StrongMark = exports.EmMark = exports.HardBreak = exports.Image = exports.Paragraph = exports.CodeBlock = exports.Heading = exports.HorizontalRule = exports.ListItem = exports.BulletList = exports.OrderedList = exports.BlockQuote = exports.Doc = undefined;

	var _schema = __webpack_require__(10);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ;; The default top-level document node type.

	var Doc = exports.Doc = function (_Block) {
	  _inherits(Doc, _Block);

	  function Doc() {
	    _classCallCheck(this, Doc);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Doc).apply(this, arguments));
	  }

	  _createClass(Doc, null, [{
	    key: "kinds",
	    get: function get() {
	      return "doc";
	    }
	  }]);

	  return Doc;
	}(_schema.Block);

	// ;; The default blockquote node type.

	var BlockQuote = exports.BlockQuote = function (_Block2) {
	  _inherits(BlockQuote, _Block2);

	  function BlockQuote() {
	    _classCallCheck(this, BlockQuote);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BlockQuote).apply(this, arguments));
	  }

	  return BlockQuote;
	}(_schema.Block);

	// ;; The default ordered list node type. Has a single attribute,
	// `order`, which determines the number at which the list starts
	// counting, and defaults to 1.

	var OrderedList = exports.OrderedList = function (_Block3) {
	  _inherits(OrderedList, _Block3);

	  function OrderedList() {
	    _classCallCheck(this, OrderedList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(OrderedList).apply(this, arguments));
	  }

	  _createClass(OrderedList, [{
	    key: "contains",
	    get: function get() {
	      return "list_item";
	    }
	  }, {
	    key: "attrs",
	    get: function get() {
	      return { order: new _schema.Attribute({ default: "1" }) };
	    }
	  }]);

	  return OrderedList;
	}(_schema.Block);

	// ;; The default bullet list node type.

	var BulletList = exports.BulletList = function (_Block4) {
	  _inherits(BulletList, _Block4);

	  function BulletList() {
	    _classCallCheck(this, BulletList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BulletList).apply(this, arguments));
	  }

	  _createClass(BulletList, [{
	    key: "contains",
	    get: function get() {
	      return "list_item";
	    }
	  }]);

	  return BulletList;
	}(_schema.Block);

	// ;; The default list item node type.

	var ListItem = exports.ListItem = function (_Block5) {
	  _inherits(ListItem, _Block5);

	  function ListItem() {
	    _classCallCheck(this, ListItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	  }

	  _createClass(ListItem, null, [{
	    key: "kinds",
	    get: function get() {
	      return "list_item";
	    }
	  }]);

	  return ListItem;
	}(_schema.Block);

	// ;; The default horizontal rule node type.

	var HorizontalRule = exports.HorizontalRule = function (_Block6) {
	  _inherits(HorizontalRule, _Block6);

	  function HorizontalRule() {
	    _classCallCheck(this, HorizontalRule);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HorizontalRule).apply(this, arguments));
	  }

	  _createClass(HorizontalRule, [{
	    key: "contains",
	    get: function get() {
	      return null;
	    }
	  }]);

	  return HorizontalRule;
	}(_schema.Block);

	// ;; The default heading node type. Has a single attribute
	// `level`, which indicates the heading level, and defaults to 1.

	var Heading = exports.Heading = function (_Textblock) {
	  _inherits(Heading, _Textblock);

	  function Heading() {
	    _classCallCheck(this, Heading);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Heading).apply(this, arguments));
	  }

	  _createClass(Heading, [{
	    key: "attrs",
	    get: function get() {
	      return { level: new _schema.Attribute({ default: "1" }) };
	    }
	    // :: number
	    // Controls the maximum heading level. Has the value 6 in the
	    // `Heading` class, but you can override it in a subclass.

	  }, {
	    key: "maxLevel",
	    get: function get() {
	      return 6;
	    }
	  }]);

	  return Heading;
	}(_schema.Textblock);

	// ;; The default code block / listing node type. Only
	// allows unmarked text nodes inside of it.

	var CodeBlock = exports.CodeBlock = function (_Textblock2) {
	  _inherits(CodeBlock, _Textblock2);

	  function CodeBlock() {
	    _classCallCheck(this, CodeBlock);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeBlock).apply(this, arguments));
	  }

	  _createClass(CodeBlock, [{
	    key: "contains",
	    get: function get() {
	      return "text";
	    }
	  }, {
	    key: "containsMarks",
	    get: function get() {
	      return false;
	    }
	  }, {
	    key: "isCode",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return CodeBlock;
	}(_schema.Textblock);

	// ;; The default paragraph node type.

	var Paragraph = exports.Paragraph = function (_Textblock3) {
	  _inherits(Paragraph, _Textblock3);

	  function Paragraph() {
	    _classCallCheck(this, Paragraph);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Paragraph).apply(this, arguments));
	  }

	  _createClass(Paragraph, [{
	    key: "defaultTextblock",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return Paragraph;
	}(_schema.Textblock);

	// ;; The default inline image node type. Has these
	// attributes:
	//
	// - **`src`** (required): The URL of the image.
	// - **`alt`**: The alt text.
	// - **`title`**: The title of the image.

	var Image = exports.Image = function (_Inline) {
	  _inherits(Image, _Inline);

	  function Image() {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
	  }

	  _createClass(Image, [{
	    key: "attrs",
	    get: function get() {
	      return {
	        src: new _schema.Attribute(),
	        alt: new _schema.Attribute({ default: "" }),
	        title: new _schema.Attribute({ default: "" })
	      };
	    }
	  }, {
	    key: "draggable",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return Image;
	}(_schema.Inline);

	// ;; The default hard break node type.

	var HardBreak = exports.HardBreak = function (_Inline2) {
	  _inherits(HardBreak, _Inline2);

	  function HardBreak() {
	    _classCallCheck(this, HardBreak);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HardBreak).apply(this, arguments));
	  }

	  _createClass(HardBreak, [{
	    key: "selectable",
	    get: function get() {
	      return false;
	    }
	  }, {
	    key: "isBR",
	    get: function get() {
	      return true;
	    }
	  }]);

	  return HardBreak;
	}(_schema.Inline);

	// ;; The default emphasis mark type.

	var EmMark = exports.EmMark = function (_MarkType) {
	  _inherits(EmMark, _MarkType);

	  function EmMark() {
	    _classCallCheck(this, EmMark);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmMark).apply(this, arguments));
	  }

	  _createClass(EmMark, null, [{
	    key: "rank",
	    get: function get() {
	      return 51;
	    }
	  }]);

	  return EmMark;
	}(_schema.MarkType);

	// ;; The default strong mark type.

	var StrongMark = exports.StrongMark = function (_MarkType2) {
	  _inherits(StrongMark, _MarkType2);

	  function StrongMark() {
	    _classCallCheck(this, StrongMark);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(StrongMark).apply(this, arguments));
	  }

	  _createClass(StrongMark, null, [{
	    key: "rank",
	    get: function get() {
	      return 52;
	    }
	  }]);

	  return StrongMark;
	}(_schema.MarkType);

	// ;; The default link mark type. Has these attributes:
	//
	// - **`href`** (required): The link target.
	// - **`title`**: The link's title.

	var LinkMark = exports.LinkMark = function (_MarkType3) {
	  _inherits(LinkMark, _MarkType3);

	  function LinkMark() {
	    _classCallCheck(this, LinkMark);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(LinkMark).apply(this, arguments));
	  }

	  _createClass(LinkMark, [{
	    key: "attrs",
	    get: function get() {
	      return {
	        href: new _schema.Attribute(),
	        title: new _schema.Attribute({ default: "" })
	      };
	    }
	  }], [{
	    key: "rank",
	    get: function get() {
	      return 25;
	    }
	  }]);

	  return LinkMark;
	}(_schema.MarkType);

	// ;; The default code font mark type.

	var CodeMark = exports.CodeMark = function (_MarkType4) {
	  _inherits(CodeMark, _MarkType4);

	  function CodeMark() {
	    _classCallCheck(this, CodeMark);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeMark).apply(this, arguments));
	  }

	  _createClass(CodeMark, [{
	    key: "isCode",
	    get: function get() {
	      return true;
	    }
	  }], [{
	    key: "rank",
	    get: function get() {
	      return 101;
	    }
	  }]);

	  return CodeMark;
	}(_schema.MarkType);

	// :: SchemaSpec
	// The specification for the default schema.

	var defaultSpec = new _schema.SchemaSpec({
	  doc: Doc,
	  blockquote: BlockQuote,
	  ordered_list: OrderedList,
	  bullet_list: BulletList,
	  list_item: ListItem,
	  horizontal_rule: HorizontalRule,

	  paragraph: Paragraph,
	  heading: Heading,
	  code_block: CodeBlock,

	  text: _schema.Text,
	  image: Image,
	  hard_break: HardBreak
	}, {
	  em: EmMark,
	  strong: StrongMark,
	  link: LinkMark,
	  code: CodeMark
	});

	// :: Schema
	// ProseMirror's default document schema.
	var defaultSchema = exports.defaultSchema = new _schema.Schema(defaultSpec);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findDiffStart = findDiffStart;
	exports.findDiffEnd = findDiffEnd;

	var _pos = __webpack_require__(9);

	// :: (Node, Node) → ?Pos
	// Find the first position at which nodes `a` and `b` differ, or
	// `null` if they are the same.
	function findDiffStart(a, b) {
	  var path = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

	  var iA = a.iter(),
	      iB = b.iter(),
	      offset = 0;
	  for (;;) {
	    if (iA.atEnd() || iB.atEnd()) {
	      if (a.size == b.size) return null;
	      break;
	    }

	    var childA = iA.next(),
	        childB = iB.next();
	    if (childA == childB) {
	      offset += childA.width;continue;
	    }

	    if (!childA.sameMarkup(childB)) break;

	    if (childA.isText && childA.text != childB.text) {
	      for (var j = 0; childA.text[j] == childB.text[j]; j++) {
	        offset++;
	      }break;
	    }

	    if (childA.size || childB.size) {
	      path.push(offset);
	      var inner = findDiffStart(childA.content, childB.content, path);
	      if (inner) return inner;
	      path.pop();
	    }
	    offset += childA.width;
	  }
	  return new _pos.Pos(path, offset);
	}

	// :: (Node, Node) → ?{a: Pos, b: Pos}
	// Find the first position, searching from the end, at which nodes `a`
	// and `b` differ, or `null` if they are the same. Since this position
	// will not be the same in both nodes, an object with two separate
	// positions is returned.
	function findDiffEnd(a, b) {
	  var pathA = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];
	  var pathB = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

	  var iA = a.reverseIter(),
	      iB = b.reverseIter();
	  var offA = a.size,
	      offB = b.size;

	  for (;;) {
	    if (iA.atEnd() || iB.atEnd()) {
	      if (a.size == b.size) return null;
	      break;
	    }
	    var childA = iA.next(),
	        childB = iB.next();
	    if (childA == childB) {
	      offA -= childA.width;offB -= childB.width;
	      continue;
	    }

	    if (!childA.sameMarkup(childB)) break;

	    if (childA.isText && childA.text != childB.text) {
	      var same = 0,
	          minSize = Math.min(childA.text.length, childB.text.length);
	      while (same < minSize && childA.text[childA.text.length - same - 1] == childB.text[childB.text.length - same - 1]) {
	        same++;offA--;offB--;
	      }
	      break;
	    }
	    offA -= childA.width;offB -= childB.width;
	    if (childA.size || childB.size) {
	      pathA.push(offA);pathB.push(offB);
	      var inner = findDiffEnd(childA.content, childB.content, pathA, pathB);
	      if (inner) return inner;
	      pathA.pop();pathB.pop();
	    }
	  }
	  return { a: new _pos.Pos(pathA, offA), b: new _pos.Pos(pathB, offB) };
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.elt = elt;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.rmClass = rmClass;
	exports.addClass = addClass;
	exports.contains = contains;
	exports.insertCSS = insertCSS;
	exports.ensureCSSAdded = ensureCSSAdded;
	function elt(tag, attrs) {
	  var result = document.createElement(tag);
	  if (attrs) for (var name in attrs) {
	    if (name == "style") result.style.cssText = attrs[name];else if (attrs[name] != null) result.setAttribute(name, attrs[name]);
	  }

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  for (var i = 0; i < args.length; i++) {
	    add(args[i], result);
	  }return result;
	}

	function add(value, target) {
	  if (typeof value == "string") value = document.createTextNode(value);

	  if (Array.isArray(value)) {
	    for (var i = 0; i < value.length; i++) {
	      add(value[i], target);
	    }
	  } else {
	    target.appendChild(value);
	  }
	}

	var reqFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

	function requestAnimationFrame(f) {
	  if (reqFrame) reqFrame(f);else setTimeout(f, 10);
	}

	var ie_upto10 = /MSIE \d/.test(navigator.userAgent);
	var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);

	var browser = exports.browser = {
	  mac: /Mac/.test(navigator.platform),
	  ie_upto10: ie_upto10,
	  ie_11up: ie_11up,
	  ie: ie_upto10 || ie_11up,
	  gecko: /gecko\/\d/i.test(navigator.userAgent)
	};

	function classTest(cls) {
	  return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*");
	}

	function rmClass(node, cls) {
	  var current = node.className;
	  var match = classTest(cls).exec(current);
	  if (match) {
	    var after = current.slice(match.index + match[0].length);
	    node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
	  }
	}

	function addClass(node, cls) {
	  var current = node.className;
	  if (!classTest(cls).test(current)) node.className += (current ? " " : "") + cls;
	}

	function contains(parent, child) {
	  // Android browser and IE will return false if child is a text node.
	  if (child.nodeType != 1) child = child.parentNode;
	  return child && parent.contains(child);
	}

	var accumulatedCSS = "",
	    cssNode = null;

	function insertCSS(css) {
	  if (cssNode) cssNode.textContent += css;else accumulatedCSS += css;
	}

	// This is called when a ProseMirror instance is created, to ensure
	// the CSS is in the DOM.
	function ensureCSSAdded() {
	  if (!cssNode) {
	    cssNode = document.createElement("style");
	    cssNode.textContent = "/* ProseMirror CSS */\n" + accumulatedCSS;
	    document.head.insertBefore(cssNode, document.head.firstChild);
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.selectedNodeAttr = exports.defParamsClick = exports.nameTitle = exports.namePattern = exports.defineFileHandler = exports.widgetParamHandler = undefined;

	var _params = __webpack_require__(16);

	Object.defineProperty(exports, "widgetParamHandler", {
		enumerable: true,
		get: function get() {
			return _params.widgetParamHandler;
		}
	});
	Object.defineProperty(exports, "defineFileHandler", {
		enumerable: true,
		get: function get() {
			return _params.defineFileHandler;
		}
	});
	Object.defineProperty(exports, "namePattern", {
		enumerable: true,
		get: function get() {
			return _params.namePattern;
		}
	});
	Object.defineProperty(exports, "nameTitle", {
		enumerable: true,
		get: function get() {
			return _params.nameTitle;
		}
	});
	Object.defineProperty(exports, "defParamsClick", {
		enumerable: true,
		get: function get() {
			return _params.defParamsClick;
		}
	});
	Object.defineProperty(exports, "selectedNodeAttr", {
		enumerable: true,
		get: function get() {
			return _params.selectedNodeAttr;
		}
	});
	exports.defParser = defParser;
	exports.getPosInParent = getPosInParent;

	var _model = __webpack_require__(3);

	var _selection = __webpack_require__(45);

	if (window.MathJax) MathJax.Hub.Queue(function () {
		MathJax.Hub.Config({
			tex2jax: {
				displayMath: [["\\[", "\\]"]],
				inlineMath: [["\\(", "\\)"]],
				processEscapes: true
			},
			displayAlign: "left"
		});
	});

	function defParser(type, tag, cls) {
		type.register("parseDOM", {
			tag: tag,
			rank: 25,
			parse: function parse(dom, context, type, attrs) {
				var contains = dom.classList.contains(cls);
				if (!contains) return false;
				context.insertFrom(dom, type, attrs);
			}
		});
	}

	function getPosInParent(pm, pos, child) {
		var i = 0,
		    parent = pm.doc.path(pos.path);
		parent.forEach(function (node, start) {
			i = node == child ? start : 0;
		});
		return new _model.Pos(pos.path, i);
	}

	/*import {InputRule} from "prosemirror/dist/inputrules"
	let urlex = /((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/
	LinkMark.register("autoInput","startLink", new InputRule(urlex," ",
		function(pm, match, pos) {
			let url = match[0]
			console.log(url)
			pm.setMark(this,pos,{href: url, title: ""})
		}
	))*/

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.nameTitle = exports.namePattern = undefined;
	exports.defineFileHandler = defineFileHandler;
	exports.getLastClicked = getLastClicked;
	exports.defParamsClick = defParamsClick;
	exports.selectedNodeAttr = selectedNodeAttr;

	var _dom = __webpack_require__(14);

	var _prompt = __webpack_require__(17);

	var _edit = __webpack_require__(18);

	var _dompos = __webpack_require__(46);

	var _error = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var fhandler = null,
	    lastClicked = null;

	var namePattern = exports.namePattern = "[A-Za-z0-9_-]{1,10}";
	var nameTitle = exports.nameTitle = "letters,digits, -, _ (max:10)";

	function defineFileHandler(handler) {
		fhandler = handler;
	}
	function getLastClicked() {
		return lastClicked;
	}

	var WidgetParamPrompt = function (_ParamPrompt) {
		_inherits(WidgetParamPrompt, _ParamPrompt);

		function WidgetParamPrompt() {
			_classCallCheck(this, WidgetParamPrompt);

			return _possibleConstructorReturn(this, _ParamPrompt.apply(this, arguments));
		}

		WidgetParamPrompt.prototype.prompt = function prompt() {
			var _this2 = this;

			return openWidgetPrompt(this, { onClose: function onClose() {
					return _this2.close();
				} });
		};

		return WidgetParamPrompt;
	}(_prompt.ParamPrompt);

	(0, _edit.defineOption)("commandParamPrompt", WidgetParamPrompt);

	function openWidgetPrompt(wpp, options) {
		var close = function close() {
			wpp.pm.off("interaction", close);
			if (dialog.parentNode) {
				dialog.parentNode.removeChild(dialog);
				if (options && options.onClose) options.onClose();
			}
		};
		var submit = function submit() {
			var params = wpp.values();
			if (params) {
				wpp.command.exec(wpp.pm, params);
				close();
			}
		};
		wpp.pm.on("interaction", close);
		var save = (0, _dom.elt)("input", { name: "save", type: "button", value: "Save" });
		save.addEventListener("mousedown", function (e) {
			submit();
		});
		var cancel = (0, _dom.elt)("input", { name: "cancel", type: "button", value: "Cancel" });
		cancel.addEventListener("mousedown", function (e) {
			e.preventDefault();e.stopPropagation();
			close();
		});
		var buttons = (0, _dom.elt)("div", { class: "widgetButtons" }, save, cancel);
		wpp.form = (0, _dom.elt)("form", { class: "widgetForm" }, (0, _dom.elt)("h4", null, wpp.command.label + " Settings"), wpp.fields.map(function (f) {
			return (0, _dom.elt)("div", null, f);
		}), buttons);
		// Submit if Enter pressed and all fields are valid
		wpp.form.addEventListener("keypress", function (e) {
			if (e.keyCode == 13) {
				e.preventDefault();e.stopPropagation();
				save.click();
			}
		});

		var dialog = (0, _dom.elt)("div", null, (0, _dom.elt)("div", { class: "widgetDialog" }), wpp.form);
		wpp.pm.wrapper.appendChild(dialog);
		return { close: close };
	}

	["text", "number", "range", "email", "url", "date"].map(function (type) {
		return _prompt.ParamPrompt.prototype.paramTypes[type] = {
			render: function render(param, value) {
				var field = (0, _dom.elt)("input", { type: type, placeholder: param.label, value: value, required: "required", autocomplete: "off" });
				var label = param.name ? param.name : param.label;
				field.setAttribute("name", label);
				var opt = param.options;
				if (opt) for (var prop in opt) {
					field.setAttribute(prop, opt[prop]);
				}var fieldLabel = (0, _dom.elt)("label", { for: label }, label);
				return (0, _dom.elt)("div", { class: "widgetField" }, fieldLabel, field);
			},
			validate: function validate(dom) {
				var input = dom.querySelector("input");
				return input.checkValidity() ? null : input.name + ": " + input.validationMessage;
			},
			read: function read(dom) {
				var input = dom.querySelector("input");
				return input ? input.value : input;
			}
		};
	});

	_prompt.ParamPrompt.prototype.paramTypes.file = {
		render: function render(param, value) {
			var field = (0, _dom.elt)("input", { type: "text", readonly: true, placeholder: param.label, value: value, required: "required", autocomplete: "off", required: true });
			var label = param.name ? param.name : param.label;
			field.setAttribute("name", label);
			var opt = param.options;
			if (opt) for (var prop in opt) {
				field.setAttribute(prop, opt[prop]);
			}var fieldLabel = (0, _dom.elt)("label", { for: label }, label);
			var uploadButton = (0, _dom.elt)("input", { name: "upload", type: "button", value: "Upload" });
			uploadButton.addEventListener("click", function (e) {
				buildUploadForm(pm, field);
			});
			return (0, _dom.elt)("div", { class: "widgetField" }, fieldLabel, field, uploadButton);
		},
		validate: function validate(dom) {
			var input = dom.querySelector("input");
			return input.checkValidity() ? null : input.name + ": " + input.validationMessage;
		},
		read: function read(dom) {
			var input = dom.querySelector("input");
			return input ? input.value : input;
		}
	};

	_prompt.ParamPrompt.prototype.paramTypes.select = {
		render: function render(param, value) {
			var options = param.options.call ? param.options(this) : param.options;
			var field = (0, _dom.elt)("select", null, options.map(function (o) {
				return (0, _dom.elt)("option", { value: o.value, selected: o.value == value ? "true" : null }, o.label);
			}));
			field.setAttribute("required", "required");
			var label = param.name ? param.name : param.label;
			field.setAttribute("name", label);
			var fieldLabel = (0, _dom.elt)("label", { for: name }, label);
			return (0, _dom.elt)("div", { class: "widgetField" }, fieldLabel, field);
		},
		validate: function validate(dom) {
			var select = dom.querySelector("select");
			return select.checkValidity() ? null : select.name + ": " + select.validationMessage;
		},
		read: function read(dom) {
			var select = dom.querySelector("select");
			return select ? select.value : select;
		}
	};

	function selectClickedNode(pm, e) {
		var pos = (0, _dompos.selectableNodeAbove)(pm, e.target, { left: e.clientX, top: e.clientY }, true);
		if (!pos) return pm.sel.fastPoll();

		var _pm$selection = pm.selection;
		var node = _pm$selection.node;
		var from = _pm$selection.from;

		if (node && pos.depth >= from.depth && pos.shorten(from.depth).cmp(from) == 0) {
			if (from.depth == 0) return pm.sel.fastPoll();
			pos = from.shorten();
		}

		pm.setNodeSelection(pos);
		pm.focus();
		e.preventDefault();
		lastClicked = e.target;
	}

	function defParamsClick(type, cmdname) {
		var spots = arguments.length <= 2 || arguments[2] === undefined ? ["topleft"] : arguments[2];

		type.prototype.handleClick = function (pm, e, path, node) {
			var spotClicked = false;
			spots.forEach(function check(loc) {
				var r = e.target.getBoundingClientRect();
				if (loc == "all") spotClicked = true;else if (loc == "topleft") spotClicked = spotClicked || e.clientX < r.left + 16 && e.clientY < r.top + 16;else if (loc == "bottomright") spotClicked = spotClicked || e.clientX > r.right - 32 && e.clientY > r.bottom - 32;
			});
			if (spotClicked) {
				var cmd = pm.commands[cmdname];
				if (cmd) {
					selectClickedNode(pm, e);
					cmd.exec(pm);
					return true;
				} else return false;
			}
		};
	}

	function selectedNodeAttr(pm, type, name) {
		var node = pm.selection.node;

		if (node && node.type == type) return node.attrs[name];
	}

	function FileDragHover(e) {
		e.stopPropagation();
		e.preventDefault();
		e.target.className = e.type == "dragover" ? "hover" : "";
	}

	function buildUploadForm(pm, field) {
		var legend = (0, _dom.elt)("h4", null, "File Upload");
		var inputHidden = (0, _dom.elt)("input", { type: "hidden", id: "MAX_FILE_SIZE", name: "MAX_FILE_SIZE", value: "300000" });
		var label = (0, _dom.elt)("label", { for: "fileselect" }, "File to upload:");
		var fileselect = (0, _dom.elt)("input", { id: "fileselect", type: "file", name: "fileselect[]", multiple: "multiple" });
		var filedrag = (0, _dom.elt)("div", { id: "filedrag" }, "or drop files here");
		var cancel = (0, _dom.elt)("input", { type: "button", value: "Cancel" });
		cancel.addEventListener("click", function (e) {
			e.preventDefault();e.stopPropagation();
			pm.wrapper.removeChild(form);
		});
		var saveFile = function saveFile(e) {
			e.preventDefault();e.stopPropagation();
			FileDragHover(e);
			var files = e.target.files || e.dataTransfer.files;
			if (files) field.value = files[0].name;
			if (fhandler) fhandler(files);
			pm.wrapper.removeChild(form);
		};
		fileselect.addEventListener("change", saveFile);
		var xhr = new XMLHttpRequest();
		if (xhr.upload) {
			filedrag.addEventListener("dragover", FileDragHover);
			filedrag.addEventListener("dragleave", FileDragHover);
			filedrag.addEventListener("drop", saveFile);
			filedrag.style.display = "block";
		}
		var form = (0, _dom.elt)("form", { id: "upload", enctype: "multipart/form-data" }, legend, (0, _dom.elt)("div", null, label, fileselect, filedrag), (0, _dom.elt)("div", null, cancel));
		pm.wrapper.appendChild(form);
	}

	(0, _dom.insertCSS)("\n\n.widgetDialog {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #FFF;\n\tz-index: 8888;\n\topacity:0.7;\n\tfont-family: Helvetica, Arial, Sans-Serif;\n}\n\n.widgetForm {\n\tbackground: white;\n\tposition: absolute;\n\ttop: 10px;\n\tleft: 10px;\n\tz-index: 9999;\n\tdisplay: block;\n\tborder-radius: 6px;\n\tborder: 1px solid #AAA;\n\tpadding: 4px;\n}\n\n.widgetForm h4 {\n\tmargin: 0;\n}\n\n.widgetField {\n\tdisplay: block;\n\tpadding: 2px;\n}\n\n.widgetField label {\n\twidth: 80px;\n\tcolor: black;\n\tdisplay: inline-block;\n\tpadding: 2px;\n\tfloat: left;\n}\n\n.widgetField input {\n\tmargin: 2px;\n\tdisplay: inline;\n}\n\n.widgetField input[type = \"number\"] {\n\twidth: 60px;\n\tmargin: 2px;\n\tdisplay: inline;\n}\n\n.widgetField input[type = \"button\"] {\n\tmargin: 5px;\n}\n\n.widgetFieldName {\n\tcolor: black;\n\tdisplay: inline;\n\tpadding: 4px;\n}\n\n.widgetButtons {\n\ttext-align: center;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n}\n\n.widgetButtons input {\n\tmargin: 5px;\n}\n\n#upload {\n\tposition: absolute;\n\ttop: 40px;\n\tleft: 40px;\n\tpadding: 5px;\n\tborder: 1px solid #AAA;\n\tborder-radius: 6px;\n\tbackground: white;\n\tz-index: 10000;\n\tdisplay: block;\n}\n\n#upload input {\n\tmargin: 5px;\n}\n\n#upload h4 {\n\tmargin: 0;\n}\n\n#filedrag {\n\tdisplay: none;\n\tfont-weight: bold;\n\ttext-align: center;\n\tpadding: 1em 0;\n\tmargin: 1em 0;\n\tcolor: #555;\n\tborder: 2px dashed #555;\n\tborder-radius: 6px;\n\tcursor: default;\n}\n\n#filedrag:hover {\n\tcolor: #f00;\n\tborder-color: #f00;\n\tborder-style: solid;\n\tbox-shadow: inset 0 3px 4px #888;\n}\n\n.ProseMirror-invalid {\n\t  white-space: nowrap;\n\t  font-size: 80%;\n\t  background: white;\n\t  border: 1px solid red;\n\t  border-radius: 4px;\n\t  padding: 5px 10px;\n\t  position: absolute;\n\t  min-width: 10em;\n\t}\n\n");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ParamPrompt = undefined;
	exports.openPrompt = openPrompt;

	var _error = __webpack_require__(7);

	var _dom = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// !! The `ui/prompt` module implements functionality for prompting
	// the user for [command parameters](#CommandSpec.params).
	//
	// The default implementation gets the job done, roughly, but you'll
	// probably want to customize it in your own system (or submit patches
	// to improve this implementation).

	// ;; This class represents a dialog that prompts for [command
	// parameters](#CommandSpec.params). It is the default value of the
	// `commandParamPrompt` option. You can set this option to a subclass
	// (or a complete reimplementation) to customize the way in which
	// parameters are read.

	var ParamPrompt = exports.ParamPrompt = function () {
	  // :: (ProseMirror, Command)
	  // Construct a prompt. Note that this does not
	  // [open](#ParamPrompt.open) it yet.

	  function ParamPrompt(pm, command) {
	    var _this = this;

	    _classCallCheck(this, ParamPrompt);

	    // :: ProseMirror
	    this.pm = pm;
	    // :: Command
	    this.command = command;
	    this.doClose = null;
	    // :: [DOMNode]
	    // An array of fields, as created by `ParamTypeSpec.render`, for
	    // the command's parameters.
	    this.fields = command.params.map(function (param) {
	      if (!(param.type in _this.paramTypes)) _error.AssertionError.raise("Unsupported parameter type: " + param.type);
	      return _this.paramTypes[param.type].render.call(_this.pm, param, _this.defaultValue(param));
	    });
	    // :: DOMNode
	    // An HTML form wrapping the fields.
	    this.form = (0, _dom.elt)("form", null, this.fields.map(function (f) {
	      return (0, _dom.elt)("div", null, f);
	    }));
	  }

	  // :: ()
	  // Close the prompt.

	  _createClass(ParamPrompt, [{
	    key: "close",
	    value: function close() {
	      if (this.doClose) {
	        this.doClose();
	        this.doClose = null;
	      }
	    }

	    // :: ()
	    // Open the prompt's dialog.

	  }, {
	    key: "open",
	    value: function open() {
	      var _this2 = this;

	      this.close();
	      var prompt = this.prompt();
	      var hadFocus = this.pm.hasFocus();
	      this.doClose = function () {
	        prompt.close();
	        if (hadFocus) setTimeout(function () {
	          return _this2.pm.focus();
	        }, 50);
	      };

	      var submit = function submit() {
	        var params = _this2.values();
	        if (params) {
	          _this2.close();
	          _this2.command.exec(_this2.pm, params);
	        }
	      };

	      this.form.addEventListener("submit", function (e) {
	        e.preventDefault();
	        submit();
	      });

	      this.form.addEventListener("keydown", function (e) {
	        if (e.keyCode == 27) prompt.close();else if (e.keyCode == 13 && !(e.ctrlKey || e.metaKey || e.shiftKey)) submit();
	      });

	      var input = this.form.querySelector("input, textarea");
	      if (input) input.focus();
	    }

	    // :: () → ?[any]
	    // Read the values from the form's field. Validate them, and when
	    // one isn't valid (either has a validate function that produced an
	    // error message, or has no validate function, no value, and no
	    // default value), show the problem to the user and return `null`.

	  }, {
	    key: "values",
	    value: function values() {
	      var result = [];
	      for (var i = 0; i < this.command.params.length; i++) {
	        var param = this.command.params[i],
	            dom = this.fields[i];
	        var type = this.paramTypes[param.type],
	            value = type.read.call(this.pm, dom),
	            bad = undefined;
	        if (param.validate) bad = param.validate(value);else if (!value && param.default == null) bad = "No default value available";

	        if (bad) {
	          if (type.reportInvalid) type.reportInvalid.call(this.pm, dom, bad);else this.reportInvalid(dom, bad);
	          return null;
	        }
	        result.push(value);
	      }
	      return result;
	    }

	    // :: (CommandParam) → ?any
	    // Get a parameter's default value, if any.

	  }, {
	    key: "defaultValue",
	    value: function defaultValue(param) {
	      if (param.prefill) {
	        var prefill = param.prefill.call(this.command.self, this.pm);
	        if (prefill != null) return prefill;
	      }
	      return param.default;
	    }

	    // :: () → {close: ()}
	    // Open a prompt with the parameter form in it. The default
	    // implementation calls `openPrompt`.

	  }, {
	    key: "prompt",
	    value: function prompt() {
	      var _this3 = this;

	      return openPrompt(this.pm, this.form, { onClose: function onClose() {
	          return _this3.close();
	        } });
	    }

	    // :: (DOMNode, string)
	    // Report a field as invalid, showing the given message to the user.

	  }, {
	    key: "reportInvalid",
	    value: function reportInvalid(dom, message) {
	      // FIXME this is awful and needs a lot more work
	      var parent = dom.parentNode;
	      var style = "left: " + (dom.offsetLeft + dom.offsetWidth + 2) + "px; top: " + (dom.offsetTop - 5) + "px";
	      var msg = parent.appendChild((0, _dom.elt)("div", { class: "ProseMirror-invalid", style: style }, message));
	      setTimeout(function () {
	        return parent.removeChild(msg);
	      }, 1500);
	    }
	  }]);

	  return ParamPrompt;
	}();

	// ;; #path=ParamTypeSpec #kind=interface
	// By default, the prompting interface only knows how to prompt for
	// parameters of type `text` and `select`. You can change the way
	// those are prompted for, and define new types, by writing to
	// `ParamPrompt.paramTypes`. All methods on these specs will be called
	// with `this` bound to the relevant `ProseMirror` instance.

	// :: (param: CommandParam, value: ?any) → DOMNode #path=ParamTypeSpec.render
	// Create the DOM structure for a parameter field of this type, and
	// pre-fill it with `value`, if given.

	// :: (field: DOMNode) → any #path=ParamTypeSpec.read
	// Read the value from the DOM field created by
	// [`render`](#ParamTypeSpec.render).

	// :: (field: DOMNode, message: string) #path=ParamTypeSpec.reportInvalid
	// Report the value in the given field as invalid, showing the given
	// error message. This property is optional, and the prompt
	// implementation will fall back to its own method of showing the
	// message when it is not provided.

	// :: Object<ParamTypeSpec>
	// A collection of default renderers and readers for [parameter
	// types](#CommandParam.type), which [parameter
	// handlers](#commandParamHandler) can optionally use to prompt for
	// parameters. `render` should create a form field for the parameter,
	// and `read` should, given that field, return its value.

	ParamPrompt.prototype.paramTypes = Object.create(null);

	ParamPrompt.prototype.paramTypes.text = {
	  render: function render(param, value) {
	    return (0, _dom.elt)("input", { type: "text",
	      placeholder: param.label,
	      value: value,
	      autocomplete: "off" });
	  },
	  read: function read(dom) {
	    return dom.value;
	  }
	};

	ParamPrompt.prototype.paramTypes.select = {
	  render: function render(param, value) {
	    var options = param.options.call ? param.options(this) : param.options;
	    return (0, _dom.elt)("select", null, options.map(function (o) {
	      return (0, _dom.elt)("option", { value: o.value, selected: o.value == value ? "true" : null }, o.label);
	    }));
	  },
	  read: function read(dom) {
	    return dom.value;
	  }
	};

	// :: (ProseMirror, DOMNode, ?Object) → {close: ()}
	// Open a dialog box for the given editor, putting `content` inside of
	// it. The `close` method on the return value can be used to
	// explicitly close the dialog again. The following options are
	// supported:
	//
	// **`pos`**`: {left: number, top: number}`
	//   : Provide an explicit position for the element. By default, it'll
	//     be placed in the center of the editor.
	//
	// **`onClose`**`: fn()`
	//   : A function to be called when the dialog is closed.
	function openPrompt(pm, content, options) {
	  var button = (0, _dom.elt)("button", { class: "ProseMirror-prompt-close" });
	  var wrapper = (0, _dom.elt)("div", { class: "ProseMirror-prompt" }, content, button);
	  var outerBox = pm.wrapper.getBoundingClientRect();

	  pm.wrapper.appendChild(wrapper);
	  if (options && options.pos) {
	    wrapper.style.left = options.pos.left - outerBox.left + "px";
	    wrapper.style.pos = options.pos.top - outerBox.top + "px";
	  } else {
	    var blockBox = wrapper.getBoundingClientRect();
	    var cX = Math.max(0, outerBox.left) + Math.min(window.innerWidth, outerBox.right) - blockBox.width;
	    var cY = Math.max(0, outerBox.top) + Math.min(window.innerHeight, outerBox.bottom) - blockBox.height;
	    wrapper.style.left = cX / 2 - outerBox.left + "px";
	    wrapper.style.top = cY / 2 - outerBox.top + "px";
	  }

	  var close = function close() {
	    pm.off("interaction", close);
	    if (wrapper.parentNode) {
	      wrapper.parentNode.removeChild(wrapper);
	      if (options && options.onClose) options.onClose();
	    }
	  };
	  button.addEventListener("click", close);
	  pm.on("interaction", close);
	  return { close: close };
	}

	(0, _dom.insertCSS)("\n.ProseMirror-prompt {\n  background: white;\n  padding: 2px 6px 2px 15px;\n  border: 1px solid silver;\n  position: absolute;\n  border-radius: 3px;\n  z-index: 11;\n}\n\n.ProseMirror-prompt input[type=\"text\"],\n.ProseMirror-prompt textarea {\n  background: #eee;\n  border: none;\n  outline: none;\n}\n\n.ProseMirror-prompt input[type=\"text\"] {\n  padding: 0 4px;\n}\n\n.ProseMirror-prompt-close {\n  position: absolute;\n  left: 2px; top: 1px;\n  color: #666;\n  border: none; background: transparent; padding: 0;\n}\n\n.ProseMirror-prompt-close:after {\n  content: \"✕\";\n  font-size: 12px;\n}\n\n.ProseMirror-invalid {\n  background: #ffc;\n  border: 1px solid #cc7;\n  border-radius: 4px;\n  padding: 5px 10px;\n  position: absolute;\n  min-width: 10em;\n}\n");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Keymap = exports.baseCommands = exports.Command = exports.CommandSet = exports.MarkedRange = exports.SelectionError = exports.Range = exports.defineOption = exports.ProseMirror = undefined;

	var _main = __webpack_require__(19);

	Object.defineProperty(exports, "ProseMirror", {
	  enumerable: true,
	  get: function get() {
	    return _main.ProseMirror;
	  }
	});

	var _options = __webpack_require__(41);

	Object.defineProperty(exports, "defineOption", {
	  enumerable: true,
	  get: function get() {
	    return _options.defineOption;
	  }
	});

	var _selection = __webpack_require__(45);

	Object.defineProperty(exports, "Range", {
	  enumerable: true,
	  get: function get() {
	    return _selection.Range;
	  }
	});
	Object.defineProperty(exports, "SelectionError", {
	  enumerable: true,
	  get: function get() {
	    return _selection.SelectionError;
	  }
	});

	var _range = __webpack_require__(52);

	Object.defineProperty(exports, "MarkedRange", {
	  enumerable: true,
	  get: function get() {
	    return _range.MarkedRange;
	  }
	});

	var _command = __webpack_require__(42);

	Object.defineProperty(exports, "CommandSet", {
	  enumerable: true,
	  get: function get() {
	    return _command.CommandSet;
	  }
	});
	Object.defineProperty(exports, "Command", {
	  enumerable: true,
	  get: function get() {
	    return _command.Command;
	  }
	});

	var _base_commands = __webpack_require__(43);

	Object.defineProperty(exports, "baseCommands", {
	  enumerable: true,
	  get: function get() {
	    return _base_commands.baseCommands;
	  }
	});

	__webpack_require__(53);

	var _browserkeymap = __webpack_require__(21);

	var _browserkeymap2 = _interopRequireDefault(_browserkeymap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Keymap = _browserkeymap2.default;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DIRTY_REDRAW = exports.DIRTY_RESCAN = exports.ProseMirror = undefined;

	__webpack_require__(20);

	var _browserkeymap = __webpack_require__(21);

	var _browserkeymap2 = _interopRequireDefault(_browserkeymap);

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(22);

	var _sortedinsert = __webpack_require__(32);

	var _sortedinsert2 = _interopRequireDefault(_sortedinsert);

	var _error = __webpack_require__(7);

	var _map = __webpack_require__(33);

	var _event = __webpack_require__(34);

	var _dom = __webpack_require__(14);

	var _format = __webpack_require__(35);

	var _options = __webpack_require__(41);

	var _selection2 = __webpack_require__(45);

	var _dompos = __webpack_require__(46);

	var _draw = __webpack_require__(47);

	var _input = __webpack_require__(48);

	var _history = __webpack_require__(51);

	var _range = __webpack_require__(52);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; This is the class used to represent instances of the editor. A
	// ProseMirror editor holds a [document](#Node) and a
	// [selection](#Selection), and displays an editable surface
	// representing that document in the browser document.
	//
	// Contains event methods (`on`, etc) from the [event
	// mixin](#EventMixin).

	var ProseMirror = exports.ProseMirror = function () {
	  // :: (Object)
	  // Construct a new editor from a set of [options](#edit_options)
	  // and, if it has a [`place`](#place) option, add it to the
	  // document.

	  function ProseMirror(opts) {
	    _classCallCheck(this, ProseMirror);

	    (0, _dom.ensureCSSAdded)();

	    opts = this.options = (0, _options.parseOptions)(opts);
	    // :: Schema
	    // The schema for this editor's document.
	    this.schema = opts.schema;
	    if (opts.doc == null) opts.doc = this.schema.node("doc", null, [this.schema.node("paragraph")]);
	    // :: DOMNode
	    // The editable DOM node containing the document.
	    this.content = (0, _dom.elt)("div", { class: "ProseMirror-content", "pm-container": true });
	    // :: DOMNode
	    // The outer DOM element of the editor.
	    this.wrapper = (0, _dom.elt)("div", { class: "ProseMirror" }, this.content);
	    this.wrapper.ProseMirror = this;

	    if (opts.place && opts.place.appendChild) opts.place.appendChild(this.wrapper);else if (opts.place) opts.place(this.wrapper);

	    this.setDocInner(opts.docFormat ? (0, _format.parseFrom)(this.schema, opts.doc, opts.docFormat) : opts.doc);
	    (0, _draw.draw)(this, this.doc);
	    this.content.contentEditable = true;
	    if (opts.label) this.content.setAttribute("aria-label", opts.label);

	    // :: Object
	    // A namespace where modules can store references to themselves
	    // associated with this editor instance.
	    this.mod = Object.create(null);
	    this.cached = Object.create(null);
	    this.operation = null;
	    this.dirtyNodes = new _map.Map(); // Maps node object to 1 (re-scan content) or 2 (redraw entirely)
	    this.flushScheduled = false;

	    this.sel = new _selection2.SelectionState(this, (0, _selection2.findSelectionAtStart)(this.doc));
	    this.accurateSelection = false;
	    this.input = new _input.Input(this);

	    // :: Object<Command>
	    // The commands available in the editor.
	    this.commands = null;
	    this.commandKeys = null;
	    (0, _options.initOptions)(this);
	  }

	  // :: (string, any)
	  // Update the value of the given [option](#edit_options).

	  _createClass(ProseMirror, [{
	    key: "setOption",
	    value: function setOption(name, value) {
	      (0, _options.setOption)(this, name, value);
	      // :: (name: string, value: *) #path=ProseMirror#events#optionChanged
	      // Fired when [`setOption`](#ProseMirror.setOption) is called.
	      this.signal("optionChanged", name, value);
	    }

	    // :: (string) → any
	    // Get the current value of the given [option](#edit_options).

	  }, {
	    key: "getOption",
	    value: function getOption(name) {
	      return this.options[name];
	    }

	    // :: Selection
	    // Get the current selection.

	  }, {
	    key: "setTextSelection",

	    // :: (Pos, ?Pos)
	    // Set the selection to a [text selection](#TextSelection) from
	    // `anchor` to `head`, or, if `head` is null, a cursor selection at
	    // `anchor`.
	    value: function setTextSelection(anchor, head) {
	      this.setSelection(new _selection2.TextSelection(anchor, head));
	    }

	    // :: (Pos)
	    // Set the selection to a node selection on the node after `pos`.

	  }, {
	    key: "setNodeSelection",
	    value: function setNodeSelection(pos) {
	      this.checkPos(pos, false);
	      var parent = this.doc.path(pos.path);
	      if (pos.offset >= parent.size) _selection2.SelectionError.raise("Trying to set a node selection at the end of a node");
	      var node = parent.child(pos.offset);
	      if (!node.type.selectable) _selection2.SelectionError.raise("Trying to select a non-selectable node");
	      this.input.maybeAbortComposition();
	      this.sel.setAndSignal(new _selection2.NodeSelection(pos, pos.move(1), node));
	    }

	    // :: (Selection)
	    // Set the selection to the given selection object.

	  }, {
	    key: "setSelection",
	    value: function setSelection(selection) {
	      if (selection instanceof _selection2.TextSelection) {
	        this.checkPos(selection.head, true);
	        if (!selection.empty) this.checkPos(selection.anchor, true);
	      } else {
	        this.checkPos(selection.to, false);
	      }
	      this.setSelectionDirect(selection);
	    }
	  }, {
	    key: "setSelectionDirect",
	    value: function setSelectionDirect(selection) {
	      this.ensureOperation();
	      this.input.maybeAbortComposition();
	      if (!selection.eq(this.sel.range)) this.sel.setAndSignal(selection);
	    }

	    // :: (any, ?string)
	    // Replace the editor's document. When `format` is given, it should
	    // be a [parsable format](#format), and `value` should something in
	    // that format. If not, `value` should be a `Node`.

	  }, {
	    key: "setContent",
	    value: function setContent(value, format) {
	      if (format) value = (0, _format.parseFrom)(this.schema, value, format);
	      this.setDoc(value);
	    }

	    // :: (?string) → any
	    // Get the editor's content in a given format. When `format` is not
	    // given, a `Node` is returned. If it is given, it should be an
	    // existing [serialization format](#format).

	  }, {
	    key: "getContent",
	    value: function getContent(format) {
	      return format ? (0, _format.serializeTo)(this.doc, format) : this.doc;
	    }
	  }, {
	    key: "setDocInner",
	    value: function setDocInner(doc) {
	      if (doc.type != this.schema.nodes.doc) _error.AssertionError.raise("Trying to set a document with a different schema");
	      // :: Node The current document.
	      this.doc = doc;
	      this.ranges = new _range.RangeStore(this);
	      // :: History The edit history for the editor.
	      this.history = new _history.History(this);
	    }

	    // :: (Node, ?Selection)
	    // Set the editor's content, and optionally include a new selection.

	  }, {
	    key: "setDoc",
	    value: function setDoc(doc, sel) {
	      if (!sel) sel = (0, _selection2.findSelectionAtStart)(doc);
	      // :: (doc: Node, selection: Selection) #path=ProseMirror#events#beforeSetDoc
	      // Fired when [`setDoc`](#ProseMirror.setDoc) is called, before
	      // the document is actually updated.
	      this.signal("beforeSetDoc", doc, sel);
	      this.ensureOperation();
	      this.setDocInner(doc);
	      this.sel.set(sel, true);
	      // :: (doc: Node, selection: Selection) #path=ProseMirror#events#setDoc
	      // Fired when [`setDoc`](#ProseMirror.setDoc) is called, after
	      // the document is updated.
	      this.signal("setDoc", doc, sel);
	    }
	  }, {
	    key: "updateDoc",
	    value: function updateDoc(doc, mapping, selection) {
	      this.ensureOperation();
	      this.input.maybeAbortComposition();
	      this.ranges.transform(mapping);
	      this.doc = doc;
	      this.sel.setAndSignal(selection || this.sel.range.map(doc, mapping));
	      // :: () #path=ProseMirror#events#change
	      // Fired when the document has changed. See
	      // [`setDoc`](#ProseMirror.event_setDoc) and
	      // [`transform`](#ProseMirror.event_transform) for more specific
	      // change-related events.
	      this.signal("change");
	    }

	    // :: EditorTransform
	    // Create an editor- and selection-aware `Transform` for this editor.

	  }, {
	    key: "apply",

	    // :: (Transform, ?Object) → ?Transform
	    // Apply a transformation (which you might want to create with the
	    // [`tr` getter](#ProseMirror.tr)) to the document in the editor.
	    // The following options are supported:
	    //
	    // **`selection`**`: ?Selection`
	    //   : A new selection to set after the transformation is applied.
	    //
	    // **`scrollIntoView`**: ?bool
	    //   : When true, scroll the selection into view on the next
	    //     [redraw](#ProseMirror.flush).
	    //
	    // Returns the transform, or `false` if there were no steps in it.
	    //
	    // Has the following property:
	    value: function apply(transform) {
	      var options = arguments.length <= 1 || arguments[1] === undefined ? nullOptions : arguments[1];

	      if (transform.doc == this.doc) return false;
	      if (transform.docs[0] != this.doc && (0, _model.findDiffStart)(transform.docs[0], this.doc)) _error.AssertionError.raise("Applying a transform that does not start with the current document");

	      this.updateDoc(transform.doc, transform, options.selection);
	      // :: (Transform, Object) #path=ProseMirror#events#transform
	      // Signals that a (non-empty) transformation has been aplied to
	      // the editor. Passes the `Transform` and the options given to
	      // [`apply`](#ProseMirror.apply) as arguments to the handler.
	      this.signal("transform", transform, options);
	      if (options.scrollIntoView) this.scrollIntoView();
	      return transform;
	    }

	    // :: (Pos, ?bool)
	    // Verify that the given position is valid in the current document,
	    // and throw an error otherwise. When `textblock` is true, the position
	    // must also fall within a textblock node.

	  }, {
	    key: "checkPos",
	    value: function checkPos(pos, textblock) {
	      if (!pos.isValid(this.doc, textblock)) _error.AssertionError.raise("Position " + pos + " is not valid in current document");
	    }
	  }, {
	    key: "ensureOperation",
	    value: function ensureOperation() {
	      return this.operation || this.startOperation();
	    }
	  }, {
	    key: "startOperation",
	    value: function startOperation(options) {
	      var _this = this;

	      this.operation = new Operation(this);
	      if (!(options && options.readSelection === false) && this.sel.readFromDOM()) this.operation.sel = this.sel.range;

	      if (!this.flushScheduled) {
	        (0, _dom.requestAnimationFrame)(function () {
	          _this.flushScheduled = false;
	          _this.flush();
	        });
	        this.flushScheduled = true;
	      }
	      return this.operation;
	    }

	    // :: ()
	    // Flush any pending changes to the DOM. When the document,
	    // selection, or marked ranges in an editor change, the DOM isn't
	    // updated immediately, but rather scheduled to be updated the next
	    // time the browser redraws the screen. This method can be used to
	    // force this to happen immediately. It can be useful when you, for
	    // example, want to measure where on the screen a part of the
	    // document ends up, immediately after changing the document.

	  }, {
	    key: "flush",
	    value: function flush() {
	      if (!document.body.contains(this.wrapper) || !this.operation) return;
	      // :: () #path=ProseMirror#events#flushing
	      // Fired when the editor is about to [flush](#ProseMirror.flush)
	      // an update to the DOM.
	      this.signal("flushing");
	      var op = this.operation;
	      if (!op) return;
	      this.operation = null;
	      this.accurateSelection = true;

	      var docChanged = op.doc != this.doc || this.dirtyNodes.size,
	          redrawn = false;
	      if (!this.input.composing && (docChanged || op.composingAtStart)) {
	        (0, _draw.redraw)(this, this.dirtyNodes, this.doc, op.doc);
	        this.dirtyNodes.clear();
	        redrawn = true;
	      }

	      if ((redrawn || !op.sel.eq(this.sel.range)) && !this.input.composing || op.focus) this.sel.toDOM(op.focus);

	      // FIXME somehow schedule this relative to ui/update so that it
	      // doesn't cause extra layout
	      if (op.scrollIntoView !== false) (0, _dompos.scrollIntoView)(this, op.scrollIntoView);
	      // :: () #path=ProseMirror#events#draw
	      // Fired when the editor redrew its document in the DOM.
	      if (docChanged) this.signal("draw");
	      // :: () #path=ProseMirror#events#flush
	      // Fired when the editor has finished
	      // [flushing](#ProseMirror.flush) an update to the DOM.
	      this.signal("flush");
	      this.accurateSelection = false;
	    }

	    // :: (Keymap, ?number)
	    // Add a
	    // [keymap](https://github.com/marijnh/browserkeymap#an-object-type-for-keymaps)
	    // to the editor. Keymaps added in this way are queried before the
	    // base keymap. The `rank` parameter can be used to
	    // control when they are queried relative to other maps added like
	    // this. Maps with a lower rank get queried first.

	  }, {
	    key: "addKeymap",
	    value: function addKeymap(map) {
	      var rank = arguments.length <= 1 || arguments[1] === undefined ? 50 : arguments[1];

	      (0, _sortedinsert2.default)(this.input.keymaps, { map: map, rank: rank }, function (a, b) {
	        return a.rank - b.rank;
	      });
	    }

	    // :: (union<string, Keymap>)
	    // Remove the given keymap, or the keymap with the given name, from
	    // the editor.

	  }, {
	    key: "removeKeymap",
	    value: function removeKeymap(map) {
	      var maps = this.input.keymaps;
	      for (var i = 0; i < maps.length; ++i) {
	        if (maps[i].map == map || maps[i].map.options.name == map) {
	          maps.splice(i, 1);
	          return true;
	        }
	      }
	    }

	    // :: (Pos, Pos, ?Object) → MarkedRange
	    // Create a marked range between the given positions. Marked ranges
	    // “track” the part of the document they point to—as the document
	    // changes, they are updated to move, grow, and shrink along with
	    // their content.
	    //
	    // `options` may be an object containing these properties:
	    //
	    // **`inclusiveLeft`**`: bool = false`
	    //   : Whether the left side of the range is inclusive. When it is,
	    //     content inserted at that point will become part of the range.
	    //     When not, it will be outside of the range.
	    //
	    // **`inclusiveRight`**`: bool = false`
	    //   : Whether the right side of the range is inclusive.
	    //
	    // **`removeWhenEmpty`**`: bool = true`
	    //   : Whether the range should be forgotten when it becomes empty
	    //     (because all of its content was deleted).
	    //
	    // **`className`**: string
	    //   : A CSS class to add to the inline content that is part of this
	    //     range.

	  }, {
	    key: "markRange",
	    value: function markRange(from, to, options) {
	      this.checkPos(from);
	      this.checkPos(to);
	      var range = new _range.MarkedRange(from, to, options);
	      this.ranges.addRange(range);
	      return range;
	    }

	    // :: (MarkedRange)
	    // Remove the given range from the editor.

	  }, {
	    key: "removeRange",
	    value: function removeRange(range) {
	      this.ranges.removeRange(range);
	    }

	    // :: (MarkType, ?bool, ?Object)
	    // Set (when `to` is true), unset (`to` is false), or toggle (`to`
	    // is null) the given mark type on the selection. When there is a
	    // non-empty selection, the marks of the selection are updated. When
	    // the selection is empty, the set of [active
	    // marks](#ProseMirror.activeMarks) is updated.

	  }, {
	    key: "setMark",
	    value: function setMark(type, to, attrs) {
	      var sel = this.selection;
	      if (sel.empty) {
	        var marks = this.activeMarks();
	        if (to == null) to = !type.isInSet(marks);
	        if (to && !this.doc.path(sel.head.path).type.canContainMark(type)) return;
	        this.input.storedMarks = to ? type.create(attrs).addToSet(marks) : type.removeFromSet(marks);
	        // :: () #path=ProseMirror#events#activeMarkChange
	        // Fired when the set of [active marks](#ProseMirror.activeMarks) changes.
	        this.signal("activeMarkChange");
	      } else {
	        if (to != null ? to : !this.doc.rangeHasMark(sel.from, sel.to, type)) this.apply(this.tr.addMark(sel.from, sel.to, type.create(attrs)));else this.apply(this.tr.removeMark(sel.from, sel.to, type));
	      }
	    }

	    // :: () → [Mark]
	    // Get the marks at the cursor. By default, this yields the marks
	    // associated with the content at the cursor, as per `Node.marksAt`.
	    // But `setMark` may have been used to change the set of active
	    // marks, in which case that set is returned.

	  }, {
	    key: "activeMarks",
	    value: function activeMarks() {
	      var head;
	      return this.input.storedMarks || ((head = this.selection.head) ? this.doc.marksAt(head) : []);
	    }

	    // :: ()
	    // Give the editor focus.

	  }, {
	    key: "focus",
	    value: function focus() {
	      if (this.operation) this.operation.focus = true;else this.sel.toDOM(true);
	    }

	    // :: () → bool
	    // Query whether the editor has focus.

	  }, {
	    key: "hasFocus",
	    value: function hasFocus() {
	      if (this.sel.range instanceof _selection2.NodeSelection) return document.activeElement == this.content;else return (0, _selection2.hasFocus)(this);
	    }

	    // :: ({top: number, left: number}) → ?Pos
	    // If the given coordinates (which should be relative to the top
	    // left corner of the window—not the page) fall within the editable
	    // content, this method will return the document position that
	    // corresponds to those coordinates.

	  }, {
	    key: "posAtCoords",
	    value: function posAtCoords(coords) {
	      return (0, _dompos.posAtCoords)(this, coords);
	    }

	    // :: (Pos) → {top: number, left: number, bottom: number}
	    // Find the screen coordinates (relative to top left corner of the
	    // window) of the given document position.

	  }, {
	    key: "coordsAtPos",
	    value: function coordsAtPos(pos) {
	      this.checkPos(pos);
	      return (0, _dompos.coordsAtPos)(this, pos);
	    }

	    // :: (?Pos)
	    // Scroll the given position, or the cursor position if `pos` isn't
	    // given, into view.

	  }, {
	    key: "scrollIntoView",
	    value: function scrollIntoView() {
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	      if (pos) this.checkPos(pos);
	      this.ensureOperation();
	      this.operation.scrollIntoView = pos;
	    }

	    // :: (string, ?[any]) → bool
	    // Execute the named [command](#Command). If the command takes
	    // parameters, they can be passed as an array.

	  }, {
	    key: "execCommand",
	    value: function execCommand(name, params) {
	      var cmd = this.commands[name];
	      return !!(cmd && cmd.exec(this, params) !== false);
	    }

	    // :: (string) → ?string
	    // Return the name of the key that is bound to the given command, if
	    // any.

	  }, {
	    key: "keyForCommand",
	    value: function keyForCommand(name) {
	      var cached = this.commandKeys[name];
	      if (cached !== undefined) return cached;

	      var cmd = this.commands[name],
	          keymap = this.input.baseKeymap;
	      if (!cmd) return this.commandKeys[name] = null;
	      var key = cmd.spec.key || (_dom.browser.mac ? cmd.spec.macKey : cmd.spec.pcKey);
	      if (key) {
	        key = _browserkeymap2.default.normalizeKeyName(Array.isArray(key) ? key[0] : key);
	        var deflt = keymap.bindings[key];
	        if (Array.isArray(deflt) ? deflt.indexOf(name) > -1 : deflt == name) return this.commandKeys[name] = key;
	      }
	      for (var _key in keymap.bindings) {
	        var bound = keymap.bindings[_key];
	        if (Array.isArray(bound) ? bound.indexOf(name) > -1 : bound == name) return this.commandKeys[name] = _key;
	      }
	      return this.commandKeys[name] = null;
	    }
	  }, {
	    key: "markRangeDirty",
	    value: function markRangeDirty(range) {
	      this.ensureOperation();
	      var dirty = this.dirtyNodes;
	      var from = range.from,
	          to = range.to;
	      for (var depth = 0, node = this.doc;; depth++) {
	        var fromEnd = depth == from.depth,
	            toEnd = depth == to.depth;
	        if (!fromEnd && !toEnd && from.path[depth] == to.path[depth]) {
	          var child = node.child(from.path[depth]);
	          if (!dirty.has(child)) dirty.set(child, DIRTY_RESCAN);
	          node = child;
	        } else {
	          var _ret = function () {
	            var start = fromEnd ? from.offset : from.path[depth];
	            var end = toEnd ? to.offset : to.path[depth] + 1;
	            if (node.isTextblock) {
	              node.forEach(function (child, cStart, cEnd) {
	                if (cStart < end && cEnd > start) dirty.set(child, DIRTY_REDRAW);
	              });
	            } else {
	              for (var i = node.iter(start, end), child; child = i.next().value;) {
	                dirty.set(child, DIRTY_REDRAW);
	              }
	            }
	            return "break";
	          }();

	          if (_ret === "break") break;
	        }
	      }
	    }
	  }, {
	    key: "markAllDirty",
	    value: function markAllDirty() {
	      this.dirtyNodes.set(this.doc, DIRTY_REDRAW);
	    }
	  }, {
	    key: "selection",
	    get: function get() {
	      if (!this.accurateSelection) this.ensureOperation();
	      return this.sel.range;
	    }
	  }, {
	    key: "tr",
	    get: function get() {
	      return new EditorTransform(this);
	    }
	  }]);

	  return ProseMirror;
	}();

	// :: Object
	// The object `{scrollIntoView: true}`, which is a common argument to
	// pass to `ProseMirror.apply` or `EditorTransform.apply`.

	ProseMirror.prototype.apply.scroll = { scrollIntoView: true };

	var DIRTY_RESCAN = exports.DIRTY_RESCAN = 1,
	    DIRTY_REDRAW = exports.DIRTY_REDRAW = 2;

	var nullOptions = {};

	(0, _event.eventMixin)(ProseMirror);

	var Operation = function Operation(pm) {
	  _classCallCheck(this, Operation);

	  this.doc = pm.doc;
	  this.sel = pm.sel.range;
	  this.scrollIntoView = false;
	  this.focus = false;
	  this.composingAtStart = !!pm.input.composing;
	};

	// ;; A selection-aware extension of `Transform`. Use
	// `ProseMirror.tr` to create an instance.

	var EditorTransform = function (_Transform) {
	  _inherits(EditorTransform, _Transform);

	  function EditorTransform(pm) {
	    _classCallCheck(this, EditorTransform);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(EditorTransform).call(this, pm.doc));

	    _this2.pm = pm;
	    return _this2;
	  }

	  // :: (?Object) → ?EditorTransform
	  // Apply the transformation. Returns the transform, or `false` it is
	  // was empty.

	  _createClass(EditorTransform, [{
	    key: "apply",
	    value: function apply(options) {
	      return this.pm.apply(this, options);
	    }

	    // :: Selection
	    // Get the editor's current selection, [mapped](#Selection.map)
	    // through the steps in this transform.

	  }, {
	    key: "replaceSelection",

	    // :: (?Node, ?bool) → EditorTransform
	    // Replace the selection with the given node, or delete it if `node`
	    // is null. When `inheritMarks` is true and the node is an inline
	    // node, it inherits the marks from the place where it is inserted.
	    value: function replaceSelection(node, inheritMarks) {
	      var _selection = this.selection;
	      var empty = _selection.empty;
	      var from = _selection.from;
	      var to = _selection.to;
	      var selNode = _selection.node;var parent = undefined;
	      if (node && node.isInline && inheritMarks !== false) {
	        var marks = empty ? this.pm.input.storedMarks : this.doc.marksAt(from);
	        node = node.type.create(node.attrs, node.text, marks);
	      }

	      if (selNode && selNode.isTextblock && node && node.isInline) {
	        // Putting inline stuff onto a selected textblock puts it inside
	        from = new _model.Pos(from.toPath(), 0);
	        to = new _model.Pos(from.path, selNode.size);
	      } else if (selNode) {
	        // This node can not simply be removed/replaced. Remove its parent as well
	        while (from.depth && from.offset == 0 && (parent = this.doc.path(from.path)) && from.offset == parent.size - 1 && !parent.type.canBeEmpty && !(node && parent.type.canContain(node))) {
	          from = from.shorten();
	          to = to.shorten(null, 1);
	        }
	      } else if (node && node.isBlock && this.doc.path(from.path.slice(0, from.depth - 1)).type.canContain(node)) {
	        // Inserting a block node into a textblock. Try to insert it above by splitting the textblock
	        this.delete(from, to);
	        var _parent = this.doc.path(from.path);
	        if (from.offset && from.offset != _parent.size) this.split(from);
	        return this.insert(from.shorten(null, from.offset ? 1 : 0), node);
	      }

	      if (node) return this.replaceWith(from, to, node);else return this.delete(from, to);
	    }

	    // :: () → EditorTransform
	    // Delete the selection.

	  }, {
	    key: "deleteSelection",
	    value: function deleteSelection() {
	      return this.replaceSelection();
	    }

	    // :: (string) → EditorTransform
	    // Replace the selection with a text node containing the given string.

	  }, {
	    key: "typeText",
	    value: function typeText(text) {
	      return this.replaceSelection(this.pm.schema.text(text), true);
	    }
	  }, {
	    key: "selection",
	    get: function get() {
	      return this.steps.length ? this.pm.selection.map(this) : this.pm.selection;
	    }
	  }]);

	  return EditorTransform;
	}(_transform.Transform);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _dom = __webpack_require__(14);

	(0, _dom.insertCSS)("\n\n.ProseMirror {\n  border: 1px solid silver;\n  position: relative;\n}\n\n.ProseMirror-content {\n  padding: 4px 8px 4px 14px;\n  white-space: pre-wrap;\n  line-height: 1.2;\n}\n\n.ProseMirror-drop-target {\n  position: absolute;\n  width: 1px;\n  background: #666;\n  display: none;\n}\n\n.ProseMirror-content ul.tight p, .ProseMirror-content ol.tight p {\n  margin: 0;\n}\n\n.ProseMirror-content ul, .ProseMirror-content ol {\n  padding-left: 30px;\n  cursor: default;\n}\n\n.ProseMirror-content blockquote {\n  padding-left: 1em;\n  border-left: 3px solid #eee;\n  margin-left: 0; margin-right: 0;\n}\n\n.ProseMirror-content pre {\n  white-space: pre-wrap;\n}\n\n.ProseMirror-selectednode {\n  outline: 2px solid #8cf;\n}\n\n.ProseMirror-content p:first-child,\n.ProseMirror-content h1:first-child,\n.ProseMirror-content h2:first-child,\n.ProseMirror-content h3:first-child,\n.ProseMirror-content h4:first-child,\n.ProseMirror-content h5:first-child,\n.ProseMirror-content h6:first-child {\n  margin-top: .3em;\n}\n\n/* Add space around the hr to make clicking it easier */\n\n.ProseMirror-content hr {\n  position: relative;\n  height: 6px;\n  border: none;\n}\n\n.ProseMirror-content hr:after {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  top: 2px;\n  border-top: 2px solid silver;\n}\n\n.ProseMirror-content img {\n  cursor: default;\n}\n\n/* Make sure li selections wrap around markers */\n\n.ProseMirror-content li {\n  position: relative;\n  pointer-events: none; /* Don't do weird stuff with marker clicks */\n}\n.ProseMirror-content li > * {\n  pointer-events: auto;\n}\n\nli.ProseMirror-selectednode {\n  outline: none;\n}\n\nli.ProseMirror-selectednode:after {\n  content: \"\";\n  position: absolute;\n  left: -32px;\n  right: -2px; top: -2px; bottom: -2px;\n  border: 2px solid #8cf;\n  pointer-events: none;\n}\n\n");

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	(function(mod) {
	  if (true) // CommonJS
	    module.exports = mod()
	  else if (typeof define == "function" && define.amd) // AMD
	    return define([], mod)
	  else // Plain browser env
	    (this || window).browserKeymap = mod()
	})(function() {
	  "use strict"

	  var mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform)
	          : typeof os != "undefined" ? os.platform() == "darwin" : false

	  // :: Object<string>
	  // A map from key codes to key names.
	  var keyNames = {
	    3: "Enter", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
	    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
	    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
	    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
	    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 127: "Delete",
	    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
	    221: "]", 222: "'", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
	    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
	  }

	  // Number keys
	  for (var i = 0; i < 10; i++) keyNames[i + 48] = keyNames[i + 96] = String(i)
	  // Alphabetic keys
	  for (var i = 65; i <= 90; i++) keyNames[i] = String.fromCharCode(i)
	  // Function keys
	  for (var i = 1; i <= 12; i++) keyNames[i + 111] = keyNames[i + 63235] = "F" + i

	  // :: (KeyboardEvent) → ?string
	  // Find a name for the given keydown event. If the keycode in the
	  // event is not known, this will return `null`. Otherwise, it will
	  // return a string like `"Shift-Cmd-Ctrl-Alt-Home"`. The parts before
	  // the dashes give the modifiers (always in that order, if present),
	  // and the last word gives the key name, which one of the names in
	  // `keyNames`.
	  //
	  // The convention for keypress events is to use the pressed character
	  // between single quotes. Due to limitations in the browser API,
	  // keypress events can not have modifiers.
	  function keyName(event) {
	    if (event.type == "keypress") return "'" + String.fromCharCode(event.charCode) + "'"

	    var base = keyNames[event.keyCode], name = base
	    if (name == null || event.altGraphKey) return null

	    if (event.altKey && base != "Alt") name = "Alt-" + name
	    if (event.ctrlKey && base != "Ctrl") name = "Ctrl-" + name
	    if (event.metaKey && base != "Cmd") name = "Cmd-" + name
	    if (event.shiftKey && base != "Shift") name = "Shift-" + name
	    return name
	  }

	  // :: (string) → bool
	  // Test whether the given key name refers to a modifier key.
	  function isModifierKey(name) {
	    name = /[^-]*$/.exec(name)[0]
	    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
	  }

	  // :: (string) → string
	  // Normalize a sloppy key name, which may have modifiers in the wrong
	  // order or use shorthands for modifiers, to a properly formed key
	  // name. Used to normalize names provided in keymaps.
	  //
	  // Note that the modifier `mod` is a shorthand for `Cmd` on Mac, and
	  // `Ctrl` on other platforms.
	  function normalizeKeyName(name) {
	    var parts = name.split(/-(?!'?$)/), result = parts[parts.length - 1]
	    var alt, ctrl, shift, cmd
	    for (var i = 0; i < parts.length - 1; i++) {
	      var mod = parts[i]
	      if (/^(cmd|meta|m)$/i.test(mod)) cmd = true
	      else if (/^a(lt)?$/i.test(mod)) alt = true
	      else if (/^(c|ctrl|control)$/i.test(mod)) ctrl = true
	      else if (/^s(hift)$/i.test(mod)) shift = true
	      else if (/^mod$/i.test(mod)) { if (mac) cmd = true; else ctrl = true }
	      else throw new Error("Unrecognized modifier name: " + mod)
	    }
	    if (alt) result = "Alt-" + result
	    if (ctrl) result = "Ctrl-" + result
	    if (cmd) result = "Cmd-" + result
	    if (shift) result = "Shift-" + result
	    return result
	  }

	  // :: (Object, ?Object)
	  // A keymap binds a set of [key names](#keyName) to commands names
	  // or functions.
	  //
	  // Construct a keymap using the bindings in `keys`, whose properties
	  // should be [key names](#keyName) or space-separated sequences of
	  // key names. In the second case, the binding will be for a
	  // multi-stroke key combination.
	  //
	  // When `options` has a property `call`, this will be a programmatic
	  // keymap, meaning that instead of looking keys up in its set of
	  // bindings, it will pass the key name to `options.call`, and use
	  // the return value of that calls as the resolved binding.
	  //
	  // `options.name` can be used to give the keymap a name, making it
	  // easier to [remove](#ProseMirror.removeKeymap) from an editor.
	  function Keymap(keys, options) {
	    this.options = options || {}
	    this.bindings = Object.create(null)
	    if (keys) for (var keyname in keys) if (Object.prototype.hasOwnProperty.call(keys, keyname))
	      this.addBinding(keyname, keys[keyname])
	  }

	  Keymap.prototype = {
	    normalize: function(name) {
	      return this.options.multi !== false ? name.split(/ +(?!\'$)/).map(normalizeKeyName) : [normalizeKeyName(name)]
	    },

	    // :: (string, any)
	    // Add a binding for the given key or key sequence.
	    addBinding: function(keyname, value) {
	      var keys = this.normalize(keyname)
	      for (var i = 0; i < keys.length; i++) {
	        var name = keys.slice(0, i + 1).join(" ")
	        var val = i == keys.length - 1 ? value : "..."
	        var prev = this.bindings[name]
	        if (!prev) this.bindings[name] = val
	        else if (prev != val) throw new Error("Inconsistent bindings for " + name)
	      }
	    },

	    // :: (string)
	    // Remove the binding for the given key or key sequence.
	    removeBinding: function(keyname) {
	      var keys = this.normalize(keyname)
	      for (var i = keys.length - 1; i >= 0; i--) {
	        var name = keys.slice(0, i).join(" ")
	        var val = this.bindings[name]
	        if (val == "..." && !this.unusedMulti(name))
	          break
	        else if (val)
	          delete this.bindings[name]
	      }
	    },

	    unusedMulti: function(name) {
	      for (var binding in this.bindings)
	        if (binding.length > name && binding.indexOf(name) == 0 && binding.charAt(name.length) == " ")
	          return false
	      return true
	    },

	    // :: (string, ?any) → any
	    // Looks up the given key or key sequence in this keymap. Returns
	    // the value the key is bound to (which may be undefined if it is
	    // not bound), or the string `"..."` if the key is a prefix of a
	    // multi-key sequence that is bound by this keymap.
	    lookup: function(key, context) {
	      return this.options.call ? this.options.call(key, context) : this.bindings[key]
	    },

	    constructor: Keymap
	  }

	  Keymap.keyName = keyName
	  Keymap.isModifierKey = isModifierKey
	  Keymap.normalizeKeyName = normalizeKeyName

	  return Keymap
	})


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Remapping = exports.MapResult = exports.PosMap = exports.joinableBlocks = exports.joinPoint = exports.canWrap = exports.canLift = exports.StepResult = exports.Step = exports.Transform = undefined;

	var _transform = __webpack_require__(23);

	Object.defineProperty(exports, "Transform", {
	  enumerable: true,
	  get: function get() {
	    return _transform.Transform;
	  }
	});

	var _step = __webpack_require__(24);

	Object.defineProperty(exports, "Step", {
	  enumerable: true,
	  get: function get() {
	    return _step.Step;
	  }
	});
	Object.defineProperty(exports, "StepResult", {
	  enumerable: true,
	  get: function get() {
	    return _step.StepResult;
	  }
	});

	var _ancestor = __webpack_require__(26);

	Object.defineProperty(exports, "canLift", {
	  enumerable: true,
	  get: function get() {
	    return _ancestor.canLift;
	  }
	});
	Object.defineProperty(exports, "canWrap", {
	  enumerable: true,
	  get: function get() {
	    return _ancestor.canWrap;
	  }
	});

	var _join = __webpack_require__(28);

	Object.defineProperty(exports, "joinPoint", {
	  enumerable: true,
	  get: function get() {
	    return _join.joinPoint;
	  }
	});
	Object.defineProperty(exports, "joinableBlocks", {
	  enumerable: true,
	  get: function get() {
	    return _join.joinableBlocks;
	  }
	});

	var _map = __webpack_require__(25);

	Object.defineProperty(exports, "PosMap", {
	  enumerable: true,
	  get: function get() {
	    return _map.PosMap;
	  }
	});
	Object.defineProperty(exports, "MapResult", {
	  enumerable: true,
	  get: function get() {
	    return _map.MapResult;
	  }
	});
	Object.defineProperty(exports, "Remapping", {
	  enumerable: true,
	  get: function get() {
	    return _map.Remapping;
	  }
	});

	__webpack_require__(29);

	__webpack_require__(30);

	__webpack_require__(31);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Transform = undefined;

	var _step2 = __webpack_require__(24);

	var _map = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A change to a document often consists of a series of
	// [steps](#Step). This class provides a convenience abstraction to
	// build up and track such an array of steps. A `Transform` object
	// implements `Mappable`.
	//
	// The high-level transforming methods return the `Transform` object
	// itself, so that they can be chained.

	var Transform = function () {
	  // :: (Node)
	  // Create a transformation that starts with the given document.

	  function Transform(doc) {
	    _classCallCheck(this, Transform);

	    // :: [Step]
	    // The accumulated steps.
	    this.steps = [];
	    // :: [Node]
	    // The individual document versions. Always has a length one more
	    // than `steps`, since it also includes the original starting
	    // document.
	    this.docs = [doc];
	    // :: [PosMap]
	    // The position maps produced by the steps. Has the same length as
	    // `steps`.
	    this.maps = [];
	  }

	  // :: Node
	  // The current version of the transformed document.

	  _createClass(Transform, [{
	    key: "step",

	    // :: (Step) → ?StepResult
	    // Add a step to this transformation. If the step can be
	    // [applied](#Step.apply) to the current document, the result of
	    // applying it is returned, and an element is added to the
	    // [`steps`](#Transform.steps), [`docs`](#Transform.docs), and
	    // [`maps`](#Transform.maps) arrays.
	    value: function step(_step, from, to, pos, param) {
	      if (typeof _step == "string") _step = new _step2.Step(_step, from, to, pos, param);
	      var result = _step.apply(this.doc);
	      if (result) {
	        this.steps.push(_step);
	        this.maps.push(result.map);
	        this.docs.push(result.doc);
	      }
	      return result;
	    }

	    // :: (Pos, ?number) → MapResult
	    // Map a position through the whole transformation (all the position
	    // maps in [`maps`](#Transform.maps)), and return the result.

	  }, {
	    key: "map",
	    value: function map(pos, bias) {
	      var deleted = false;
	      for (var i = 0; i < this.maps.length; i++) {
	        var result = this.maps[i].map(pos, bias);
	        pos = result.pos;
	        if (result.deleted) deleted = true;
	      }
	      return new _map.MapResult(pos, deleted);
	    }
	  }, {
	    key: "doc",
	    get: function get() {
	      return this.docs[this.docs.length - 1];
	    }

	    // :: Node
	    // The original input document.

	  }, {
	    key: "before",
	    get: function get() {
	      return this.docs[0];
	    }
	  }]);

	  return Transform;
	}();

	exports.Transform = Transform;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.StepResult = exports.Step = undefined;

	var _model = __webpack_require__(3);

	var _error = __webpack_require__(7);

	var _map = __webpack_require__(25);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A step object wraps an atomic operation. It generally applies
	// only to the document it was created for, since the positions
	// associated with it will only make sense for that document.

	var Step = exports.Step = function () {
	  // :: (string, ?Pos, ?Pos, ?Pos, ?any)
	  // Build a step. The type should name a [defined](Step.define) step
	  // type, and the shape of the positions and parameter should be
	  // appropriate for that type.

	  function Step(type, from, to, pos) {
	    var param = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];

	    _classCallCheck(this, Step);

	    if (!(type in steps)) _error.NamespaceError.raise("Unknown step type: " + type);
	    // :: string
	    // The type of the step.
	    this.type = type;
	    // :: ?Pos
	    // The start of the step's range, if any. Which of the three
	    // optional positions associated with a step a given step type
	    // uses differs. The way each of these positions is mapped when
	    // the step is mapped over a [position mapping](#PosMap) depends
	    // on its role.
	    this.from = from;
	    // :: ?Pos
	    // The end of the step's range.
	    this.to = to;
	    // :: ?Pos
	    // The base position for this step.
	    this.pos = pos;
	    // :: ?any
	    // Extra step-type-specific information associated with the step.
	    this.param = param;
	  }

	  // :: (Node) → ?StepResult
	  // Applies this step to the given document, returning a result
	  // containing the transformed document (the input document is not
	  // changed) and a `PosMap`. If the step could not meaningfully be
	  // applied to the given document, this returns `null`.

	  _createClass(Step, [{
	    key: "apply",
	    value: function apply(doc) {
	      return steps[this.type].apply(doc, this);
	    }

	    // :: (Node, PosMap) → Step
	    // Create an inverted version of this step. Needs the document as it
	    // was before the step, as well as `PosMap` created by applying the
	    // step to that document, as input.

	  }, {
	    key: "invert",
	    value: function invert(oldDoc, map) {
	      return steps[this.type].invert(this, oldDoc, map);
	    }

	    // :: (Mappable) → ?Step
	    // Map this step through a mappable thing, returning either a
	    // version of that step with its positions adjusted, or `null` if
	    // the step was entirely deleted by the mapping.

	  }, {
	    key: "map",
	    value: function map(remapping) {
	      var allDeleted = true;
	      var from = null,
	          to = null,
	          pos = null;

	      if (this.from) {
	        var result = remapping.map(this.from, 1);
	        from = result.pos;
	        if (!result.deleted) allDeleted = false;
	      }
	      if (this.to) {
	        if (this.to.cmp(this.from) == 0) {
	          to = from;
	        } else {
	          var result = remapping.map(this.to, -1);
	          to = result.pos.max(from);
	          if (!result.deleted) allDeleted = false;
	        }
	      }
	      if (this.pos) {
	        if (from && this.pos.cmp(this.from) == 0) {
	          pos = from;
	        } else if (to && this.pos.cmp(this.to) == 0) {
	          pos = to;
	        } else {
	          var result = remapping.map(this.pos, 1);
	          pos = result.pos;
	          if (!result.deleted) allDeleted = false;
	        }
	      }
	      return allDeleted ? null : new Step(this.type, from, to, pos, this.param);
	    }

	    // :: () → Object
	    // Create a JSON-serializeable representation of this step.

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      var impl = steps[this.type];
	      return {
	        type: this.type,
	        from: this.from,
	        to: this.to,
	        pos: this.pos,
	        param: impl.paramToJSON ? impl.paramToJSON(this.param) : this.param
	      };
	    }

	    // :: (Schema, Object) → Step
	    // Deserialize a step from its JSON representation.

	  }], [{
	    key: "fromJSON",
	    value: function fromJSON(schema, json) {
	      var impl = steps[json.type];
	      return new Step(json.type, json.from && _model.Pos.fromJSON(json.from), json.to && _model.Pos.fromJSON(json.to), json.pos && _model.Pos.fromJSON(json.pos), impl.paramFromJSON ? impl.paramFromJSON(schema, json.param) : json.param);
	    }

	    // :: (string, Object)
	    // Define a new type of step. Implementation should have the
	    // following properties:
	    //
	    // **`apply`**`(doc: Node, step: Step) → ?StepResult
	    //   : Applies the step to a document.
	    // **`invert`**`(step: Step, oldDoc: Node, map: PosMap) → Step
	    //   : Create an inverted version of the step.
	    // **`paramToJSON`**`(param: ?any) → ?Object
	    //   : Serialize this step type's parameter to JSON.
	    // **`paramFromJSON`**`(schema: Schema, json: ?Object) → ?any
	    //   : Deserialize this step type's parameter from JSON.

	  }, {
	    key: "define",
	    value: function define(type, implementation) {
	      steps[type] = implementation;
	    }
	  }]);

	  return Step;
	}();

	// ;; Objects of this type are returned as the result of
	// applying a transform step to a document.

	var StepResult = exports.StepResult = function StepResult(doc) {
	  var map = arguments.length <= 1 || arguments[1] === undefined ? _map.nullMap : arguments[1];

	  _classCallCheck(this, StepResult);

	  // :: Node The transformed document.
	  this.doc = doc;
	  // :: PosMap
	  // The position map that describes the correspondence between the
	  // old and the new document.
	  this.map = map;
	};

	var steps = Object.create(null);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Remapping = exports.nullMap = exports.MapResult = exports.PosMap = exports.ReplacedRange = exports.MovedRange = undefined;

	var _model = __webpack_require__(3);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; #kind=interface #path=Mappable
	// There are various things that positions can be mapped through.
	// We'll denote those as 'mappable'. This is not an actual class in
	// the codebase, only an agreed-on interface.

	// :: (pos: Pos, bias: ?number) → MapResult
	// #path=Mappable.map
	// Map a position through this object. When given, the `bias`
	// determines in which direction to move when a chunk of content is
	// inserted at or around the mapped position.

	var MovedRange = exports.MovedRange = function () {
	  function MovedRange(start, size) {
	    var dest = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    _classCallCheck(this, MovedRange);

	    this.start = start;
	    this.size = size;
	    this.dest = dest;
	  }

	  _createClass(MovedRange, [{
	    key: "toString",
	    value: function toString() {
	      return "[moved " + this.start + "+" + this.size + " to " + this.dest + "]";
	    }
	  }, {
	    key: "end",
	    get: function get() {
	      return new _model.Pos(this.start.path, this.start.offset + this.size);
	    }
	  }]);

	  return MovedRange;
	}();

	var Side = function Side(from, to, ref) {
	  _classCallCheck(this, Side);

	  this.from = from;
	  this.to = to;
	  this.ref = ref;
	};

	var ReplacedRange = exports.ReplacedRange = function () {
	  function ReplacedRange(from, to, newFrom, newTo) {
	    var ref = arguments.length <= 4 || arguments[4] === undefined ? from : arguments[4];
	    var newRef = arguments.length <= 5 || arguments[5] === undefined ? newFrom : arguments[5];

	    _classCallCheck(this, ReplacedRange);

	    this.before = new Side(from, to, ref);
	    this.after = new Side(newFrom, newTo, newRef);
	  }

	  _createClass(ReplacedRange, [{
	    key: "toString",
	    value: function toString() {
	      return "[replaced " + this.before.from + "-" + this.before.to + " with " + this.after.from + "-" + this.after.to + "]";
	    }
	  }]);

	  return ReplacedRange;
	}();

	var empty = [];

	function offsetFrom(base, pos) {
	  if (pos.path.length > base.path.length) {
	    var path = [pos.path[base.path.length] - base.offset];
	    for (var i = base.path.length + 1; i < pos.path.length; i++) {
	      path.push(pos.path[i]);
	    }return new _model.Pos(path, pos.offset);
	  } else {
	    return new _model.Pos([], pos.offset - base.offset);
	  }
	}

	function mapThrough(map, pos) {
	  var bias = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	  var back = arguments[3];

	  for (var i = 0; i < map.replaced.length; i++) {
	    var range = map.replaced[i],
	        side = back ? range.after : range.before;
	    var left = undefined,
	        right = undefined;
	    if ((left = pos.cmp(side.from)) >= 0 && (right = pos.cmp(side.to)) <= 0) {
	      var other = back ? range.before : range.after;
	      return new MapResult(bias < 0 ? other.from : other.to, !!(left && right), { rangeID: i, offset: offsetFrom(side.ref, pos) });
	    }
	  }

	  for (var i = 0; i < map.moved.length; i++) {
	    var range = map.moved[i];
	    var start = back ? range.dest : range.start;
	    if (pos.cmp(start) >= 0 && _model.Pos.cmp(pos.path, pos.offset, start.path, start.offset + range.size) <= 0) {
	      var dest = back ? range.start : range.dest;
	      var depth = start.depth;
	      if (pos.depth > depth) {
	        var offset = dest.offset + (pos.path[depth] - start.offset);
	        return new MapResult(new _model.Pos(dest.path.concat(offset).concat(pos.path.slice(depth + 1)), pos.offset));
	      } else {
	        return new MapResult(new _model.Pos(dest.path, dest.offset + (pos.offset - start.offset)));
	      }
	    }
	  }

	  return new MapResult(pos);
	}

	// ;; A position map, holding information about the way positions in
	// the pre-step version of a document correspond to positions in the
	// post-step version. This class implements `Mappable`.

	var PosMap = exports.PosMap = function () {
	  function PosMap(moved, replaced) {
	    _classCallCheck(this, PosMap);

	    this.moved = moved || empty;
	    this.replaced = replaced || empty;
	  }

	  _createClass(PosMap, [{
	    key: "recover",
	    value: function recover(offset) {
	      return this.replaced[offset.rangeID].after.ref.extend(offset.offset);
	    }

	    // :: (Pos, ?number) → MapResult
	    // Map the given position through this map. The `bias` parameter can
	    // be used to control what happens when the transform inserted
	    // content at (or around) this position—if `bias` is negative, the a
	    // position before the inserted content will be returned, if it is
	    // positive, a position after the insertion is returned.

	  }, {
	    key: "map",
	    value: function map(pos, bias) {
	      return mapThrough(this, pos, bias, false);
	    }

	    // :: () → PosMap
	    // Create an inverted version of this map. The result can be used to
	    // map positions in the post-step document to the pre-step document.

	  }, {
	    key: "invert",
	    value: function invert() {
	      return new InvertedPosMap(this);
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.moved.concat(this.replaced).join(" ");
	    }
	  }]);

	  return PosMap;
	}();

	// ;; The return value of mapping a position.

	var MapResult = exports.MapResult = function MapResult(pos) {
	  var deleted = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	  var recover = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  _classCallCheck(this, MapResult);

	  // :: Pos The mapped version of the position.
	  this.pos = pos;
	  // :: bool Tells you whether the position was deleted, that is,
	  // whether the step removed its surroundings from the document.
	  this.deleted = deleted;
	  this.recover = recover;
	};

	var InvertedPosMap = function () {
	  function InvertedPosMap(map) {
	    _classCallCheck(this, InvertedPosMap);

	    this.inner = map;
	  }

	  _createClass(InvertedPosMap, [{
	    key: "recover",
	    value: function recover(offset) {
	      return this.inner.replaced[offset.rangeID].before.ref.extend(offset.offset);
	    }
	  }, {
	    key: "map",
	    value: function map(pos, bias) {
	      return mapThrough(this.inner, pos, bias, true);
	    }
	  }, {
	    key: "invert",
	    value: function invert() {
	      return this.inner;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return "-" + this.inner;
	    }
	  }]);

	  return InvertedPosMap;
	}();

	var nullMap = exports.nullMap = new PosMap();

	// ;; A remapping represents a pipeline of zero or more mappings. It
	// is a specialized data structured used to manage mapping through a
	// series of steps, typically including inverted and non-inverted
	// versions of the same step. (This comes up when ‘rebasing’ steps for
	// collaboration or history management.) This class implements
	// `Mappable`.

	var Remapping = exports.Remapping = function () {
	  // :: (?[PosMap], ?[PosMap])

	  function Remapping() {
	    var head = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var tail = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	    var mirror = arguments.length <= 2 || arguments[2] === undefined ? Object.create(null) : arguments[2];

	    _classCallCheck(this, Remapping);

	    // :: [PosMap]
	    // The maps in the head of the mapping are applied to input
	    // positions first, back-to-front. So the map at the end of this
	    // array (if any) is the very first one applied.
	    this.head = head;
	    // The maps in the tail are applied last, front-to-back.
	    this.tail = tail;
	    this.mirror = mirror;
	  }

	  // :: (PosMap, ?number) → number
	  // Add a map to the mapping's front. If this map is the mirror image
	  // (produced by an inverted step) of another map in this mapping,
	  // that map's id (as returned by this method or
	  // [`addToBack`](#Remapping.addToBack)) should be passed as a second
	  // parameter to register the correspondence.

	  _createClass(Remapping, [{
	    key: "addToFront",
	    value: function addToFront(map, corr) {
	      this.head.push(map);
	      var id = -this.head.length;
	      if (corr != null) this.mirror[id] = corr;
	      return id;
	    }

	    // :: (PosMap, ?number) → number
	    // Add a map to the mapping's back. If the map is the mirror image
	    // of another mapping in this object, the id of that map should be
	    // passed to register the correspondence.

	  }, {
	    key: "addToBack",
	    value: function addToBack(map, corr) {
	      this.tail.push(map);
	      var id = this.tail.length - 1;
	      if (corr != null) this.mirror[corr] = id;
	      return id;
	    }
	  }, {
	    key: "get",
	    value: function get(id) {
	      return id < 0 ? this.head[-id - 1] : this.tail[id];
	    }

	    // :: (Pos, ?number) → MapResult
	    // Map a position through this remapping, optionally passing a bias
	    // direction.

	  }, {
	    key: "map",
	    value: function map(pos, bias) {
	      var deleted = false;

	      for (var i = -this.head.length; i < this.tail.length; i++) {
	        var map = this.get(i);
	        var result = map.map(pos, bias);
	        if (result.recover) {
	          var corr = this.mirror[i];
	          if (corr != null) {
	            i = corr;
	            pos = this.get(corr).recover(result.recover);
	            continue;
	          }
	        }
	        if (result.deleted) deleted = true;
	        pos = result.pos;
	      }

	      return new MapResult(pos, deleted);
	    }
	  }]);

	  return Remapping;
	}();

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canLift = canLift;
	exports.canWrap = canWrap;

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(23);

	var _step = __webpack_require__(24);

	var _tree = __webpack_require__(27);

	var _map = __webpack_require__(25);

	// !! **`ancestor`**
	//    : Change the stack of nodes that wrap the part of the document
	//      between `from` and `to`, which must point into the same parent
	//      node.
	//
	//      The set of ancestors to replace is determined by the `depth`
	//      property of the step's parameter. If this is greater than
	//      zero, `from` and `to` must point at the start and end of a
	//      stack of nodes, of that depth, since this step will not split
	//      nodes.
	//
	//      The set of new ancestors to wrap with is determined by the
	//      `types` and `attrs` properties of the parameter. The first
	//      should be an array of `NodeType`s, and the second, optionally,
	//      an array of attribute objects.

	_step.Step.define("ancestor", {
	  apply: function apply(doc, step) {
	    var from = step.from,
	        to = step.to;
	    if (!(0, _tree.isFlatRange)(from, to)) return null;
	    var toParent = from.path,
	        start = from.offset,
	        end = to.offset;
	    var _step$param = step.param;
	    var _step$param$depth = _step$param.depth;
	    var depth = _step$param$depth === undefined ? 0 : _step$param$depth;
	    var _step$param$types = _step$param.types;
	    var types = _step$param$types === undefined ? [] : _step$param$types;
	    var _step$param$attrs = _step$param.attrs;
	    var attrs = _step$param$attrs === undefined ? [] : _step$param$attrs;

	    var inner = doc.path(from.path);
	    for (var i = 0; i < depth; i++) {
	      if (start > 0 || end < doc.path(toParent).size || toParent.length == 0) return null;
	      start = toParent[toParent.length - 1];
	      end = start + 1;
	      toParent = toParent.slice(0, toParent.length - 1);
	    }
	    if (depth == 0 && types.length == 0) return null;

	    var parent = doc.path(toParent),
	        parentSize = parent.size,
	        newParent = undefined;
	    if (parent.type.locked) return null;
	    if (types.length) {
	      var _ret = function () {
	        var lastWrapper = types[types.length - 1];
	        var content = inner.content.slice(from.offset, to.offset);
	        if (!parent.type.canContainType(types[0]) || content.some(function (n) {
	          return !lastWrapper.canContain(n);
	        }) || !inner.size && !lastWrapper.canBeEmpty || lastWrapper.locked) return {
	            v: null
	          };
	        var node = null;
	        for (var i = types.length - 1; i >= 0; i--) {
	          node = types[i].create(attrs[i], node || content);
	        }newParent = parent.splice(start, end, _model.Fragment.from(node));
	      }();

	      if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	    } else {
	      if (!parent.type.canContainFragment(inner.content) || !inner.size && start == 0 && end == parent.size && !parent.type.canBeEmpty) return null;
	      newParent = parent.splice(start, end, inner.content);
	    }
	    var copy = doc.replaceDeep(toParent, newParent);

	    var toInner = toParent.slice();
	    for (var i = 0; i < types.length; i++) {
	      toInner.push(i ? 0 : start);
	    }var startOfInner = new _model.Pos(toInner, types.length ? 0 : start);
	    var replaced = null;
	    var insertedSize = types.length ? 1 : to.offset - from.offset;
	    if (depth != types.length || depth > 1 || types.length > 1) {
	      var posBefore = new _model.Pos(toParent, start);
	      var posAfter1 = new _model.Pos(toParent, end),
	          posAfter2 = new _model.Pos(toParent, start + insertedSize);
	      var endOfInner = new _model.Pos(toInner, startOfInner.offset + (to.offset - from.offset));
	      replaced = [new _map.ReplacedRange(posBefore, from, posBefore, startOfInner), new _map.ReplacedRange(to, posAfter1, endOfInner, posAfter2, posAfter1, posAfter2)];
	    }
	    var moved = [new _map.MovedRange(from, to.offset - from.offset, startOfInner)];
	    if (end - start != insertedSize) moved.push(new _map.MovedRange(new _model.Pos(toParent, end), parentSize - end, new _model.Pos(toParent, start + insertedSize)));
	    return new _step.StepResult(copy, new _map.PosMap(moved, replaced));
	  },
	  invert: function invert(step, oldDoc, map) {
	    var types = [],
	        attrs = [];
	    if (step.param.depth) for (var i = 0; i < step.param.depth; i++) {
	      var parent = oldDoc.path(step.from.path.slice(0, step.from.path.length - i));
	      types.unshift(parent.type);
	      attrs.unshift(parent.attrs);
	    }
	    var newFrom = map.map(step.from).pos;
	    var newTo = step.from.cmp(step.to) ? map.map(step.to, -1).pos : newFrom;
	    return new _step.Step("ancestor", newFrom, newTo, null, { depth: step.param.types ? step.param.types.length : 0,
	      types: types, attrs: attrs });
	  },
	  paramToJSON: function paramToJSON(param) {
	    return { depth: param.depth,
	      types: param.types && param.types.map(function (t) {
	        return t.name;
	      }),
	      attrs: param.attrs };
	  },
	  paramFromJSON: function paramFromJSON(schema, json) {
	    return { depth: json.depth,
	      types: json.types && json.types.map(function (n) {
	        return schema.nodeType(n);
	      }),
	      attrs: json.attrs };
	  }
	});

	function canBeLifted(doc, range) {
	  var content = [doc.path(range.from.path)],
	      unwrap = false;
	  for (;;) {
	    var parentDepth = -1;

	    var _loop = function _loop(_node, i) {
	      if (!content.some(function (inner) {
	        return !_node.type.canContainContent(inner.type);
	      })) parentDepth = i;
	      _node = _node.child(range.from.path[i]);
	      node = _node;
	    };

	    for (var node = doc, i = 0; i < range.from.path.length; i++) {
	      _loop(node, i);
	    }
	    if (parentDepth > -1) return { path: range.from.path.slice(0, parentDepth), unwrap: unwrap };
	    if (unwrap || !content[0].isBlock) return null;
	    content = content[0].content.slice(range.from.offset, range.to.offset);
	    unwrap = true;
	  }
	}

	// :: (Node, Pos, ?Pos) → bool
	// Tells you whether the given positions' [sibling
	// range](#Node.siblingRange), or any of its ancestor nodes, can be
	// lifted out of a parent.
	function canLift(doc, from, to) {
	  var range = doc.siblingRange(from, to || from);
	  var found = canBeLifted(doc, range);
	  if (found) return { found: found, range: range };
	}

	// :: (Pos, ?Pos) → Transform
	// Lift the nearest liftable ancestor of the [sibling
	// range](#Node.siblingRange) of the given positions out of its
	// parent (or do nothing if no such node exists).
	_transform.Transform.prototype.lift = function (from) {
	  var to = arguments.length <= 1 || arguments[1] === undefined ? from : arguments[1];

	  var can = canLift(this.doc, from, to);
	  if (!can) return this;
	  var found = can.found;
	  var range = can.range;

	  var depth = range.from.path.length - found.path.length;
	  var rangeNode = found.unwrap && this.doc.path(range.from.path);

	  for (var d = 0, pos = range.to;; d++) {
	    if (pos.offset < this.doc.path(pos.path).size) {
	      this.split(pos, depth - d);
	      break;
	    }
	    if (d == depth - 1) break;
	    pos = pos.shorten(null, 1);
	  }
	  for (var d = 0, pos = range.from;; d++) {
	    if (pos.offset > 0) {
	      this.split(pos, depth - d);
	      var cut = range.from.path.length - depth,
	          path = pos.path.slice(0, cut).concat(pos.path[cut] + 1);
	      while (path.length < range.from.path.length) {
	        path.push(0);
	      }range = { from: new _model.Pos(path, 0), to: new _model.Pos(path, range.to.offset - range.from.offset) };
	      break;
	    }
	    if (d == depth - 1) break;
	    pos = pos.shorten();
	  }
	  if (found.unwrap) {
	    for (var i = range.to.offset - 1; i > range.from.offset; i--) {
	      this.join(new _model.Pos(range.from.path, i));
	    }var size = 0;
	    for (var i = rangeNode.iter(range.from.offset, range.to.offset), child; child = i.next().value;) {
	      size += child.size;
	    }var path = range.from.path.concat(range.from.offset);
	    range = { from: new _model.Pos(path, 0), to: new _model.Pos(path, size) };
	    ++depth;
	  }
	  this.step("ancestor", range.from, range.to, null, { depth: depth });
	  return this;
	};

	// :: (Node, Pos, ?Pos, NodeType) → bool
	// Determines whether the [sibling range](#Node.siblingRange) of the
	// given positions can be wrapped in the given node type.
	function canWrap(doc, from, to, type) {
	  var range = doc.siblingRange(from, to || from);
	  if (range.from.offset == range.to.offset) return null;
	  var parent = doc.path(range.from.path);
	  var around = parent.type.findConnection(type);
	  var inside = type.findConnection(parent.child(range.from.offset).type);
	  if (around && inside) return { range: range, around: around, inside: inside };
	}

	// :: (Pos, ?Pos, NodeType, ?Object) → Transform
	// Wrap the [sibling range](#Node.siblingRange) of the given positions
	// in a node of the given type, with the given attributes (if
	// possible).
	_transform.Transform.prototype.wrap = function (from, to, type, wrapAttrs) {
	  var can = canWrap(this.doc, from, to, type);
	  if (!can) return this;
	  var range = can.range;
	  var around = can.around;
	  var inside = can.inside;

	  var types = around.concat(type).concat(inside);
	  var attrs = around.map(function () {
	    return null;
	  }).concat(wrapAttrs).concat(inside.map(function () {
	    return null;
	  }));
	  this.step("ancestor", range.from, range.to, null, { types: types, attrs: attrs });
	  if (inside.length) {
	    var toInner = range.from.path.slice();
	    for (var i = 0; i < around.length + inside.length + 1; i++) {
	      toInner.push(i ? 0 : range.from.offset);
	    }for (var i = range.to.offset - 1 - range.from.offset; i > 0; i--) {
	      this.split(new _model.Pos(toInner, i), inside.length);
	    }
	  }
	  return this;
	};

	// :: (Pos, ?Pos, NodeType, ?Object) → Transform
	// Set the type of all textblocks (partly) between `from` and `to` to
	// the given node type with the given attributes.
	_transform.Transform.prototype.setBlockType = function (from, to, type, attrs) {
	  var _this = this;

	  this.doc.nodesBetween(from, to || from, function (node, path) {
	    if (node.isTextblock && !node.hasMarkup(type, attrs)) {
	      path = path.slice();
	      // Ensure all markup that isn't allowed in the new node type is cleared
	      _this.clearMarkup(new _model.Pos(path, 0), new _model.Pos(path, node.size), type);
	      _this.step("ancestor", new _model.Pos(path, 0), new _model.Pos(path, _this.doc.path(path).size), null, { depth: 1, types: [type], attrs: [attrs] });
	      return false;
	    }
	  });
	  return this;
	};

	// :: (Pos, NodeType, ?Object) → Transform
	// Change the type and attributes of the node after `pos`.
	_transform.Transform.prototype.setNodeType = function (pos, type, attrs) {
	  var node = this.doc.nodeAfter(pos);
	  var path = pos.toPath();
	  this.step("ancestor", new _model.Pos(path, 0), new _model.Pos(path, node.size), null, { depth: 1, types: [type], attrs: [attrs] });
	  return this;
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.copyStructure = copyStructure;
	exports.copyInline = copyInline;
	exports.isFlatRange = isFlatRange;
	exports.replaceHasEffect = replaceHasEffect;
	exports.samePathDepth = samePathDepth;

	var _model = __webpack_require__(3);

	function copyStructure(node, from, to, f) {
	  var depth = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];

	  if (node.isTextblock) {
	    return f(node, from ? from.offset : 0, to ? to.offset : node.size);
	  } else {
	    if (!node.size) return node;
	    var start = from ? from.path[depth] : 0;
	    var end = to ? to.path[depth] + 1 : node.size;
	    var content = node.content.toArray(0, start);
	    for (var iter = node.iter(start, end), child; child = iter.next().value;) {
	      var passFrom = iter.offset - child.width == start ? from : null;
	      var passTo = iter.offset == end ? to : null;
	      content.push(copyStructure(child, passFrom, passTo, f, depth + 1));
	    }
	    return node.copy(_model.Fragment.fromArray(content.concat(node.content.toArray(end))));
	  }
	}

	function copyInline(node, from, to, f) {
	  return node.splice(from, to, node.content.slice(from, to).map(f));
	}

	function isFlatRange(from, to) {
	  if (from.path.length != to.path.length) return false;
	  for (var i = 0; i < from.path.length; i++) {
	    if (from.path[i] != to.path[i]) return false;
	  }return from.offset <= to.offset;
	}

	function canBeJoined(node, offset, depth) {
	  if (!depth || offset == 0 || offset == node.size) return false;
	  var left = node.child(offset - 1),
	      right = node.child(offset);
	  return left.sameMarkup(right);
	}

	function replaceHasEffect(doc, from, to) {
	  for (var depth = 0, node = doc;; depth++) {
	    var fromEnd = depth == from.depth,
	        toEnd = depth == to.depth;
	    if (fromEnd || toEnd || from.path[depth] != to.path[depth]) {
	      var gapStart = undefined,
	          gapEnd = undefined;
	      if (fromEnd) {
	        gapStart = from.offset;
	      } else {
	        gapStart = from.path[depth] + 1;
	        for (var i = depth + 1, n = node.child(gapStart - 1); i <= from.path.length; i++) {
	          if (i == from.path.length) {
	            if (from.offset < n.size) return true;
	          } else {
	            if (from.path[i] + 1 < n.size) return true;
	            n = n.child(from.path[i]);
	          }
	        }
	      }
	      if (toEnd) {
	        gapEnd = to.offset;
	      } else {
	        gapEnd = to.path[depth];
	        for (var i = depth + 1; i <= to.path.length; i++) {
	          if ((i == to.path.length ? to.offset : to.path[i]) > 0) return true;
	        }
	      }
	      if (gapStart != gapEnd) return true;
	      return canBeJoined(node, gapStart, Math.min(from.depth, to.depth) - depth);
	    } else {
	      node = node.child(from.path[depth]);
	    }
	  }
	}

	function samePathDepth(a, b) {
	  for (var i = 0;; i++) {
	    if (i == a.path.length || i == b.path.length || a.path[i] != b.path[i]) return i;
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.joinableBlocks = joinableBlocks;
	exports.joinPoint = joinPoint;

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(23);

	var _step = __webpack_require__(24);

	var _map = __webpack_require__(25);

	// !! **`join`**
	//   : Join two block elements together. `from` and `to` must point at
	//     the end of the first and start of the second element (so that
	//     the intention is preserved even when the positions are mapped).

	_step.Step.define("join", {
	  apply: function apply(doc, step) {
	    var before = doc.path(step.from.path);
	    var after = doc.path(step.to.path);
	    if (step.from.offset < before.size || step.to.offset > 0 || !before.type.canContainFragment(after.content)) return null;
	    var pFrom = step.from.path,
	        pTo = step.to.path;
	    var last = pFrom.length - 1,
	        offset = pFrom[last] + 1;
	    if (pFrom.length != pTo.length || pFrom.length == 0 || offset != pTo[last]) return null;
	    for (var i = 0; i < last; i++) {
	      if (pFrom[i] != pTo[i]) return null;
	    }var targetPath = pFrom.slice(0, last);
	    var target = doc.path(targetPath),
	        oldSize = target.size;
	    if (target.type.locked) return null;
	    var joined = before.append(after.content);
	    var copy = doc.replaceDeep(targetPath, target.splice(offset - 1, offset + 1, _model.Fragment.from(joined)));

	    var map = new _map.PosMap([new _map.MovedRange(step.to, after.size, step.from), new _map.MovedRange(new _model.Pos(targetPath, offset + 1), oldSize - offset - 1, new _model.Pos(targetPath, offset))], [new _map.ReplacedRange(step.from, step.to, step.from, step.from, step.to.shorten())]);
	    return new _step.StepResult(copy, map);
	  },
	  invert: function invert(step, oldDoc) {
	    return new _step.Step("split", null, null, step.from, oldDoc.path(step.to.path).copy());
	  }
	});

	// :: (Node, Pos) → bool
	// Test whether the blocks before and after a given position can be
	// joined.
	function joinableBlocks(doc, pos) {
	  if (pos.offset == 0) return false;
	  var parent = doc.path(pos.path);
	  if (parent.isTextblock || pos.offset == parent.size) return false;
	  var type = parent.child(pos.offset - 1).type;
	  return !type.isTextblock && type.contains && type == parent.child(pos.offset).type;
	}

	// :: (Node, Pos, ?number) → ?Pos
	// Find an ancestor of the given position that can be joined to the
	// block before (or after if `dir` is positive). Returns the joinable
	// point, if any.
	function joinPoint(doc, pos) {
	  var dir = arguments.length <= 2 || arguments[2] === undefined ? -1 : arguments[2];

	  for (;;) {
	    if (joinableBlocks(doc, pos)) return pos;
	    if (pos.depth == 0) return null;
	    pos = pos.shorten(null, dir < 0 ? 0 : 1);
	  }
	}

	// :: (Pos) → Transform
	// Join the blocks around the given position.
	_transform.Transform.prototype.join = function (at) {
	  var parent = this.doc.path(at.path);
	  if (at.offset == 0 || at.offset == parent.size || parent.isTextblock) return this;
	  this.step("join", new _model.Pos(at.path.concat(at.offset - 1), parent.child(at.offset - 1).size), new _model.Pos(at.path.concat(at.offset), 0));
	  return this;
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(23);

	var _step = __webpack_require__(24);

	var _tree = __webpack_require__(27);

	// !!
	// **`addMark`**
	//   : Add the `Mark` given as the step's parameter to all
	//     inline content between `from` and `to` (when allowed).
	//
	// **`removeMark`**
	//   : Remove the `Mark` given as the step's parameter from all inline
	//     content between `from` and `to`.

	_step.Step.define("addMark", {
	  apply: function apply(doc, step) {
	    return new _step.StepResult((0, _tree.copyStructure)(doc, step.from, step.to, function (node, from, to) {
	      if (!node.type.canContainMark(step.param)) return node;
	      return (0, _tree.copyInline)(node, from, to, function (node) {
	        return node.mark(step.param.addToSet(node.marks));
	      });
	    }));
	  },
	  invert: function invert(step, _oldDoc, map) {
	    return new _step.Step("removeMark", step.from, map.map(step.to).pos, null, step.param);
	  },
	  paramToJSON: function paramToJSON(param) {
	    return param.toJSON();
	  },
	  paramFromJSON: function paramFromJSON(schema, json) {
	    return schema.markFromJSON(json);
	  }
	});

	// :: (Pos, Pos, Mark) → Transform
	// Add the given mark to the inline content between `from` and `to`.
	_transform.Transform.prototype.addMark = function (from, to, mark) {
	  var _this = this;

	  var removed = [],
	      added = [],
	      removing = null,
	      adding = null;
	  this.doc.inlineNodesBetween(from, to, function (_ref, path, start, end, parent) {
	    var marks = _ref.marks;

	    if (mark.isInSet(marks) || !parent.type.canContainMark(mark.type)) {
	      adding = removing = null;
	    } else {
	      var rm = mark.type.isInSet(marks);
	      if (rm) {
	        if (removing && removing.param.eq(rm)) {
	          removing.to = new _model.Pos(path, end);
	        } else {
	          removing = new _step.Step("removeMark", new _model.Pos(path, start), new _model.Pos(path, end), null, rm);
	          removed.push(removing);
	        }
	      } else if (removing) {
	        removing = null;
	      }
	      if (adding) {
	        adding.to = new _model.Pos(path, end);
	      } else {
	        adding = new _step.Step("addMark", new _model.Pos(path, start), new _model.Pos(path, end), null, mark);
	        added.push(adding);
	      }
	    }
	  });
	  removed.forEach(function (s) {
	    return _this.step(s);
	  });
	  added.forEach(function (s) {
	    return _this.step(s);
	  });
	  return this;
	};

	_step.Step.define("removeMark", {
	  apply: function apply(doc, step) {
	    return new _step.StepResult((0, _tree.copyStructure)(doc, step.from, step.to, function (node, from, to) {
	      return (0, _tree.copyInline)(node, from, to, function (node) {
	        return node.mark(step.param.removeFromSet(node.marks));
	      });
	    }));
	  },
	  invert: function invert(step, _oldDoc, map) {
	    return new _step.Step("addMark", step.from, map.map(step.to).pos, null, step.param);
	  },
	  paramToJSON: function paramToJSON(param) {
	    return param.toJSON();
	  },
	  paramFromJSON: function paramFromJSON(schema, json) {
	    return schema.markFromJSON(json);
	  }
	});

	// :: (Pos, Pos, union<Mark, MarkType>) → Transform
	// Remove the given mark, or all marks of the given type, from inline
	// nodes between `from` and `to`.
	_transform.Transform.prototype.removeMark = function (from, to) {
	  var _this2 = this;

	  var mark = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var matched = [],
	      step = 0;
	  this.doc.inlineNodesBetween(from, to, function (_ref2, path, start, end) {
	    var marks = _ref2.marks;

	    step++;
	    var toRemove = null;
	    if (mark instanceof _model.MarkType) {
	      var found = mark.isInSet(marks);
	      if (found) toRemove = [found];
	    } else if (mark) {
	      if (mark.isInSet(marks)) toRemove = [mark];
	    } else {
	      toRemove = marks;
	    }
	    if (toRemove && toRemove.length) {
	      path = path.slice();
	      for (var i = 0; i < toRemove.length; i++) {
	        var rm = toRemove[i],
	            found = undefined;
	        for (var j = 0; j < matched.length; j++) {
	          var m = matched[j];
	          if (m.step == step - 1 && rm.eq(matched[j].style)) found = m;
	        }
	        if (found) {
	          found.to = new _model.Pos(path, end);
	          found.step = step;
	        } else {
	          matched.push({ style: rm, from: new _model.Pos(path, start), to: new _model.Pos(path, end), step: step });
	        }
	      }
	    }
	  });
	  matched.forEach(function (m) {
	    return _this2.step("removeMark", m.from, m.to, null, m.style);
	  });
	  return this;
	};

	// :: (Pos, Pos, ?NodeType) → Transform
	// Remove all marks and non-text inline nodes, or if `newParent` is
	// given, all marks and inline nodes that may not appear as content of
	// `newParent`, from the given range.
	_transform.Transform.prototype.clearMarkup = function (from, to, newParent) {
	  var _this3 = this;

	  var delSteps = []; // Must be accumulated and applied in inverse order
	  this.doc.inlineNodesBetween(from, to, function (_ref3, path, start, end) {
	    var marks = _ref3.marks;
	    var type = _ref3.type;

	    if (newParent ? !newParent.canContainType(type) : !type.isText) {
	      path = path.slice();
	      var _from = new _model.Pos(path, start);
	      delSteps.push(new _step.Step("replace", _from, new _model.Pos(path, end), _from));
	      return;
	    }
	    for (var i = 0; i < marks.length; i++) {
	      var mark = marks[i];
	      if (!newParent || !newParent.canContainMark(mark.type)) {
	        path = path.slice();
	        _this3.step("removeMark", new _model.Pos(path, start), new _model.Pos(path, end), null, mark);
	      }
	    }
	  });
	  for (var i = delSteps.length - 1; i >= 0; i--) {
	    this.step(delSteps[i]);
	  }return this;
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(23);

	var _step = __webpack_require__(24);

	var _map = __webpack_require__(25);

	// !! **`split`**
	//   : Split a block node at `pos`. The parameter, if given, may be
	//     `{type, ?attrs}` object giving the node type and optionally the
	//     attributes of the node created to hold the content after the
	//     split.

	_step.Step.define("split", {
	  apply: function apply(doc, step) {
	    var pos = step.pos;
	    if (pos.depth == 0) return null;

	    var _pos$shorten = pos.shorten();

	    var parentPath = _pos$shorten.path;
	    var offset = _pos$shorten.offset;

	    var parent = doc.path(parentPath);
	    var target = parent.child(offset),
	        targetSize = target.size;

	    var _ref = step.param || target;

	    var typeAfter = _ref.type;
	    var attrsAfter = _ref.attrs;

	    var splitAt = pos.offset;
	    if (splitAt == 0 && !target.type.canBeEmpty || target.type.locked || splitAt == target.size && !typeAfter.canBeEmpty) return null;
	    var newParent = parent.splice(offset, offset + 1, _model.Fragment.from([target.slice(0, splitAt), typeAfter.create(attrsAfter, target.content.slice(splitAt))]));
	    var copy = doc.replaceDeep(parentPath, newParent);

	    var dest = new _model.Pos(parentPath.concat(offset + 1), 0);
	    var map = new _map.PosMap([new _map.MovedRange(pos, targetSize - pos.offset, dest), new _map.MovedRange(new _model.Pos(parentPath, offset + 1), newParent.size - 2 - offset, new _model.Pos(parentPath, offset + 2))], [new _map.ReplacedRange(pos, pos, pos, dest, pos, pos.shorten(null, 1))]);
	    return new _step.StepResult(copy, map);
	  },
	  invert: function invert(step, _oldDoc, map) {
	    return new _step.Step("join", step.pos, map.map(step.pos).pos);
	  },
	  paramToJSON: function paramToJSON(param) {
	    return param && { type: param.type.name, attrs: param.attrs };
	  },
	  paramFromJSON: function paramFromJSON(schema, json) {
	    return json && { type: schema.nodeType(json.type), attrs: json.attrs };
	  }
	});

	// :: (Pos, ?number, ?NodeType, ?Object) → Transform
	// Split the node at the given position, and optionally, if `depth` is
	// greater than one, any number of nodes above that. By default, the part
	// split off will inherit the node type of the original node. This can
	// be changed by passing `typeAfter` and `attrsAfter`.
	_transform.Transform.prototype.split = function (pos) {
	  var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
	  var typeAfter = arguments[2];
	  var attrsAfter = arguments[3];

	  if (depth == 0) return this;
	  for (var i = 0;; i++) {
	    this.step("split", null, null, pos, typeAfter && { type: typeAfter, attrs: attrsAfter });
	    if (i == depth - 1) return this;
	    typeAfter = null;
	    pos = pos.shorten(null, 1);
	  }
	};

	// :: (Pos, ?number) → Transform
	// Split at the given position, _if_ that position isn't already at
	// the start or end of a node. If `depth` is greater than one, also do
	// so for parent positions above the given position.
	_transform.Transform.prototype.splitIfNeeded = function (pos) {
	  var depth = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

	  for (var off = 0; off < depth; off++) {
	    var here = pos.shorten(pos.depth - off);
	    if (here.offset && here.offset < this.doc.path(here.path).size) this.step("split", null, null, here);
	  }
	  return this;
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.replace = replace;

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(23);

	var _step = __webpack_require__(24);

	var _map = __webpack_require__(25);

	var _tree = __webpack_require__(27);

	// !! **`replace`**
	//   : Delete the part of the document between `from` and `to` and
	//     optionally replace it with another chunk of content. `pos` must
	//     point at the ‘root’ at which the cut starts—a position between
	//     and above `from` and `to`.
	//
	//     When new content is to be inserted, the step's parameter should
	//     be an object of shape `{content: `[`Fragment`](#Fragment)`,
	//     openLeft: number, openRight: number}`. The step will insert the
	//     given content at the root of the cut, and `openLeft` and
	//     `openRight` indicate how much of the content on both sides
	//     should be consided ‘open’.
	//
	//     A replace step will try to join open nodes on both sides of the
	//     cut. That is, nodes in the original document that are partially
	//     cut off by `from` and `to`, and nodes at the sides of the
	//     replacement content as specificed by `openLeft` and
	//     `openRight`. For example, if `openLeft` is 2, the first node of
	//     the replacement content as well as its first child is
	//     considered open. Whenever two open nodes with the same
	//     [markup](#Node.sameMarkup) end up next to each other, they are
	//     joined. Open nodes that aren't joined are [closed](#Node.close)
	//     to ensure their content (or lack of it) is valid.

	function findMovedChunks(oldNode, oldPath, newNode, startDepth) {
	  var moved = [];
	  var newPath = oldPath.path.slice(0, startDepth);

	  for (var depth = startDepth;; depth++) {
	    var joined = depth == oldPath.depth ? 0 : 1;
	    var cut = depth == oldPath.depth ? oldPath.offset : oldPath.path[depth];
	    var afterCut = oldNode.size - cut;
	    var newOffset = newNode.size - afterCut;

	    var from = oldPath.shorten(depth, joined);
	    var to = new _model.Pos(newPath, newOffset + joined);
	    if (from.cmp(to)) moved.push(new _map.MovedRange(from, afterCut - joined, to));

	    if (!joined) return moved;

	    oldNode = oldNode.child(cut);
	    newNode = newNode.child(newOffset);
	    newPath = newPath.concat(newOffset);
	  }
	}

	function replace(node, from, to, root, repl) {
	  var depth = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];

	  if (depth == root.length) {
	    var before = node.sliceBetween(null, from, depth);
	    var after = node.sliceBetween(to, null, depth),
	        result = undefined;
	    if (!before.type.canContainFragment(repl.content)) return null;
	    if (repl.content.size) result = before.append(repl.content, from.depth - depth, repl.openLeft).append(after.content, repl.openRight, to.depth - depth);else result = before.append(after.content, from.depth - depth, to.depth - depth);
	    if (!result.size && !result.type.canBeEmpty) result = result.copy(result.type.defaultContent());
	    return { doc: result, moved: findMovedChunks(node, to, result, depth) };
	  } else {
	    var pos = root[depth];
	    var result = replace(node.child(pos), from, to, root, repl, depth + 1);
	    if (!result) return null;
	    return { doc: node.replace(pos, result.doc), moved: result.moved };
	  }
	}

	var nullRepl = { content: _model.emptyFragment, openLeft: 0, openRight: 0 };

	_step.Step.define("replace", {
	  apply: function apply(doc, step) {
	    var rootPos = step.pos,
	        root = rootPos.path;
	    if (step.from.depth < root.length || step.to.depth < root.length) return null;
	    for (var i = 0; i < root.length; i++) {
	      if (step.from.path[i] != root[i] || step.to.path[i] != root[i]) return null;
	    }var result = replace(doc, step.from, step.to, rootPos.path, step.param || nullRepl);
	    if (!result) return null;
	    var out = result.doc;
	    var moved = result.moved;

	    var end = moved.length ? moved[moved.length - 1].dest : step.to;
	    var replaced = new _map.ReplacedRange(step.from, step.to, step.from, end, rootPos, rootPos);
	    return new _step.StepResult(out, new _map.PosMap(moved, [replaced]));
	  },
	  invert: function invert(step, oldDoc, map) {
	    var depth = step.pos.depth;
	    return new _step.Step("replace", step.from, map.map(step.to).pos, step.from.shorten(depth), {
	      content: oldDoc.path(step.pos.path).content.sliceBetween(step.from, step.to, depth),
	      openLeft: step.from.depth - depth,
	      openRight: step.to.depth - depth
	    });
	  },
	  paramToJSON: function paramToJSON(param) {
	    return param && { content: param.content.size && param.content.toJSON(),
	      openLeft: param.openLeft, openRight: param.openRight };
	  },
	  paramFromJSON: function paramFromJSON(schema, json) {
	    return json && { content: _model.Fragment.fromJSON(schema, json.content),
	      openLeft: json.openLeft, openRight: json.openRight };
	  }
	});

	function shiftFromStack(stack, depth) {
	  var shifted = stack[depth] = stack[depth].splice(0, 1, _model.emptyFragment);
	  for (var i = depth - 1; i >= 0; i--) {
	    shifted = stack[i] = stack[i].replace(0, shifted);
	  }
	}

	// FIXME find a not so horribly confusing way to express this
	function buildInserted(nodesLeft, source, start, end) {
	  var sliced = source.sliceBetween(start, end);
	  var nodesRight = [];
	  for (var node = sliced, i = 0; i <= start.path.length; i++, node = node.firstChild) {
	    nodesRight.push(node);
	  }var same = (0, _tree.samePathDepth)(start, end);
	  var searchLeft = nodesLeft.length - 1,
	      searchRight = nodesRight.length - 1;
	  var result = null;

	  var inner = nodesRight[searchRight];
	  if (inner.isTextblock && inner.size && nodesLeft[searchLeft].isTextblock) {
	    result = nodesLeft[searchLeft--].copy(inner.content);
	    --searchRight;
	    shiftFromStack(nodesRight, searchRight);
	  }

	  for (;;) {
	    var node = nodesRight[searchRight],
	        type = node.type,
	        matched = null;
	    var outside = searchRight <= same;
	    for (var i = searchLeft; i >= 0; i--) {
	      var left = nodesLeft[i];
	      if (outside ? left.type.canContainContent(node.type) : left.type == type) {
	        matched = i;
	        break;
	      }
	    }
	    if (matched != null) {
	      if (!result) {
	        result = nodesLeft[matched].copy(node.content);
	        searchLeft = matched - 1;
	      } else {
	        while (searchLeft >= matched) {
	          var wrap = nodesLeft[searchLeft];
	          var content = _model.Fragment.from(result);
	          result = wrap.copy(searchLeft == matched ? content.append(node.content) : content);
	          searchLeft--;
	        }
	      }
	    }
	    if (matched != null || node.size == 0) {
	      if (outside) break;
	      if (searchRight) shiftFromStack(nodesRight, searchRight - 1);
	    }
	    searchRight--;
	  }

	  var repl = { content: result ? result.content : _model.emptyFragment,
	    openLeft: start.depth - searchRight,
	    openRight: end.depth - searchRight };
	  return { repl: repl, depth: searchLeft + 1 };
	}

	function moveText(tr, doc, before, after) {
	  var root = (0, _tree.samePathDepth)(before, after);
	  var cutAt = after.shorten(null, 1);
	  while (cutAt.path.length > root && doc.path(cutAt.path).size == 1) {
	    cutAt = cutAt.shorten(null, 1);
	  }tr.split(cutAt, cutAt.path.length - root);
	  var start = after,
	      end = new _model.Pos(start.path, doc.path(start.path).size);
	  var parent = doc.path(start.path.slice(0, root));
	  var wanted = parent.pathNodes(before.path.slice(root));
	  var existing = parent.pathNodes(start.path.slice(root));
	  while (wanted.length && existing.length && wanted[0].sameMarkup(existing[0])) {
	    wanted.shift();
	    existing.shift();
	  }
	  if (existing.length || wanted.length) tr.step("ancestor", start, end, null, {
	    depth: existing.length,
	    types: wanted.map(function (n) {
	      return n.type;
	    }),
	    attrs: wanted.map(function (n) {
	      return n.attrs;
	    })
	  });
	  for (var i = root; i < before.path.length; i++) {
	    tr.join(before.shorten(i, 1));
	  }
	}

	// :: (Pos, Pos) → Transform
	// Delete the content between the given positions.
	_transform.Transform.prototype.delete = function (from, to) {
	  if (from.cmp(to)) this.replace(from, to);
	  return this;
	};

	// :: (Pos, Pos, Node, Pos, Pos) → Transform
	// Replace the part of the document between `from` and `to` with the
	// part of the `source` between `start` and `end`.
	_transform.Transform.prototype.replace = function (from, to, source, start, end) {
	  var repl = undefined,
	      depth = undefined,
	      doc = this.doc,
	      maxDepth = (0, _tree.samePathDepth)(from, to);
	  if (source) {
	    ;
	    var _buildInserted = buildInserted(doc.pathNodes(from.path), source, start, end);

	    repl = _buildInserted.repl;
	    depth = _buildInserted.depth;

	    while (depth > maxDepth) {
	      if (repl.content.size) repl = { content: _model.Fragment.from(doc.path(from.path.slice(0, depth)).copy(repl.content)),
	        openLeft: repl.openLeft + 1, openRight: repl.openRight + 1 };
	      depth--;
	    }
	  } else {
	    repl = nullRepl;
	    depth = maxDepth;
	  }
	  var root = from.shorten(depth),
	      docAfter = doc,
	      after = to;
	  if (repl.content.size || (0, _tree.replaceHasEffect)(doc, from, to)) {
	    var result = this.step("replace", from, to, root, repl);
	    docAfter = result.doc;
	    after = result.map.map(to).pos;
	  }

	  // If no text nodes before or after end of replacement, don't glue text
	  if (!doc.path(to.path).isTextblock) return this;
	  if (!(repl.content.size ? source.path(end.path).isTextblock : doc.path(from.path).isTextblock)) return this;

	  var nodesAfter = doc.path(root.path).pathNodes(to.path.slice(depth)).slice(1);
	  var nodesBefore = undefined;
	  if (repl.content.size) {
	    var inserted = repl.content;
	    nodesBefore = [];
	    for (var i = 0; i < repl.openRight; i++) {
	      var last = inserted.child(inserted.size - 1);
	      nodesBefore.push(last);
	      inserted = last.content;
	    }
	  } else {
	    nodesBefore = doc.path(root.path).pathNodes(from.path.slice(depth)).slice(1);
	  }

	  if (nodesBefore.length && (nodesAfter.length != nodesBefore.length || !nodesAfter.every(function (n, i) {
	    return n.sameMarkup(nodesBefore[i]);
	  }))) {
	    var _after$shorten = after.shorten(root.depth);

	    var path = _after$shorten.path;
	    var offset = _after$shorten.offset;var before = undefined;
	    for (var node = docAfter.path(path), i = 0;; i++) {
	      if (i == nodesBefore.length) {
	        before = new _model.Pos(path, offset);
	        break;
	      }
	      path.push(offset - 1);
	      node = node.child(offset - 1);
	      offset = node.size;
	    }
	    moveText(this, docAfter, before, after);
	  }
	  return this;
	};

	// :: (Pos, Pos, union<Fragment, Node, [Node]>) → Transform
	// Replace the given range with the given content, which may be a
	// fragment, node, or array of nodes.
	_transform.Transform.prototype.replaceWith = function (from, to, content) {
	  if (!(content instanceof _model.Fragment)) content = _model.Fragment.from(content);
	  if (_model.Pos.samePath(from.path, to.path)) this.step("replace", from, to, from, { content: content, openLeft: 0, openRight: 0 });else this.delete(from, to).step("replace", from, from, from, { content: content, openLeft: 0, openRight: 0 });
	  return this;
	};

	// :: (Pos, union<Fragment, Node, [Node]>) → Transform
	// Insert the given content at the `pos`.
	_transform.Transform.prototype.insert = function (pos, content) {
	  return this.replaceWith(pos, pos, content);
	};

	// :: (Pos, string) → Transform
	// Insert the given text at `pos`, inheriting the marks of the
	// existing content at that position.
	_transform.Transform.prototype.insertText = function (pos, text) {
	  return this.insert(pos, this.doc.type.schema.text(text, this.doc.marksAt(pos)));
	};

	// :: (Pos, Node) → Transform
	// Insert the given node at `pos`, inheriting the marks of the
	// existing content at that position.
	_transform.Transform.prototype.insertInline = function (pos, node) {
	  return this.insert(pos, node.mark(this.doc.marksAt(pos)));
	};

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = sortedInsert;
	function sortedInsert(array, elt, compare) {
	  var i = 0;
	  for (; i < array.length; i++) {
	    if (compare(array[i], elt) > 0) break;
	  }array.splice(i, 0, elt);
	}

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Map = exports.Map = window.Map || function () {
	  function _class() {
	    _classCallCheck(this, _class);

	    this.content = [];
	  }

	  _createClass(_class, [{
	    key: "set",
	    value: function set(key, value) {
	      var found = this.find(key);
	      if (found > -1) this.content[found + 1] = value;else this.content.push(key, value);
	    }
	  }, {
	    key: "get",
	    value: function get(key) {
	      var found = this.find(key);
	      return found == -1 ? undefined : this.content[found + 1];
	    }
	  }, {
	    key: "has",
	    value: function has(key) {
	      return this.find(key) > -1;
	    }
	  }, {
	    key: "find",
	    value: function find(key) {
	      for (var i = 0; i < this.content.length; i += 2) {
	        if (this.content[i] === key) return i;
	      }
	    }
	  }, {
	    key: "clear",
	    value: function clear() {
	      this.content.length = 0;
	    }
	  }, {
	    key: "size",
	    get: function get() {
	      return this.content.length / 2;
	    }
	  }]);

	  return _class;
	}();

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.eventMixin = eventMixin;
	// ;; #path=EventMixin #kind=interface
	// A set of methods for objects that emit events. Added by calling
	// `eventMixin` on a constructor.

	var methods = {
	  // :: (type: string, handler: (...args: [any])) #path=EventMixin.on
	  // Register an event handler for the given event type.

	  on: function on(type, handler) {
	    var map = this._handlers || (this._handlers = {});
	    var arr = map[type] || (map[type] = []);
	    arr.push(handler);
	  },

	  // :: (type: string, handler: (...args: [any])) #path=EventMixin.off
	  // Unregister an event handler for the given event type.
	  off: function off(type, handler) {
	    var arr = this._handlers && this._handlers[type];
	    if (arr) for (var i = 0; i < arr.length; ++i) {
	      if (arr[i] == handler) {
	        arr.splice(i, 1);break;
	      }
	    }
	  },

	  // :: (type: string, ...args: [any]) #path=EventMixin.signal
	  // Signal an event of the given type, passing any number of
	  // arguments. Will call the handlers for the event, passing them the
	  // arguments.
	  signal: function signal(type) {
	    var arr = this._handlers && this._handlers[type];

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    if (arr) for (var i = 0; i < arr.length; ++i) {
	      arr[i].apply(arr, args);
	    }
	  },

	  // :: (type: string, ...args: [any]) #path=EventMixin.signalHandleable
	  // Signal a handleable event of the given type. All handlers for the
	  // event will be called with the given arguments, until one of them
	  // returns something that is not the value `false`. When that
	  // happens, the return value of that handler is returned. If that
	  // does not happen, `false` is returned.
	  signalHandleable: function signalHandleable(type) {
	    var arr = this._handlers && this._handlers[type];
	    if (arr) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      for (var i = 0; i < arr.length; ++i) {
	        var result = arr[i].apply(arr, args);
	        if (result !== false) return result;
	      }
	    }return false;
	  },

	  // :: (type: string, value: any)
	  // Give all handlers for an event a chance to transform a value. The
	  // value returned from a handler will be passed to the next handler.
	  // The method returns the value returned by the final handler (or
	  // the original value, if there are no handlers).
	  signalPipelined: function signalPipelined(type, value) {
	    var arr = this._handlers && this._handlers[type];
	    if (arr) for (var i = 0; i < arr.length; ++i) {
	      value = arr[i](value);
	    }return value;
	  },

	  // :: (type: string) → bool #path=EventMixin.hasHandler
	  // Query whether there are any handlers for this event type.
	  hasHandler: function hasHandler(type) {
	    var arr = this._handlers && this._handlers[type];
	    return arr && arr.length > 0;
	  }
	};

	// :: (())
	// Add the methods in the `EventMixin` interface to the prototype
	// object of the given constructor.
	function eventMixin(ctor) {
	  var proto = ctor.prototype;
	  for (var prop in methods) {
	    if (methods.hasOwnProperty(prop)) proto[prop] = methods[prop];
	  }
	}

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _register = __webpack_require__(36);

	Object.defineProperty(exports, "serializeTo", {
	  enumerable: true,
	  get: function get() {
	    return _register.serializeTo;
	  }
	});
	Object.defineProperty(exports, "knownTarget", {
	  enumerable: true,
	  get: function get() {
	    return _register.knownTarget;
	  }
	});
	Object.defineProperty(exports, "defineTarget", {
	  enumerable: true,
	  get: function get() {
	    return _register.defineTarget;
	  }
	});
	Object.defineProperty(exports, "parseFrom", {
	  enumerable: true,
	  get: function get() {
	    return _register.parseFrom;
	  }
	});
	Object.defineProperty(exports, "knownSource", {
	  enumerable: true,
	  get: function get() {
	    return _register.knownSource;
	  }
	});
	Object.defineProperty(exports, "defineSource", {
	  enumerable: true,
	  get: function get() {
	    return _register.defineSource;
	  }
	});

	var _from_dom = __webpack_require__(37);

	Object.defineProperty(exports, "fromDOM", {
	  enumerable: true,
	  get: function get() {
	    return _from_dom.fromDOM;
	  }
	});
	Object.defineProperty(exports, "fromHTML", {
	  enumerable: true,
	  get: function get() {
	    return _from_dom.fromHTML;
	  }
	});

	var _to_dom = __webpack_require__(38);

	Object.defineProperty(exports, "toDOM", {
	  enumerable: true,
	  get: function get() {
	    return _to_dom.toDOM;
	  }
	});
	Object.defineProperty(exports, "toHTML", {
	  enumerable: true,
	  get: function get() {
	    return _to_dom.toHTML;
	  }
	});
	Object.defineProperty(exports, "nodeToDOM", {
	  enumerable: true,
	  get: function get() {
	    return _to_dom.nodeToDOM;
	  }
	});

	var _from_text = __webpack_require__(39);

	Object.defineProperty(exports, "fromText", {
	  enumerable: true,
	  get: function get() {
	    return _from_text.fromText;
	  }
	});

	var _to_text = __webpack_require__(40);

	Object.defineProperty(exports, "toText", {
	  enumerable: true,
	  get: function get() {
	    return _to_text.toText;
	  }
	});

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.serializeTo = serializeTo;
	exports.knownTarget = knownTarget;
	exports.defineTarget = defineTarget;
	exports.parseFrom = parseFrom;
	exports.knownSource = knownSource;
	exports.defineSource = defineSource;

	var _error = __webpack_require__(7);

	var serializers = Object.create(null);

	// :: (Node, string, ?Object) → any
	// Serialize the given document to the given format. If `options` is
	// given, it will be passed along to the serializer function.
	function serializeTo(doc, format, options) {
	  var converter = serializers[format];
	  if (!converter) _error.NamespaceError.raise("Target format " + format + " not defined");
	  return converter(doc, options);
	}

	// :: (string) → bool
	// Query whether a given serialization format has been registered.
	function knownTarget(format) {
	  return !!serializers[format];
	}

	// :: (string, (Node, ?Object) → any)
	// Register a function as the serializer for `format`.
	function defineTarget(format, func) {
	  serializers[format] = func;
	}

	defineTarget("json", function (doc) {
	  return doc.toJSON();
	});

	var parsers = Object.create(null);

	// :: (Schema, any, string, ?Object) → Node
	// Parse document `value` from the format named by `format`. If
	// `options` is given, it is passed along to the parser function.
	function parseFrom(schema, value, format, options) {
	  var converter = parsers[format];
	  if (!converter) _error.NamespaceError.raise("Source format " + format + " not defined");
	  return converter(schema, value, options);
	}

	// :: (string) → bool
	// Query whether a parser for the named format has been registered.
	function knownSource(format) {
	  return !!parsers[format];
	}

	// :: (string, (Schema, any, ?Object) → Node)
	// Register a parser function for `format`.
	function defineSource(format, func) {
	  parsers[format] = func;
	}

	defineSource("json", function (schema, json) {
	  return schema.nodeFromJSON(json);
	});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromDOM = fromDOM;
	exports.fromHTML = fromHTML;

	var _model = __webpack_require__(3);

	var _sortedinsert = __webpack_require__(32);

	var _sortedinsert2 = _interopRequireDefault(_sortedinsert);

	var _register = __webpack_require__(36);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// :: (Schema, DOMNode, ?Object) → Node
	// Parse document from the content of a DOM node. To pass an explicit
	// parent document (for example, when not in a browser window
	// environment, where we simply use the global document), pass it as
	// the `document` property of `options`.
	function fromDOM(schema, dom, options) {
	  if (!options) options = {};
	  var context = new DOMParseState(schema, options.topNode || schema.node("doc"), options);
	  var start = options.from ? dom.childNodes[options.from] : dom.firstChild;
	  var end = options.to != null && dom.childNodes[options.to] || null;
	  context.addAll(start, end, true);
	  var doc = undefined;
	  while (context.stack.length) {
	    doc = context.leave();
	  }return doc;
	}

	// ;; #path=DOMParseSpec #kind=interface
	// To define the way [node](#NodeType) and [mark](#MarkType) types are
	// parsed, you can associate one or more DOM parsing specifications to
	// them using the [`register`](#SchemaItem.register) method with the
	// `"parseDOM"` namespace, using the HTML node name (lowercase) as
	// value name. Each of them defines a parsing strategy for a certain
	// type of DOM node. When `"_"` is used as name, the parser is
	// activated for all nodes.

	// :: ?number #path=DOMParseSpec.rank
	// The precedence of this parsing strategy. Should be a number between
	// 0 and 100, which determines when this parser gets a chance relative
	// to others that apply to the node (low ranks go first). Defaults to
	// 50.

	// :: union<string, (dom: DOMNode, state: DOMParseState) → ?bool> #path=DOMParseSpec.parse
	// The function that, given a DOM node, parses it, updating the parse
	// state. It should return (the exact value) `false` when it wants to
	// indicate that it was not able to parse this node. This function is
	// called in such a way that `this` is bound to the type that the
	// parse spec was associated with.
	//
	// When this is set to the string `"block"`, the content of the DOM
	// node is parsed as the content in a node of the type that this spec
	// was associated with.
	//
	// When set to the string `"mark"`, the content of the DOM node is
	// parsed with an instance of the mark that this spec was associated
	// with added to their marks.

	(0, _register.defineSource)("dom", fromDOM);

	// :: (Schema, string, ?Object) → Node
	// Parses the HTML into a DOM, and then calls through to `fromDOM`.
	function fromHTML(schema, html, options) {
	  var wrap = (options && options.document || window.document).createElement("div");
	  wrap.innerHTML = html;
	  return fromDOM(schema, wrap, options);
	}

	(0, _register.defineSource)("html", fromHTML);

	var blockElements = {
	  address: true, article: true, aside: true, blockquote: true, canvas: true,
	  dd: true, div: true, dl: true, fieldset: true, figcaption: true, figure: true,
	  footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true,
	  h6: true, header: true, hgroup: true, hr: true, li: true, noscript: true, ol: true,
	  output: true, p: true, pre: true, section: true, table: true, tfoot: true, ul: true
	};

	var ignoreElements = {
	  head: true, noscript: true, object: true, script: true, style: true, title: true
	};

	var noMarks = [];

	// ;; A state object used to track context during a parse,
	// and to expose methods to custom parsing functions.

	var DOMParseState = function () {
	  function DOMParseState(schema, topNode, options) {
	    _classCallCheck(this, DOMParseState);

	    // :: Object The options passed to this parse.
	    this.options = options || {};
	    // :: Schema The schema that we are parsing into.
	    this.schema = schema;
	    this.stack = [];
	    this.marks = noMarks;
	    this.closing = false;
	    this.enter(topNode.type, topNode.attrs);
	    var info = schemaInfo(schema);
	    this.tagInfo = info.tags;
	    this.styleInfo = info.styles;
	  }

	  _createClass(DOMParseState, [{
	    key: "addDOM",
	    value: function addDOM(dom) {
	      if (dom.nodeType == 3) {
	        var value = dom.nodeValue;
	        var top = this.top,
	            last = undefined;
	        if (/\S/.test(value) || top.type.isTextblock) {
	          value = value.replace(/\s+/g, " ");
	          // If this starts with whitespace, and there is either no node
	          // before it or a node that ends with whitespace, strip the
	          // leading space.
	          if (/^\s/.test(value) && (!(last = top.content[top.content.length - 1]) || last.type.name == "text" && /\s$/.test(last.text))) value = value.slice(1);
	          if (value) this.insertNode(this.schema.text(value, this.marks));
	        }
	      } else if (dom.nodeType != 1 || dom.hasAttribute("pm-ignore")) {
	        // Ignore non-text non-element nodes
	      } else {
	          var style = dom.getAttribute("style");
	          if (style) this.addElementWithStyles(parseStyles(style), dom);else this.addElement(dom);
	        }
	    }
	  }, {
	    key: "addElement",
	    value: function addElement(dom) {
	      var name = dom.nodeName.toLowerCase();
	      if (!this.parseNodeType(name, dom) && !ignoreElements.hasOwnProperty(name)) {
	        this.addAll(dom.firstChild, null);
	        if (blockElements.hasOwnProperty(name) && this.top.type == this.schema.defaultTextblockType()) this.closing = true;
	      }
	    }
	  }, {
	    key: "addElementWithStyles",
	    value: function addElementWithStyles(styles, dom) {
	      var _this = this;

	      var wrappers = [];
	      for (var i = 0; i < styles.length; i += 2) {
	        var parsers = this.styleInfo[styles[i]],
	            value = styles[i + 1];
	        if (parsers) for (var j = 0; j < parsers.length; j++) {
	          wrappers.push(parsers[j], value);
	        }
	      }
	      var next = function next(i) {
	        if (i == wrappers.length) {
	          _this.addElement(dom);
	        } else {
	          var parser = wrappers[i];
	          parser.parse.call(parser.type, wrappers[i + 1], _this, next.bind(null, i + 2));
	        }
	      };
	      next(0);
	    }
	  }, {
	    key: "tryParsers",
	    value: function tryParsers(parsers, dom) {
	      if (parsers) for (var i = 0; i < parsers.length; i++) {
	        var parser = parsers[i];
	        if (parser.parse.call(parser.type, dom, this) !== false) return true;
	      }
	    }
	  }, {
	    key: "parseNodeType",
	    value: function parseNodeType(name, dom) {
	      return this.tryParsers(this.tagInfo[name], dom) || this.tryParsers(this.tagInfo._, dom);
	    }
	  }, {
	    key: "addAll",
	    value: function addAll(from, to, sync) {
	      var stack = sync && this.stack.slice();
	      for (var dom = from; dom != to; dom = dom.nextSibling) {
	        this.addDOM(dom);
	        if (sync && blockElements.hasOwnProperty(dom.nodeName.toLowerCase())) this.sync(stack);
	      }
	    }
	  }, {
	    key: "doClose",
	    value: function doClose() {
	      if (!this.closing || this.stack.length < 2) return;
	      var left = this.leave();
	      this.enter(left.type, left.attrs);
	      this.closing = false;
	    }
	  }, {
	    key: "insertNode",
	    value: function insertNode(node) {
	      if (this.top.type.canContain(node)) {
	        this.doClose();
	      } else {
	        for (var i = this.stack.length - 1; i >= 0; i--) {
	          var route = this.stack[i].type.findConnection(node.type);
	          if (!route) continue;
	          if (i == this.stack.length - 1) {
	            this.doClose();
	          } else {
	            while (this.stack.length > i + 1) {
	              this.leave();
	            }
	          }
	          for (var j = 0; j < route.length; j++) {
	            this.enter(route[j]);
	          }if (this.marks.length) this.marks = noMarks;
	          break;
	        }
	      }
	      this.top.content.push(node);
	      return node;
	    }

	    // :: (DOMNode, NodeType, ?Object, [Node]) → Node
	    // Insert a node of the given type, with the given content, based on
	    // `dom`, at the current position in the document.

	  }, {
	    key: "insert",
	    value: function insert(type, attrs, content) {
	      return this.insertNode(type.createAutoFill(attrs, content, this.marks));
	    }
	  }, {
	    key: "enter",
	    value: function enter(type, attrs) {
	      this.stack.push({ type: type, attrs: attrs, content: [] });
	    }
	  }, {
	    key: "leave",
	    value: function leave() {
	      if (this.marks.length) this.marks = noMarks;
	      var top = this.stack.pop();
	      var last = top.content[top.content.length - 1];
	      if (last && last.isText && /\s$/.test(last.text)) top.content[top.content.length - 1] = last.copy(last.text.slice(0, last.text.length - 1));
	      var node = top.type.createAutoFill(top.attrs, top.content);
	      if (this.stack.length) this.insertNode(node);
	      return node;
	    }
	  }, {
	    key: "sync",
	    value: function sync(stack) {
	      while (this.stack.length > stack.length) {
	        this.leave();
	      }for (;;) {
	        var n = this.stack.length - 1,
	            one = this.stack[n],
	            two = stack[n];
	        if (one.type == two.type && _model.Node.sameAttrs(one.attrs, two.attrs)) break;
	        this.leave();
	      }
	      while (stack.length > this.stack.length) {
	        var add = stack[this.stack.length];
	        this.enter(add.type, add.attrs);
	      }
	      if (this.marks.length) this.marks = noMarks;
	      this.closing = false;
	    }

	    // :: (DOMNode, NodeType, ?Object)
	    // Parse the contents of `dom` as children of a node of the given
	    // type.

	  }, {
	    key: "wrapIn",
	    value: function wrapIn(dom, type, attrs) {
	      this.enter(type, attrs);
	      this.addAll(dom.firstChild, null, true);
	      this.leave();
	    }

	    // :: (DOMNode, Mark)
	    // Parse the contents of `dom`, with `mark` added to the set of
	    // current marks.

	  }, {
	    key: "wrapMark",
	    value: function wrapMark(inner, mark) {
	      var old = this.marks;
	      this.marks = (mark.instance || mark).addToSet(old);
	      if (inner.call) inner();else this.addAll(inner.firstChild, null);
	      this.marks = old;
	    }
	  }, {
	    key: "top",
	    get: function get() {
	      return this.stack[this.stack.length - 1];
	    }
	  }]);

	  return DOMParseState;
	}();

	function parseStyles(style) {
	  var re = /\s*([\w-]+)\s*:\s*([^;]+)/g,
	      m = undefined,
	      result = [];
	  while (m = re.exec(style)) {
	    result.push(m[1], m[2].trim());
	  }return result;
	}

	function schemaInfo(schema) {
	  return schema.cached.parseDOMInfo || (schema.cached.parseDOMInfo = summarizeSchemaInfo(schema));
	}

	function summarizeSchemaInfo(schema) {
	  var tags = Object.create(null),
	      styles = Object.create(null);
	  tags._ = [];
	  schema.registry("parseDOM", function (tag, info, type) {
	    var parse = info.parse;
	    if (parse == "block") parse = function parse(dom, state) {
	      state.wrapIn(dom, this);
	    };else if (parse == "mark") parse = function parse(dom, state) {
	      state.wrapMark(dom, this);
	    };
	    (0, _sortedinsert2.default)(tags[tag] || (tags[tag] = []), {
	      type: type, parse: parse,
	      rank: info.rank == null ? 50 : info.rank
	    }, function (a, b) {
	      return a.rank - b.rank;
	    });
	  });
	  schema.registry("parseDOMStyle", function (style, info, type) {
	    (0, _sortedinsert2.default)(styles[style] || (styles[style] = []), {
	      type: type,
	      parse: info.parse,
	      rank: info.rank == null ? 50 : info.rank
	    }, function (a, b) {
	      return a.rank - b.rank;
	    });
	  });
	  return { tags: tags, styles: styles };
	}

	_model.Paragraph.register("parseDOM", "p", { parse: "block" });

	_model.BlockQuote.register("parseDOM", "blockquote", { parse: "block" });

	var _loop = function _loop(i) {
	  _model.Heading.registerComputed("parseDOM", "h" + i, function (type) {
	    if (i <= type.maxLevel) return {
	      parse: function parse(dom, state) {
	        state.wrapIn(dom, this, { level: i });
	      }
	    };
	  });
	};

	for (var i = 1; i <= 6; i++) {
	  _loop(i);
	}_model.HorizontalRule.register("parseDOM", "hr", { parse: "block" });

	_model.CodeBlock.register("parseDOM", "pre", { parse: function parse(dom, state) {
	    var params = dom.firstChild && /^code$/i.test(dom.firstChild.nodeName) && dom.firstChild.getAttribute("class");
	    if (params && /fence/.test(params)) {
	      var found = [],
	          re = /(?:^|\s)lang-(\S+)/g,
	          m = undefined;
	      while (m = re.test(params)) {
	        found.push(m[1]);
	      }params = found.join(" ");
	    } else {
	      params = null;
	    }
	    var text = dom.textContent;
	    state.insert(this, { params: params }, text ? [state.schema.text(text)] : []);
	  } });

	_model.BulletList.register("parseDOM", "ul", { parse: "block" });

	_model.OrderedList.register("parseDOM", "ol", { parse: function parse(dom, state) {
	    var attrs = { order: dom.getAttribute("start") || 1 };
	    state.wrapIn(dom, this, attrs);
	  } });

	_model.ListItem.register("parseDOM", "li", { parse: "block" });

	_model.HardBreak.register("parseDOM", "br", { parse: function parse(_, state) {
	    state.insert(this);
	  } });

	_model.Image.register("parseDOM", "img", { parse: function parse(dom, state) {
	    state.insert(this, {
	      src: dom.getAttribute("src"),
	      title: dom.getAttribute("title") || null,
	      alt: dom.getAttribute("alt") || null
	    });
	  } });

	// Inline style tokens

	_model.LinkMark.register("parseDOM", "a", { parse: function parse(dom, state) {
	    var href = dom.getAttribute("href");
	    if (!href) return false;
	    state.wrapMark(dom, this.create({ href: href, title: dom.getAttribute("title") }));
	  } });

	_model.EmMark.register("parseDOM", "i", { parse: "mark" });
	_model.EmMark.register("parseDOM", "em", { parse: "mark" });
	_model.StrongMark.register("parseDOMStyle", "font-style", { parse: function parse(value, state, inner) {
	    if (value == "italic") state.wrapMark(inner, this);else inner();
	  } });

	_model.StrongMark.register("parseDOM", "b", { parse: "mark" });
	_model.StrongMark.register("parseDOM", "strong", { parse: "mark" });
	_model.StrongMark.register("parseDOMStyle", "font-weight", { parse: function parse(value, state, inner) {
	    if (value == "bold" || value == "bolder" || !/\D/.test(value) && +value >= 500) state.wrapMark(inner, this);else inner();
	  } });

	_model.CodeMark.register("parseDOM", "code", { parse: "mark" });

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toDOM = toDOM;
	exports.nodeToDOM = nodeToDOM;
	exports.toHTML = toHTML;

	var _model = __webpack_require__(3);

	var _register = __webpack_require__(36);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; Object used to to expose relevant values and methods
	// to DOM serializer functions.

	var DOMSerializer = function () {
	  function DOMSerializer(options) {
	    _classCallCheck(this, DOMSerializer);

	    // :: Object The options passed to the serializer.
	    this.options = options || {};
	    // :: DOMDocument The DOM document in which we are working.
	    this.doc = this.options.document || window.document;
	  }

	  // :: (string, ?Object, ...union<string, DOMNode>) → DOMNode
	  // Create a DOM node of the given type, with (optionally) the given
	  // attributes and content. Content elements may be strings (for text
	  // nodes) or other DOM nodes.

	  _createClass(DOMSerializer, [{
	    key: "elt",
	    value: function elt(type, attrs) {
	      var result = this.doc.createElement(type);
	      if (attrs) for (var name in attrs) {
	        if (name == "style") result.style.cssText = attrs[name];else if (attrs[name]) result.setAttribute(name, attrs[name]);
	      }

	      for (var _len = arguments.length, content = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        content[_key - 2] = arguments[_key];
	      }

	      for (var i = 0; i < content.length; i++) {
	        result.appendChild(typeof content[i] == "string" ? this.doc.createTextNode(content[i]) : content[i]);
	      }return result;
	    }
	  }, {
	    key: "renderNode",
	    value: function renderNode(node, offset) {
	      var dom = node.type.serializeDOM(node, this);
	      if (this.options.onRender) dom = this.options.onRender(node, dom, offset) || dom;
	      return dom;
	    }
	  }, {
	    key: "renderContent",
	    value: function renderContent(node, where) {
	      if (!where) where = this.doc.createDocumentFragment();
	      if (!node.isTextblock) this.renderBlocksInto(node, where);else if (this.options.renderInlineFlat) this.renderInlineFlatInto(node, where);else this.renderInlineInto(node, where);
	      return where;
	    }
	  }, {
	    key: "renderBlocksInto",
	    value: function renderBlocksInto(parent, where) {
	      for (var i = parent.iter(), child; child = i.next().value;) {
	        if (this.options.path) this.options.path.push(i.offset - child.width);
	        where.appendChild(this.renderNode(child, i.offset - child.width));
	        if (this.options.path) this.options.path.pop();
	      }
	    }
	  }, {
	    key: "renderInlineInto",
	    value: function renderInlineInto(parent, where) {
	      var _this = this;

	      var top = where;
	      var active = [];
	      parent.forEach(function (node, offset) {
	        var keep = 0;
	        for (; keep < Math.min(active.length, node.marks.length); ++keep) {
	          if (!node.marks[keep].eq(active[keep])) break;
	        }while (keep < active.length) {
	          active.pop();
	          top = top.parentNode;
	        }
	        while (active.length < node.marks.length) {
	          var add = node.marks[active.length];
	          active.push(add);
	          top = top.appendChild(_this.renderMark(add));
	        }
	        top.appendChild(_this.renderNode(node, offset));
	      });
	    }
	  }, {
	    key: "renderInlineFlatInto",
	    value: function renderInlineFlatInto(parent, where) {
	      var _this2 = this;

	      parent.forEach(function (node, start) {
	        var dom = _this2.renderNode(node, start);
	        dom = _this2.wrapInlineFlat(dom, node.marks);
	        dom = _this2.options.renderInlineFlat(node, dom, start) || dom;
	        where.appendChild(dom);
	      });
	    }
	  }, {
	    key: "renderMark",
	    value: function renderMark(mark) {
	      return mark.type.serializeDOM(mark, this);
	    }
	  }, {
	    key: "wrapInlineFlat",
	    value: function wrapInlineFlat(dom, marks) {
	      for (var i = marks.length - 1; i >= 0; i--) {
	        var wrap = this.renderMark(marks[i]);
	        wrap.appendChild(dom);
	        dom = wrap;
	      }
	      return dom;
	    }

	    // :: (Node, string, ?Object) → DOMNode
	    // Render the content of ProseMirror node into a DOM node with the
	    // given tag name and attributes.

	  }, {
	    key: "renderAs",
	    value: function renderAs(node, tagName, tagAttrs) {
	      var dom = this.renderContent(node, this.elt(tagName, tagAttrs));
	      if (this.options.onContainer) this.options.onContainer(dom);
	      return dom;
	    }
	  }]);

	  return DOMSerializer;
	}();

	// :: (Node, ?Object) → DOMFragment
	// Serialize the content of the given node to a DOM fragment. When not
	// in the browser, the `document` option, containing a DOM document,
	// should be passed so that the serialize can create nodes.
	//
	// To define rendering behavior for your own [node](#NodeType) and
	// [mark](#MarkType) types, give them a `serializeDOM` method. This
	// method is passed a `Node` and a `DOMSerializer`, and should return
	// the [DOM
	// node](https://developer.mozilla.org/en-US/docs/Web/API/Node) that
	// represents this node and its content. For marks, that should be an
	// inline wrapping node like `<a>` or `<strong>`.
	//
	// Individual attributes can also define serialization behavior. If an
	// `Attribute` object has a `serializeDOM` method, that will be called
	// with the DOM node representing the node that the attribute applies
	// to and the atttribute's value, so that it can set additional DOM
	// attributes on the DOM node.

	function toDOM(node, options) {
	  return new DOMSerializer(options).renderContent(node);
	}

	(0, _register.defineTarget)("dom", toDOM);

	// :: (Node, ?Object) → DOMNode
	// Serialize a given node to a DOM node. This is useful when you need
	// to serialize a part of a document, as opposed to the whole
	// document.
	function nodeToDOM(node, options, offset) {
	  var serializer = new DOMSerializer(options);
	  var dom = serializer.renderNode(node, offset);
	  if (node.isInline) {
	    dom = serializer.wrapInlineFlat(dom, node.marks);
	    if (serializer.options.renderInlineFlat) dom = options.renderInlineFlat(node, dom, offset) || dom;
	  }
	  return dom;
	}

	// :: (Node, ?Object) → string
	// Serialize a node as an HTML string. Goes through `toDOM` and then
	// serializes the result. Again, you must pass a `document` option
	// when not in the browser.
	function toHTML(node, options) {
	  var serializer = new DOMSerializer(options);
	  var wrap = serializer.elt("div");
	  wrap.appendChild(serializer.renderContent(node));
	  return wrap.innerHTML;
	}

	(0, _register.defineTarget)("html", toHTML);

	// Block nodes

	function def(cls, method) {
	  cls.prototype.serializeDOM = method;
	}

	def(_model.BlockQuote, function (node, s) {
	  return s.renderAs(node, "blockquote");
	});

	_model.BlockQuote.prototype.countCoordsAsChild = function (_, path, dom, coords) {
	  var childBox = dom.firstChild.getBoundingClientRect();
	  if (coords.left < childBox.left - 2) return _model.Pos.from(path);
	};

	def(_model.BulletList, function (node, s) {
	  return s.renderAs(node, "ul");
	});

	def(_model.OrderedList, function (node, s) {
	  return s.renderAs(node, "ol", { start: node.attrs.order != "1" && node.attrs.order });
	});

	_model.OrderedList.prototype.countCoordsAsChild = _model.BulletList.prototype.countCoordsAsChild = function (_, path, dom, coords) {
	  for (var i = 0; i < dom.childNodes.length; i++) {
	    var child = dom.childNodes[i];
	    if (!child.hasAttribute("pm-offset")) continue;
	    var childBox = child.getBoundingClientRect();
	    if (coords.left > childBox.left - 2) return null;
	    if (childBox.top <= coords.top && childBox.bottom >= coords.top) return new _model.Pos(path, i);
	  }
	};

	def(_model.ListItem, function (node, s) {
	  return s.renderAs(node, "li");
	});

	def(_model.HorizontalRule, function (_, s) {
	  return s.elt("hr");
	});

	def(_model.Paragraph, function (node, s) {
	  return s.renderAs(node, "p");
	});

	def(_model.Heading, function (node, s) {
	  return s.renderAs(node, "h" + node.attrs.level);
	});

	def(_model.CodeBlock, function (node, s) {
	  var code = s.renderAs(node, "code");
	  if (node.attrs.params != null) code.className = "fence " + node.attrs.params.replace(/(^|\s+)/g, "$&lang-");
	  return s.elt("pre", null, code);
	});

	// Inline content

	def(_model.Text, function (node, s) {
	  return s.doc.createTextNode(node.text);
	});

	def(_model.Image, function (node, s) {
	  return s.elt("img", {
	    src: node.attrs.src,
	    alt: node.attrs.alt,
	    title: node.attrs.title
	  });
	});

	def(_model.HardBreak, function (_, s) {
	  return s.elt("br");
	});

	// Inline styles

	def(_model.EmMark, function (_, s) {
	  return s.elt("em");
	});

	def(_model.StrongMark, function (_, s) {
	  return s.elt("strong");
	});

	def(_model.CodeMark, function (_, s) {
	  return s.elt("code");
	});

	def(_model.LinkMark, function (mark, s) {
	  return s.elt("a", { href: mark.attrs.href,
	    title: mark.attrs.title });
	});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromText = fromText;

	var _register = __webpack_require__(36);

	// FIXME is it meaningful to try and attach text-parsing information
	// to node types?

	// :: (Schema, string) → Node
	// Convert a string into a simple ProseMirror document.
	function fromText(schema, text) {
	  var blocks = text.trim().split(/\n{2,}/);
	  var nodes = [];
	  for (var i = 0; i < blocks.length; i++) {
	    var spans = [];
	    var parts = blocks[i].split("\n");
	    for (var j = 0; j < parts.length; j++) {
	      if (j) spans.push(schema.node("hard_break"));
	      if (parts[j]) spans.push(schema.text(parts[j]));
	    }
	    nodes.push(schema.node("paragraph", null, spans));
	  }
	  if (!nodes.length) nodes.push(schema.node("paragraph"));
	  return schema.node("doc", null, nodes);
	}

	(0, _register.defineSource)("text", fromText);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toText = toText;

	var _model = __webpack_require__(3);

	var _register = __webpack_require__(36);

	_model.Block.prototype.serializeText = function (node) {
	  var accum = "";
	  node.forEach(function (child) {
	    return accum += child.type.serializeText(child);
	  });
	  return accum;
	};

	_model.Textblock.prototype.serializeText = function (node) {
	  var text = _model.Block.prototype.serializeText(node);
	  return text && text + "\n\n";
	};

	_model.Inline.prototype.serializeText = function () {
	  return "";
	};

	_model.HardBreak.prototype.serializeText = function () {
	  return "\n";
	};

	_model.Text.prototype.serializeText = function (node) {
	  return node.text;
	};

	// :: (Node) → string
	// Serialize a node as a plain text string.
	function toText(doc) {
	  return doc.type.serializeText(doc).trim();
	}

	(0, _register.defineTarget)("text", toText);

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineOption = defineOption;
	exports.parseOptions = parseOptions;
	exports.initOptions = initOptions;
	exports.setOption = setOption;

	var _model = __webpack_require__(3);

	var _error = __webpack_require__(7);

	var _prompt = __webpack_require__(17);

	var _command = __webpack_require__(42);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Option = function Option(defaultValue, update, updateOnInit) {
	  _classCallCheck(this, Option);

	  this.defaultValue = defaultValue;
	  this.update = update;
	  this.updateOnInit = updateOnInit !== false;
	};

	var options = Object.create(null);

	// :: (string, any, (pm: ProseMirror, newValue: any, oldValue: any, init: bool), bool)
	// Define a new option. The `update` handler will be called with the
	// option's old and new value every time the option is
	// [changed](#ProseMirror.setOption). When `updateOnInit` is true, it
	// is also called on editor init, with null as the old value, and a fourth
	// argument of true.
	function defineOption(name, defaultValue, update, updateOnInit) {
	  options[name] = new Option(defaultValue, update, updateOnInit);
	}

	// :: Schema #path=schema #kind=option
	// The [schema](#Schema) that the editor's document should use.
	defineOption("schema", _model.defaultSchema, false);

	// :: any #path=doc #kind=option
	// The starting document. Usually a `Node`, but can be in another
	// format when the `docFormat` option is also specified.
	defineOption("doc", null, function (pm, value) {
	  return pm.setDoc(value);
	}, false);

	// :: ?string #path=docFormat #kind=option
	// The format in which the `doc` option is given. Defaults to `null`
	// (a raw `Node`).
	defineOption("docFormat", null);

	// :: ?union<DOMNode, (DOMNode)> #path=place #kind=option
	// Determines the placement of the editor in the page. When `null`,
	// the editor is not placed. When a DOM node is given, the editor is
	// appended to that node. When a function is given, it is called
	// with the editor's wrapping DOM node, and is expected to place it
	// into the document.
	defineOption("place", null);

	// :: number #path=historyDepth #kind=option
	// The amount of history events that are collected before the oldest
	// events are discarded. Defaults to 100.
	defineOption("historyDepth", 100);

	// :: number #path=historyEventDelay #kind=option
	// The amount of milliseconds that must pass between changes to
	// start a new history event. Defaults to 500.
	defineOption("historyEventDelay", 500);

	// :: CommandSet #path=commands #kind=option
	// Specifies the set of [commands](#Command) available in the editor
	// (which in turn determines the base key bindings and items available
	// in the menus). Defaults to `CommandSet.default`.
	defineOption("commands", _command.CommandSet.default, _command.updateCommands);

	// :: ParamPrompt #path=commandParamPrompt #kind=option
	// A default [parameter prompting](#ui/prompt) class to use when a
	// command is [executed](#ProseMirror.execCommand) without providing
	// parameters.
	defineOption("commandParamPrompt", _prompt.ParamPrompt);

	// :: ?string #path=label #kind=option
	// The label of the editor. When set, the editable DOM node gets an
	// `aria-label` attribute with this value.
	defineOption("label", null);

	function parseOptions(obj) {
	  var result = Object.create(null);
	  var given = obj ? [obj].concat(obj.use || []) : [];
	  outer: for (var opt in options) {
	    for (var i = 0; i < given.length; i++) {
	      if (opt in given[i]) {
	        result[opt] = given[i][opt];
	        continue outer;
	      }
	    }
	    result[opt] = options[opt].defaultValue;
	  }
	  return result;
	}

	function initOptions(pm) {
	  for (var opt in options) {
	    var desc = options[opt];
	    if (desc.update && desc.updateOnInit) desc.update(pm, pm.options[opt], null, true);
	  }
	}

	function setOption(pm, name, value) {
	  var desc = options[name];
	  if (desc === undefined) _error.AssertionError.raise("Option '" + name + "' is not defined");
	  if (desc.update === false) _error.AssertionError.raise("Option '" + name + "' can not be changed");
	  var old = pm.options[name];
	  pm.options[name] = value;
	  if (desc.update) desc.update(pm, value, old, false);
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.CommandSet = exports.Command = undefined;
	exports.updateCommands = updateCommands;
	exports.selectedNodeAttr = selectedNodeAttr;

	var _browserkeymap = __webpack_require__(21);

	var _browserkeymap2 = _interopRequireDefault(_browserkeymap);

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(22);

	var _dom = __webpack_require__(14);

	var _sortedinsert = __webpack_require__(32);

	var _sortedinsert2 = _interopRequireDefault(_sortedinsert);

	var _error = __webpack_require__(7);

	var _obj = __webpack_require__(11);

	var _base_commands = __webpack_require__(43);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A command is a named piece of functionality that can be bound to
	// a key, shown in the menu, or otherwise exposed to the user.
	//
	// The commands available in a given editor are determined by the
	// `commands` option. By default, they come from the `baseCommands`
	// object and the commands [registered](#SchemaItem.register) with
	// schema items. Registering a `CommandSpec` on a [node](#NodeType) or
	// [mark](#MarkType) type will cause that command to come into scope
	// in editors whose schema includes that item.

	var Command = exports.Command = function () {
	  function Command(spec, self, name) {
	    _classCallCheck(this, Command);

	    // :: string The name of the command.
	    this.name = name;
	    if (!this.name) _error.NamespaceError.raise("Trying to define a command without a name");
	    // :: CommandSpec The command's specifying object.
	    this.spec = spec;
	    this.self = self;
	  }

	  // :: (ProseMirror, ?[any]) → ?bool
	  // Execute this command. If the command takes
	  // [parameters](#Command.params), they can be passed as second
	  // argument here, or otherwise the user will be prompted for them
	  // using the value of the `commandParamPrompt` option.
	  //
	  // Returns the value returned by the command spec's [`run`
	  // method](#CommandSpec.run), or a `ParamPrompt` instance if the
	  // command is ran asynchronously through a prompt.

	  _createClass(Command, [{
	    key: "exec",
	    value: function exec(pm, params) {
	      var run = this.spec.run;
	      if (!params) {
	        if (!this.params.length) return run.call(this.self, pm);
	        return new pm.options.commandParamPrompt(pm, this).open();
	      } else {
	        if (this.params.length != (params ? params.length : 0)) _error.AssertionError.raise("Invalid amount of parameters for command " + this.name);
	        return run.call.apply(run, [this.self, pm].concat(_toConsumableArray(params)));
	      }
	    }

	    // :: (ProseMirror) → bool
	    // Ask this command whether it is currently relevant, given the
	    // editor's document and selection. If the command does not define a
	    // [`select`](#CommandSpec.select) method, this always returns true.

	  }, {
	    key: "select",
	    value: function select(pm) {
	      var f = this.spec.select;
	      return f ? f.call(this.self, pm) : true;
	    }

	    // :: (ProseMirror) → bool
	    // Ask this command whether it is “active”. This is mostly used to
	    // style inline mark icons (such as strong) differently when the
	    // selection contains such marks.

	  }, {
	    key: "active",
	    value: function active(pm) {
	      var f = this.spec.active;
	      return f ? f.call(this.self, pm) : false;
	    }

	    // :: [CommandParam]
	    // Get the list of parameters that this command expects.

	  }, {
	    key: "params",
	    get: function get() {
	      return this.spec.params || empty;
	    }

	    // :: string
	    // Get the label for this command.

	  }, {
	    key: "label",
	    get: function get() {
	      return this.spec.label || this.name;
	    }
	  }]);

	  return Command;
	}();

	var empty = [];

	function deriveCommandSpec(type, spec, name) {
	  if (!spec.derive) return spec;
	  var conf = _typeof(spec.derive) == "object" ? spec.derive : {};
	  var dname = conf.name || name;
	  var derive = type.constructor.deriveableCommands[dname];
	  if (!derive) _error.AssertionError.raise("Don't know how to derive command " + dname);
	  var derived = derive.call(type, conf);
	  for (var prop in spec) {
	    if (prop != "derive") derived[prop] = spec[prop];
	  }return derived;
	}

	// ;; The type used as the value of the `commands` option. Allows you
	// to specify the set of commands that are available in the editor by
	// adding and modifying command specs.

	var CommandSet = function () {
	  function CommandSet(base, op) {
	    _classCallCheck(this, CommandSet);

	    this.base = base;
	    this.op = op;
	  }

	  // :: (union<Object<CommandSpec>, string>, ?(string, CommandSpec) → bool) → CommandSet
	  // Add a set of commands, creating a new command set. If `set` is
	  // the string `"schema"`, the commands are retrieved from the
	  // editor's schema's [registry](#Schema.registry), otherwise, it
	  // should be an object mapping command names to command specs.
	  //
	  // A filter function can be given to add only the commands for which
	  // the filter returns true.

	  _createClass(CommandSet, [{
	    key: "add",
	    value: function add(set, filter) {
	      return new CommandSet(this, function (commands, schema) {
	        function add(name, spec, self) {
	          if (!filter || filter(name, spec)) {
	            if (commands[name]) _error.AssertionError.raise("Duplicate definition of command " + name);
	            commands[name] = new Command(spec, self, name);
	          }
	        }

	        if (set === "schema") {
	          schema.registry("command", function (name, spec, type, typeName) {
	            add(typeName + ":" + name, deriveCommandSpec(type, spec, name), type);
	          });
	        } else {
	          for (var name in set) {
	            add(name, set[name]);
	          }
	        }
	      });
	    }

	    // :: (Object<?CommandSpec>) → CommandSet
	    // Create a new command set by adding, modifying, or deleting
	    // commands. The `update` object can map a command name to `null` to
	    // delete it, to a full `CommandSpec` (containing a `run` property)
	    // to add it, or to a partial `CommandSpec` (without a `run`
	    // property) to update some properties in the command by that name.

	  }, {
	    key: "update",
	    value: function update(_update) {
	      return new CommandSet(this, function (commands) {
	        for (var name in _update) {
	          var spec = _update[name];
	          if (!spec) {
	            delete commands[name];
	          } else if (spec.run) {
	            commands[name] = new Command(spec, null, name);
	          } else {
	            var known = commands[name];
	            if (known) commands[name] = new Command((0, _obj.copyObj)(spec, (0, _obj.copyObj)(known.spec)), known.self, name);
	          }
	        }
	      });
	    }
	  }, {
	    key: "derive",
	    value: function derive(schema) {
	      var commands = this.base ? this.base.derive(schema) : Object.create(null);
	      this.op(commands, schema);
	      return commands;
	    }
	  }]);

	  return CommandSet;
	}();

	// :: CommandSet
	// A set without any commands.

	exports.CommandSet = CommandSet;
	CommandSet.empty = new CommandSet(null, function () {
	  return null;
	});

	// :: CommandSet
	// The default value of the `commands` option. Includes the [base
	// commands](#baseCommands) and the commands defined by the schema.
	CommandSet.default = CommandSet.empty.add("schema").add(_base_commands.baseCommands);

	// ;; #path=CommandSpec #kind=interface
	// Commands are defined using objects that specify various aspects of
	// the command. The only property that _must_ appear in a command spec
	// is [`run`](#CommandSpec.run). You should probably also give your
	// commands a `label`.

	// :: string #path=CommandSpec.label
	// A user-facing label for the command. This will be used, among other
	// things. as the tooltip title for the command's menu item. If there
	// is no `label`, the command's `name` will be used instead.

	// :: (pm: ProseMirror, ...params: [any]) → ?bool #path=CommandSpec.run
	// The function that executes the command. If the command has
	// [parameters](#CommandSpec.params), their values are passed as
	// arguments. For commands [registered](#SchemaItem.register) on node or
	// mark types, `this` will be bound to the node or mark type when this
	// function is ran. Should return `false` when the command could not
	// be executed.

	// :: [CommandParam] #path=CommandSpec.params
	// The parameters that this command expects.

	// :: (pm: ProseMirror) → bool #path=CommandSpec.select
	// The function used to [select](#Command.select) the command. `this`
	// will again be bound to a node or mark type, when available.

	// :: (pm: ProseMirror) → bool #path=CommandSpec.active
	// The function used to determine whether the command is
	// [active](#Command.active). `this` refers to the associated node or
	// mark type.

	// :: union<string, [string]> #path=CommandSpec.keys
	// The default key bindings for this command. May either be an array
	// of strings containing [key
	// names](https://github.com/marijnh/browserkeymap#a-string-notation-for-key-events),
	// or an object with optional `all`, `mac`, and `pc` properties,
	// specifying arrays of keys for different platforms.

	// :: union<bool, Object> #path=CommandSpec.derive
	// [Mark](#MarkType) and [node](#NodeType) types often need to define
	// boilerplate commands. To reduce the amount of duplicated code, you
	// can derive such commands by setting the `derive` property to either
	// `true` or an object which is passed to the deriving function. If
	// this object has a `name` property, that is used, instead of the
	// command name, to pick a deriving function.
	//
	// For node types, you can derive `"insert"`, `"make"`, and `"wrap"`.
	//
	// For mark types, you can derive `"set"`, `"unset"`, and `"toggle"`.

	// ;; #path=CommandParam #kind=interface
	// The parameters that a command can take are specified using objects
	// with the following properties:

	// :: string #path=CommandParam.label
	// The user-facing name of the parameter. Shown to the user when
	// prompting for this parameter.

	// :: string #path=CommandParam.type
	// The type of the parameter. Supported types are `"text"` and `"select"`.

	// :: any #path=CommandParam.default
	// A default value for the parameter.

	// :: (ProseMirror) → ?any #path=CommandParam.prefill
	// A function that, given an editor instance (and a `this` bound to
	// the command's source item), tries to derive an initial value for
	// the parameter, or return null if it can't.

	// :: (any) → ?string #path=CommandParam.validate
	// An optional function that is called to validate values provided for
	// this parameter. Should return a falsy value when the value is
	// valid, and an error message when it is not.

	function deriveKeymap(pm) {
	  var bindings = {},
	      platform = _dom.browser.mac ? "mac" : "pc";
	  function add(command, keys) {
	    for (var i = 0; i < keys.length; i++) {
	      var _$exec = /^(.+?)(?:\((\d+)\))?$/.exec(keys[i]);

	      var _$exec2 = _slicedToArray(_$exec, 3);

	      var _ = _$exec2[0];
	      var name = _$exec2[1];
	      var _$exec2$ = _$exec2[2];
	      var rank = _$exec2$ === undefined ? 50 : _$exec2$;

	      (0, _sortedinsert2.default)(bindings[name] || (bindings[name] = []), { command: command, rank: rank }, function (a, b) {
	        return a.rank - b.rank;
	      });
	    }
	  }
	  for (var name in pm.commands) {
	    var cmd = pm.commands[name],
	        keys = cmd.spec.keys;
	    if (!keys) continue;
	    if (Array.isArray(keys)) add(cmd, keys);
	    if (keys.all) add(cmd, keys.all);
	    if (keys[platform]) add(cmd, keys[platform]);
	  }

	  for (var key in bindings) {
	    bindings[key] = bindings[key].map(function (b) {
	      return b.command.name;
	    });
	  }return new _browserkeymap2.default(bindings);
	}

	function updateCommands(pm, set) {
	  // :: () #path=ProseMirror#events#commandsChanging
	  // Fired before the set of commands for the editor is updated.
	  pm.signal("commandsChanging");
	  pm.commands = set.derive(pm.schema);
	  pm.input.baseKeymap = deriveKeymap(pm);
	  pm.commandKeys = Object.create(null);
	  // :: () #path=ProseMirror#events#commandsChanged
	  // Fired when the set of commands for the editor is updated.
	  pm.signal("commandsChanged");
	}

	function markActive(pm, type) {
	  var sel = pm.selection;
	  if (sel.empty) return type.isInSet(pm.activeMarks());else return pm.doc.rangeHasMark(sel.from, sel.to, type);
	}

	function canAddInline(pm, type) {
	  var _pm$selection = pm.selection;
	  var from = _pm$selection.from;
	  var to = _pm$selection.to;
	  var empty = _pm$selection.empty;

	  if (empty) return !type.isInSet(pm.activeMarks()) && pm.doc.path(from.path).type.canContainMark(type);
	  var can = false;
	  pm.doc.nodesBetween(from, to, function (node) {
	    if (can || node.isTextblock && !node.type.canContainMark(type)) return false;
	    if (node.isInline && !type.isInSet(node.marks)) can = true;
	  });
	  return can;
	}

	function markApplies(pm, type) {
	  var _pm$selection2 = pm.selection;
	  var from = _pm$selection2.from;
	  var to = _pm$selection2.to;

	  var relevant = false;
	  pm.doc.nodesBetween(from, to, function (node) {
	    if (node.isTextblock) {
	      if (node.type.canContainMark(type)) relevant = true;
	      return false;
	    }
	  });
	  return relevant;
	}

	function selectedMarkAttr(pm, type, attr) {
	  var _pm$selection3 = pm.selection;
	  var from = _pm$selection3.from;
	  var to = _pm$selection3.to;
	  var empty = _pm$selection3.empty;

	  var start = undefined,
	      end = undefined;
	  if (empty) {
	    start = end = type.isInSet(pm.activeMarks());
	  } else {
	    var startParent = pm.doc.path(from.path);
	    var startChunk = startParent.size > from.offset && startParent.chunkAfter(from.offset);
	    start = startChunk ? type.isInSet(startChunk.node.marks) : null;
	    end = type.isInSet(pm.doc.marksAt(to));
	  }
	  if (start && end && start.attrs[attr] == end.attrs[attr]) return start.attrs[attr];
	}

	function selectedNodeAttr(pm, type, name) {
	  var node = pm.selection.node;

	  if (node && node.type == type) return node.attrs[name];
	}

	function deriveParams(type, params) {
	  return params && params.map(function (param) {
	    var attr = type.attrs[param.attr];
	    var obj = { type: "text",
	      default: attr.default,
	      prefill: type instanceof _model.NodeType ? function (pm) {
	        return selectedNodeAttr(pm, this, param.attr);
	      } : function (pm) {
	        return selectedMarkAttr(pm, this, param.attr);
	      } };
	    for (var prop in param) {
	      obj[prop] = param[prop];
	    }return obj;
	  });
	}

	function fillAttrs(conf, givenParams) {
	  var attrs = conf.attrs;
	  if (conf.params) {
	    (function () {
	      var filled = Object.create(null);
	      if (attrs) for (var name in attrs) {
	        filled[name] = attrs[name];
	      }conf.params.forEach(function (param, i) {
	        return filled[param.attr] = givenParams[i];
	      });
	      attrs = filled;
	    })();
	  }
	  return attrs;
	}

	_model.NodeType.deriveableCommands = Object.create(null);
	_model.MarkType.deriveableCommands = Object.create(null);

	_model.MarkType.deriveableCommands.set = function (conf) {
	  return {
	    run: function run(pm) {
	      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        params[_key - 1] = arguments[_key];
	      }

	      pm.setMark(this, true, fillAttrs(conf, params));
	    },
	    select: function select(pm) {
	      return conf.inverseSelect ? markApplies(pm, this) && !markActive(pm, this) : canAddInline(pm, this);
	    },

	    params: deriveParams(this, conf.params)
	  };
	};

	_model.MarkType.deriveableCommands.unset = function () {
	  return {
	    run: function run(pm) {
	      pm.setMark(this, false);
	    },
	    select: function select(pm) {
	      return markActive(pm, this);
	    }
	  };
	};

	_model.MarkType.deriveableCommands.toggle = function () {
	  return {
	    run: function run(pm) {
	      pm.setMark(this, null);
	    },
	    active: function active(pm) {
	      return markActive(pm, this);
	    },
	    select: function select(pm) {
	      return markApplies(pm, this);
	    }
	  };
	};

	function isAtTopOfListItem(doc, from, to, listType) {
	  return _model.Pos.samePath(from.path, to.path) && from.path.length >= 2 && from.path[from.path.length - 1] == 0 && listType.canContain(doc.path(from.path.slice(0, from.path.length - 1)));
	}

	_model.NodeType.deriveableCommands.wrap = function (conf) {
	  return {
	    run: function run(pm) {
	      var _pm$selection4 = pm.selection;
	      var from = _pm$selection4.from;
	      var to = _pm$selection4.to;
	      var head = _pm$selection4.head;var doJoin = false;
	      if (conf.list && head && isAtTopOfListItem(pm.doc, from, to, this)) {
	        // Don't do anything if this is the top of the list
	        if (from.path[from.path.length - 2] == 0) return false;
	        doJoin = true;
	      }

	      for (var _len2 = arguments.length, params = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        params[_key2 - 1] = arguments[_key2];
	      }

	      var tr = pm.tr.wrap(from, to, this, fillAttrs(conf, params));
	      if (doJoin) tr.join(from.shorten(from.depth - 2));
	      return tr.apply(pm.apply.scroll);
	    },
	    select: function select(pm) {
	      var _pm$selection5 = pm.selection;
	      var from = _pm$selection5.from;
	      var to = _pm$selection5.to;
	      var head = _pm$selection5.head;

	      if (conf.list && head && isAtTopOfListItem(pm.doc, from, to, this) && from.path[from.path.length - 2] == 0) return false;
	      return (0, _transform.canWrap)(pm.doc, from, to, this, conf.attrs);
	    },

	    params: deriveParams(this, conf.params)
	  };
	};

	function alreadyHasBlockType(doc, from, to, type, attrs) {
	  var found = false;
	  if (!attrs) attrs = {};
	  doc.nodesBetween(from, to || from, function (node) {
	    if (node.isTextblock) {
	      if (node.hasMarkup(type, attrs)) found = true;
	      return false;
	    }
	  });
	  return found;
	}

	function activeTextblockIs(pm, type, attrs) {
	  var _pm$selection6 = pm.selection;
	  var from = _pm$selection6.from;
	  var to = _pm$selection6.to;
	  var node = _pm$selection6.node;

	  if (!node || node.isInline) {
	    if (!_model.Pos.samePath(from.path, to.path)) return false;
	    node = pm.doc.path(from.path);
	  } else if (!node.isTextblock) {
	    return false;
	  }
	  return node.hasMarkup(type, attrs);
	}

	_model.NodeType.deriveableCommands.make = function (conf) {
	  return {
	    run: function run(pm) {
	      var _pm$selection7 = pm.selection;
	      var from = _pm$selection7.from;
	      var to = _pm$selection7.to;

	      return pm.tr.setBlockType(from, to, this, conf.attrs).apply(pm.apply.scroll);
	    },
	    select: function select(pm) {
	      var _pm$selection8 = pm.selection;
	      var from = _pm$selection8.from;
	      var to = _pm$selection8.to;
	      var node = _pm$selection8.node;

	      if (node) return node.isTextblock && !node.hasMarkup(this, conf.attrs);else return !alreadyHasBlockType(pm.doc, from, to, this, conf.attrs);
	    },
	    active: function active(pm) {
	      return activeTextblockIs(pm, this, conf.attrs);
	    }
	  };
	};

	_model.NodeType.deriveableCommands.insert = function (conf) {
	  return {
	    run: function run(pm) {
	      for (var _len3 = arguments.length, params = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	        params[_key3 - 1] = arguments[_key3];
	      }

	      return pm.tr.replaceSelection(this.create(fillAttrs(conf, params))).apply(pm.apply.scroll);
	    },

	    select: this.isInline ? function (pm) {
	      return pm.doc.path(pm.selection.from.path).type.canContainType(this);
	    } : null,
	    params: deriveParams(this, conf.params)
	  };
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.baseCommands = undefined;

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(22);

	var _error = __webpack_require__(7);

	var _char = __webpack_require__(44);

	var _selection = __webpack_require__(45);

	var _dompos = __webpack_require__(46);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// :: Object<CommandSpec>
	// The set of default commands defined by the core library. They are
	// included in the [default command set](#CommandSet.default).
	var baseCommands = exports.baseCommands = Object.create(null);

	// Get an offset moving backward from a current offset inside a node.
	function moveBackward(parent, offset, by) {
	  if (by != "char" && by != "word") _error.AssertionError.raise("Unknown motion unit: " + by);

	  var cat = null,
	      counted = 0;
	  for (;;) {
	    if (offset == 0) return offset;

	    var _parent$chunkBefore = parent.chunkBefore(offset);

	    var start = _parent$chunkBefore.start;
	    var node = _parent$chunkBefore.node;

	    if (!node.isText) return cat ? offset : offset - 1;

	    if (by == "char") {
	      for (var i = offset - start; i > 0; i--) {
	        if (!(0, _char.isExtendingChar)(node.text.charAt(i - 1))) return offset - 1;
	        offset--;
	      }
	    } else if (by == "word") {
	      // Work from the current position backwards through text of a singular
	      // character category (e.g. "cat" of "#!*") until reaching a character in a
	      // different category (i.e. the end of the word).
	      for (var i = offset - start; i > 0; i--) {
	        var nextCharCat = (0, _char.charCategory)(node.text.charAt(i - 1));
	        if (cat == null || counted == 1 && cat == "space") cat = nextCharCat;else if (cat != nextCharCat) return offset;
	        offset--;
	        counted++;
	      }
	    }
	  }
	}

	// ;; #kind=command
	// Delete the selection, if there is one.
	//
	// **Keybindings:** Backspace, Delete, Mod-Backspace, Mod-Delete,
	// **Ctrl-H (Mac), Alt-Backspace (Mac), Ctrl-D (Mac),
	// **Ctrl-Alt-Backspace (Mac), Alt-Delete (Mac), Alt-D (Mac)
	baseCommands.deleteSelection = {
	  label: "Delete the selection",
	  run: function run(pm) {
	    return pm.tr.replaceSelection().apply(pm.apply.scroll);
	  },

	  keys: {
	    all: ["Backspace(10)", "Delete(10)", "Mod-Backspace(10)", "Mod-Delete(10)"],
	    mac: ["Ctrl-H(10)", "Alt-Backspace(10)", "Ctrl-D(10)", "Ctrl-Alt-Backspace(10)", "Alt-Delete(10)", "Alt-D(10)"]
	  }
	};

	function deleteBarrier(pm, cut) {
	  var around = pm.doc.path(cut.path);
	  var before = around.child(cut.offset - 1),
	      after = around.child(cut.offset);
	  if (before.type.canContainContent(after.type) && pm.tr.join(cut).apply(pm.apply.scroll) !== false) return;

	  var conn = undefined;
	  if (after.isTextblock && (conn = before.type.findConnection(after.type))) {
	    var tr = pm.tr,
	        end = cut.move(1);
	    tr.step("ancestor", cut, end, null, { types: [before.type].concat(_toConsumableArray(conn)),
	      attrs: [before.attrs].concat(_toConsumableArray(conn.map(function () {
	        return null;
	      }))) });
	    tr.join(end);
	    tr.join(cut);
	    if (tr.apply(pm.apply.scroll) !== false) return;
	  }

	  var selAfter = (0, _selection.findSelectionFrom)(pm.doc, cut, 1);
	  return pm.tr.lift(selAfter.from, selAfter.to).apply(pm.apply.scroll);
	}

	// ;; #kind=command
	// If the selection is empty and at the start of a textblock, move
	// that block closer to the block before it, by lifting it out of its
	// parent or, if it has no parent it doesn't share with the node
	// before it, moving it into a parent of that node, or joining it with
	// that.
	//
	// **Keybindings:** Backspace, Mod-Backspace
	baseCommands.joinBackward = {
	  label: "Join with the block above",
	  run: function run(pm) {
	    var _pm$selection = pm.selection;
	    var head = _pm$selection.head;
	    var empty = _pm$selection.empty;

	    if (!empty || head.offset > 0) return false;

	    // Find the node before this one
	    var before = undefined,
	        cut = undefined;
	    for (var i = head.path.length - 1; !before && i >= 0; i--) {
	      if (head.path[i] > 0) {
	        cut = head.shorten(i);
	        before = pm.doc.path(cut.path).child(cut.offset - 1);
	      }
	    } // If there is no node before this, try to lift
	    if (!before) return pm.tr.lift(head).apply(pm.apply.scroll);

	    // If the node doesn't allow children, delete it
	    if (before.type.contains == null) return pm.tr.delete(cut.move(-1), cut).apply(pm.apply.scroll);

	    // Apply the joining algorithm
	    return deleteBarrier(pm, cut);
	  },

	  keys: ["Backspace(30)", "Mod-Backspace(30)"]
	};

	// ;; #kind=command
	// Delete the character before the cursor, if the selection is empty
	// and the cursor isn't at the start of a textblock.
	//
	// **Keybindings:** Backspace, Ctrl-H (Mac)
	baseCommands.deleteCharBefore = {
	  label: "Delete a character before the cursor",
	  run: function run(pm) {
	    var _pm$selection2 = pm.selection;
	    var head = _pm$selection2.head;
	    var empty = _pm$selection2.empty;

	    if (!empty || head.offset == 0) return false;
	    var from = moveBackward(pm.doc.path(head.path), head.offset, "char");
	    return pm.tr.delete(new _model.Pos(head.path, from), head).apply(pm.apply.scroll);
	  },

	  keys: {
	    all: ["Backspace(60)"],
	    mac: ["Ctrl-H(40)"]
	  }
	};

	// ;; #kind=command
	// Delete the word before the cursor, if the selection is empty and
	// the cursor isn't at the start of a textblock.
	//
	// **Keybindings:** Mod-Backspace, Alt-Backspace (Mac)
	baseCommands.deleteWordBefore = {
	  label: "Delete the word before the cursor",
	  run: function run(pm) {
	    var _pm$selection3 = pm.selection;
	    var head = _pm$selection3.head;
	    var empty = _pm$selection3.empty;

	    if (!empty || head.offset == 0) return false;
	    var from = moveBackward(pm.doc.path(head.path), head.offset, "word");
	    return pm.tr.delete(new _model.Pos(head.path, from), head).apply(pm.apply.scroll);
	  },

	  keys: {
	    all: ["Mod-Backspace(40)"],
	    mac: ["Alt-Backspace(40)"]
	  }
	};

	function moveForward(parent, offset, by) {
	  if (by != "char" && by != "word") _error.AssertionError.raise("Unknown motion unit: " + by);

	  var cat = null,
	      counted = 0;
	  for (;;) {
	    if (offset == parent.size) return offset;

	    var _parent$chunkAfter = parent.chunkAfter(offset);

	    var start = _parent$chunkAfter.start;
	    var node = _parent$chunkAfter.node;

	    if (!node.isText) return cat ? offset : offset + 1;

	    if (by == "char") {
	      for (var i = offset - start; i < node.text.length; i++) {
	        if (!(0, _char.isExtendingChar)(node.text.charAt(i + 1))) return offset + 1;
	        offset++;
	      }
	    } else if (by == "word") {
	      for (var i = offset - start; i < node.text.length; i++) {
	        var nextCharCat = (0, _char.charCategory)(node.text.charAt(i));
	        if (cat == null || counted == 1 && cat == "space") cat = nextCharCat;else if (cat != nextCharCat) return offset;
	        offset++;
	        counted++;
	      }
	    }
	  }
	}

	// ;; #kind=command
	// If the selection is empty and the cursor is at the end of a
	// textblock, move the node after it closer to the node with the
	// cursor (lifting it out of parents that aren't shared, moving it
	// into parents of the cursor block, or joining the two when they are
	// siblings).
	//
	// **Keybindings:** Delete, Mod-Delete
	baseCommands.joinForward = {
	  label: "Join with the block below",
	  run: function run(pm) {
	    var _pm$selection4 = pm.selection;
	    var head = _pm$selection4.head;
	    var empty = _pm$selection4.empty;

	    if (!empty || head.offset < pm.doc.path(head.path).size) return false;

	    // Find the node after this one
	    var after = undefined,
	        cut = undefined;
	    for (var i = head.path.length - 1; !after && i >= 0; i--) {
	      cut = head.shorten(i, 1);
	      var parent = pm.doc.path(cut.path);
	      if (cut.offset < parent.size) after = parent.child(cut.offset);
	    }

	    // If there is no node after this, there's nothing to do
	    if (!after) return false;

	    // If the node doesn't allow children, delete it
	    if (after.type.contains == null) return pm.tr.delete(cut, cut.move(1)).apply(pm.apply.scroll);

	    // Apply the joining algorithm
	    return deleteBarrier(pm, cut);
	  },

	  keys: ["Delete(30)", "Mod-Delete(30)"]
	};

	// ;; #kind=command
	// Delete the character after the cursor, if the selection is empty
	// and the cursor isn't at the end of its textblock.
	//
	// **Keybindings:** Delete, Ctrl-D (Mac)
	baseCommands.deleteCharAfter = {
	  label: "Delete a character after the cursor",
	  run: function run(pm) {
	    var _pm$selection5 = pm.selection;
	    var head = _pm$selection5.head;
	    var empty = _pm$selection5.empty;

	    if (!empty || head.offset == pm.doc.path(head.path).size) return false;
	    var to = moveForward(pm.doc.path(head.path), head.offset, "char");
	    return pm.tr.delete(head, new _model.Pos(head.path, to)).apply(pm.apply.scroll);
	  },

	  keys: {
	    all: ["Delete(60)"],
	    mac: ["Ctrl-D(60)"]
	  }
	};

	// ;; #kind=command
	// Delete the word after the cursor, if the selection is empty and the
	// cursor isn't at the end of a textblock.
	//
	// **Keybindings:** Mod-Delete, Ctrl-Alt-Backspace (Mac), Alt-Delete
	// (Mac), Alt-D (Mac)
	baseCommands.deleteWordAfter = {
	  label: "Delete a word after the cursor",
	  run: function run(pm) {
	    var _pm$selection6 = pm.selection;
	    var head = _pm$selection6.head;
	    var empty = _pm$selection6.empty;

	    if (!empty || head.offset == pm.doc.path(head.path).size) return false;
	    var to = moveForward(pm.doc.path(head.path), head.offset, "word");
	    return pm.tr.delete(head, new _model.Pos(head.path, to)).apply(pm.apply.scroll);
	  },

	  keys: {
	    all: ["Mod-Delete(40)"],
	    mac: ["Ctrl-Alt-Backspace(40)", "Alt-Delete(40)", "Alt-D(40)"]
	  }
	};

	function joinPointAbove(pm) {
	  var _pm$selection7 = pm.selection;
	  var node = _pm$selection7.node;
	  var from = _pm$selection7.from;

	  if (node) return (0, _transform.joinableBlocks)(pm.doc, from) ? from : null;else return (0, _transform.joinPoint)(pm.doc, from, -1);
	}

	// ;; #kind=command
	// Join the selected block or, if there is a text selection, the
	// closest ancestor block of the selection that can be joined, with
	// the sibling above it.
	//
	// **Keybindings:** Alt-Up
	baseCommands.joinUp = {
	  label: "Join with above block",
	  run: function run(pm) {
	    var point = joinPointAbove(pm),
	        isNode = pm.selection.node;
	    if (!point) return false;
	    pm.tr.join(point).apply();
	    if (isNode) pm.setNodeSelection(point.move(-1));
	  },
	  select: function select(pm) {
	    return joinPointAbove(pm);
	  },

	  menu: {
	    group: "block", rank: 80,
	    display: {
	      type: "icon",
	      width: 800, height: 900,
	      path: "M0 75h800v125h-800z M0 825h800v-125h-800z M250 400h100v-100h100v100h100v100h-100v100h-100v-100h-100z"
	    }
	  },
	  keys: ["Alt-Up"]
	};

	function joinPointBelow(pm) {
	  var _pm$selection8 = pm.selection;
	  var node = _pm$selection8.node;
	  var to = _pm$selection8.to;

	  if (node) return (0, _transform.joinableBlocks)(pm.doc, to) ? to : null;else return (0, _transform.joinPoint)(pm.doc, to, 1);
	}

	// ;; #kind=command
	// Join the selected block, or the closest ancestor of the selection
	// that can be joined, with the sibling after it.
	//
	// **Keybindings:** Alt-Down
	baseCommands.joinDown = {
	  label: "Join with below block",
	  run: function run(pm) {
	    var node = pm.selection.node;
	    var point = joinPointBelow(pm);
	    if (!point) return false;
	    pm.tr.join(point).apply();
	    if (node) pm.setNodeSelection(point.move(-1));
	  },
	  select: function select(pm) {
	    return joinPointBelow(pm);
	  },

	  keys: ["Alt-Down"]
	};

	// ;; #kind=command
	// Lift the selected block, or the closest ancestor block of the
	// selection that can be lifted, out of its parent node.
	//
	// **Keybindings:** Alt-Left
	baseCommands.lift = {
	  label: "Lift out of enclosing block",
	  run: function run(pm) {
	    var _pm$selection9 = pm.selection;
	    var from = _pm$selection9.from;
	    var to = _pm$selection9.to;

	    return pm.tr.lift(from, to).apply(pm.apply.scroll);
	  },
	  select: function select(pm) {
	    var _pm$selection10 = pm.selection;
	    var from = _pm$selection10.from;
	    var to = _pm$selection10.to;

	    return (0, _transform.canLift)(pm.doc, from, to);
	  },

	  menu: {
	    group: "block", rank: 75,
	    display: {
	      type: "icon",
	      width: 1024, height: 1024,
	      path: "M219 310v329q0 7-5 12t-12 5q-8 0-13-5l-164-164q-5-5-5-13t5-13l164-164q5-5 13-5 7 0 12 5t5 12zM1024 749v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12zM1024 530v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 310v109q0 7-5 12t-12 5h-621q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h621q7 0 12 5t5 12zM1024 91v109q0 7-5 12t-12 5h-987q-7 0-12-5t-5-12v-109q0-7 5-12t12-5h987q7 0 12 5t5 12z"
	    }
	  },
	  keys: ["Alt-Left"]
	};

	// ;; #kind=command
	// If the selection is in a node whose type has a truthy `isCode`
	// property, replace the selection with a newline character.
	//
	// **Keybindings:** Enter
	baseCommands.newlineInCode = {
	  label: "Insert newline",
	  run: function run(pm) {
	    var _pm$selection11 = pm.selection;
	    var from = _pm$selection11.from;
	    var to = _pm$selection11.to;
	    var node = _pm$selection11.node;var block = undefined;
	    if (!node && _model.Pos.samePath(from.path, to.path) && (block = pm.doc.path(from.path)).type.isCode && to.offset < block.size) return pm.tr.typeText("\n").apply(pm.apply.scroll);else return false;
	  },

	  keys: ["Enter(10)"]
	};

	// ;; #kind=command
	// If a content-less block node is selected, create an empty paragraph
	// before (if it is its parent's first child) or after it.
	//
	// **Keybindings:** Enter
	baseCommands.createParagraphNear = {
	  label: "Create a paragraph near the selected leaf block",
	  run: function run(pm) {
	    var _pm$selection12 = pm.selection;
	    var from = _pm$selection12.from;
	    var to = _pm$selection12.to;
	    var node = _pm$selection12.node;

	    if (!node || !node.isBlock || node.type.contains) return false;
	    var side = from.offset ? to : from;
	    pm.tr.insert(side, pm.schema.defaultTextblockType().create()).apply(pm.apply.scroll);
	    pm.setTextSelection(new _model.Pos(side.toPath(), 0));
	  },

	  keys: ["Enter(20)"]
	};

	// ;; #kind=command
	// If the cursor is in an empty textblock that can be lifted, lift the
	// block.
	//
	// **Keybindings:** Enter
	baseCommands.liftEmptyBlock = {
	  label: "Move current block up",
	  run: function run(pm) {
	    var _pm$selection13 = pm.selection;
	    var head = _pm$selection13.head;
	    var empty = _pm$selection13.empty;

	    if (!empty || head.offset > 0 || pm.doc.path(head.path).size) return false;
	    if (head.depth > 1) {
	      var shorter = head.shorten();
	      if (shorter.offset > 0 && shorter.offset < pm.doc.path(shorter.path).size - 1 && pm.tr.split(shorter).apply() !== false) return;
	    }
	    return pm.tr.lift(head).apply(pm.apply.scroll);
	  },

	  keys: ["Enter(30)"]
	};

	// ;; #kind=command
	// Split the parent block of the selection. If the selection is a text
	// selection, delete it.
	//
	// **Keybindings:** Enter
	baseCommands.splitBlock = {
	  label: "Split the current block",
	  run: function run(pm) {
	    var _pm$selection14 = pm.selection;
	    var from = _pm$selection14.from;
	    var to = _pm$selection14.to;
	    var node = _pm$selection14.node;var block = pm.doc.path(to.path);
	    if (node && node.isBlock) {
	      if (!from.offset) return false;
	      return pm.tr.split(from).apply(pm.apply.scroll);
	    } else {
	      var deflt = pm.schema.defaultTextblockType();
	      var type = to.offset == block.size ? deflt : null;
	      var tr = pm.tr.delete(from, to).split(from, 1, type);
	      if (to.offset < block.size && !from.offset && pm.doc.path(from.path).type != deflt) tr.setNodeType(from.shorten(), deflt);
	      return tr.apply(pm.apply.scroll);
	    }
	  },

	  keys: ["Enter(60)"]
	};

	function nodeAboveSelection(pm) {
	  var sel = pm.selection,
	      i = 0;
	  if (sel.node) return !!sel.from.depth && sel.from.shorten();
	  for (; i < sel.head.depth && i < sel.anchor.depth; i++) {
	    if (sel.head.path[i] != sel.anchor.path[i]) break;
	  }return i == 0 ? false : sel.head.shorten(i - 1);
	}

	// ;; #kind=command
	// Move the selection to the node wrapping the current selection, if
	// any. (Will not select the document node.)
	//
	// **Keybindings:** Esc
	baseCommands.selectParentNode = {
	  label: "Select parent node",
	  run: function run(pm) {
	    var node = nodeAboveSelection(pm);
	    if (!node) return false;
	    pm.setNodeSelection(node);
	  },
	  select: function select(pm) {
	    return nodeAboveSelection(pm);
	  },

	  menu: {
	    group: "block", rank: 90,
	    display: { type: "icon", text: "⬚", style: "font-weight: bold; vertical-align: 20%" }
	  },
	  keys: ["Esc"]
	};

	function moveSelectionBlock(pm, dir) {
	  var _pm$selection15 = pm.selection;
	  var from = _pm$selection15.from;
	  var to = _pm$selection15.to;
	  var node = _pm$selection15.node;

	  var side = dir > 0 ? to : from;
	  return (0, _selection.findSelectionFrom)(pm.doc, node && node.isBlock ? side : side.shorten(null, dir > 0 ? 1 : 0), dir);
	}

	function selectNodeHorizontally(pm, dir) {
	  var _pm$selection16 = pm.selection;
	  var empty = _pm$selection16.empty;
	  var node = _pm$selection16.node;
	  var from = _pm$selection16.from;
	  var to = _pm$selection16.to;

	  if (!empty && !node) return false;

	  if (node && node.isInline) {
	    pm.setTextSelection(dir > 0 ? to : from);
	    return true;
	  }

	  var parent = undefined;
	  if (!node && (parent = pm.doc.path(from.path)) && (dir > 0 ? from.offset < parent.size : from.offset)) {
	    var _ref = dir > 0 ? parent.chunkAfter(from.offset) : parent.chunkBefore(from.offset);

	    var nextNode = _ref.node;
	    var start = _ref.start;

	    if (nextNode.type.selectable && start == from.offset - (dir > 0 ? 0 : 1)) {
	      pm.setNodeSelection(dir < 0 ? from.move(-1) : from);
	      return true;
	    }
	    return false;
	  }

	  var next = moveSelectionBlock(pm, dir);
	  if (next && (next instanceof _selection.NodeSelection || node)) {
	    pm.setSelectionDirect(next);
	    return true;
	  }
	  return false;
	}

	// ;; #kind=command
	// Select the node directly before the cursor, if any.
	//
	// **Keybindings:** Left, Mod-Left
	baseCommands.selectNodeLeft = {
	  label: "Move the selection onto or out of the block to the left",
	  run: function run(pm) {
	    var done = selectNodeHorizontally(pm, -1);
	    if (done) pm.scrollIntoView();
	    return done;
	  },

	  keys: ["Left", "Mod-Left"]
	};

	// ;; #kind=command
	// Select the node directly after the cursor, if any.
	//
	// **Keybindings:** Right, Mod-Right
	baseCommands.selectNodeRight = {
	  label: "Move the selection onto or out of the block to the right",
	  run: function run(pm) {
	    var done = selectNodeHorizontally(pm, 1);
	    if (done) pm.scrollIntoView();
	    return done;
	  },

	  keys: ["Right", "Mod-Right"]
	};

	function selectNodeVertically(pm, dir) {
	  var _pm$selection17 = pm.selection;
	  var empty = _pm$selection17.empty;
	  var node = _pm$selection17.node;
	  var from = _pm$selection17.from;
	  var to = _pm$selection17.to;

	  if (!empty && !node) return false;

	  var leavingTextblock = true;
	  if (!node || node.isInline) leavingTextblock = (0, _selection.verticalMotionLeavesTextblock)(pm, dir > 0 ? to : from, dir);

	  if (leavingTextblock) {
	    var next = moveSelectionBlock(pm, dir);
	    if (next && next instanceof _selection.NodeSelection) {
	      pm.setSelectionDirect(next);
	      if (!node) pm.sel.lastNonNodePos = from;
	      return true;
	    }
	  }

	  if (!node) return false;

	  if (node.isInline) {
	    (0, _dompos.setDOMSelectionToPos)(pm, from);
	    return false;
	  }

	  var last = pm.sel.lastNonNodePos;
	  var beyond = (0, _selection.findSelectionFrom)(pm.doc, dir < 0 ? from : to, dir);
	  if (last && beyond && _model.Pos.samePath(last.path, beyond.from.path)) {
	    (0, _dompos.setDOMSelectionToPos)(pm, last);
	    return false;
	  }
	  pm.setSelectionDirect(beyond);
	  return true;
	}

	// ;; #kind=command
	// Select the node directly above the cursor, if any.
	//
	// **Keybindings:** Up
	baseCommands.selectNodeUp = {
	  label: "Move the selection onto or out of the block above",
	  run: function run(pm) {
	    var done = selectNodeVertically(pm, -1);
	    if (done !== false) pm.scrollIntoView();
	    return done;
	  },

	  keys: ["Up"]
	};

	// ;; #kind=command
	// Select the node directly below the cursor, if any.
	//
	// **Keybindings:** Down
	baseCommands.selectNodeDown = {
	  label: "Move the selection onto or out of the block below",
	  run: function run(pm) {
	    var done = selectNodeVertically(pm, 1);
	    if (done !== false) pm.scrollIntoView();
	    return done;
	  },

	  keys: ["Down"]
	};

	// ;; #kind=command
	// Undo the most recent change event, if any.
	//
	// **Keybindings:** Mod-Z
	baseCommands.undo = {
	  label: "Undo last change",
	  run: function run(pm) {
	    pm.scrollIntoView();return pm.history.undo();
	  },
	  select: function select(pm) {
	    return pm.history.undoDepth > 0;
	  },

	  menu: {
	    group: "history", rank: 10,
	    display: {
	      type: "icon",
	      width: 1024, height: 1024,
	      path: "M761 1024c113-206 132-520-313-509v253l-384-384 384-384v248c534-13 594 472 313 775z"
	    }
	  },
	  keys: ["Mod-Z"]
	};

	// ;; #kind=command
	// Redo the most recently undone change event, if any.
	//
	// **Keybindings:** Mod-Y, Shift-Mod-Z
	baseCommands.redo = {
	  label: "Redo last undone change",
	  run: function run(pm) {
	    pm.scrollIntoView();return pm.history.redo();
	  },
	  select: function select(pm) {
	    return pm.history.redoDepth > 0;
	  },

	  menu: {
	    group: "history", rank: 20,
	    display: {
	      type: "icon",
	      width: 1024, height: 1024,
	      path: "M576 248v-248l384 384-384 384v-253c-446-10-427 303-313 509-280-303-221-789 313-775z"
	    }
	  },
	  keys: ["Mod-Y", "Shift-Mod-Z"]
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isWordChar = isWordChar;
	exports.charCategory = charCategory;
	exports.isExtendingChar = isExtendingChar;
	var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;

	// Extending unicode characters. A series of a non-extending char +
	// any number of extending chars is treated as a single unit as far
	// as editing and measuring is concerned. This is not fully correct,
	// since some scripts/fonts/browsers also treat other configurations
	// of code points as a group.
	var extendingChar = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;

	function isWordChar(ch) {
	  return (/\w/.test(ch) || isExtendingChar(ch) || ch > "\x80" && (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
	  );
	}

	// Get the category of a given character. Either a "space",
	// a character that can be part of a word ("word"), or anything else ("other").
	function charCategory(ch) {
	  return (/\s/.test(ch) ? "space" : isWordChar(ch) ? "word" : "other"
	  );
	}

	function isExtendingChar(ch) {
	  return ch.charCodeAt(0) >= 768 && extendingChar.test(ch);
	}

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.NodeSelection = exports.TextSelection = exports.Selection = exports.SelectionState = exports.SelectionError = undefined;
	exports.rangeFromDOMLoose = rangeFromDOMLoose;
	exports.hasFocus = hasFocus;
	exports.findSelectionFrom = findSelectionFrom;
	exports.findSelectionNear = findSelectionNear;
	exports.findSelectionAtStart = findSelectionAtStart;
	exports.findSelectionAtEnd = findSelectionAtEnd;
	exports.verticalMotionLeavesTextblock = verticalMotionLeavesTextblock;

	var _model = __webpack_require__(3);

	var _error = __webpack_require__(7);

	var _dom = __webpack_require__(14);

	var _dompos = __webpack_require__(46);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// ;; Error type used to signal selection-related problems.

	var SelectionError = exports.SelectionError = function (_ProseMirrorError) {
	  _inherits(SelectionError, _ProseMirrorError);

	  function SelectionError() {
	    _classCallCheck(this, SelectionError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionError).apply(this, arguments));
	  }

	  return SelectionError;
	}(_error.ProseMirrorError);

	var SelectionState = exports.SelectionState = function () {
	  function SelectionState(pm, range) {
	    var _this2 = this;

	    _classCallCheck(this, SelectionState);

	    this.pm = pm;
	    this.range = range;

	    this.lastNonNodePos = null;
	    this.lastFocusTime = this.lastFastPollTime = 0;

	    this.polling = null;
	    this.lastAnchorNode = this.lastHeadNode = this.lastAnchorOffset = this.lastHeadOffset = null;
	    this.lastNode = null;

	    pm.content.addEventListener("focus", function () {
	      return _this2.receivedFocus();
	    });
	    this.poller = this.poller.bind(this);
	  }

	  _createClass(SelectionState, [{
	    key: "setAndSignal",
	    value: function setAndSignal(range, clearLast) {
	      this.set(range, clearLast);
	      // :: () #path=ProseMirror#events#selectionChange
	      // Indicates that the editor's selection has changed.
	      this.pm.signal("selectionChange");
	    }
	  }, {
	    key: "set",
	    value: function set(range, clearLast) {
	      this.range = range;
	      if (!range.node) this.lastNonNodePos = null;
	      if (clearLast !== false) this.lastAnchorNode = null;
	    }
	  }, {
	    key: "poller",
	    value: function poller() {
	      if (hasFocus(this.pm)) {
	        if (!this.pm.operation) this.readFromDOM();
	        this.polling = setTimeout(this.poller, 100);
	      } else {
	        this.polling = null;
	      }
	    }
	  }, {
	    key: "startPolling",
	    value: function startPolling() {
	      clearTimeout(this.polling);
	      this.polling = setTimeout(this.poller, 50);
	    }
	  }, {
	    key: "fastPoll",
	    value: function fastPoll() {
	      this.lastFastPollTime = Date.now();
	      this.startPolling();
	    }
	  }, {
	    key: "stopPolling",
	    value: function stopPolling() {
	      clearTimeout(this.polling);
	      this.polling = null;
	    }
	  }, {
	    key: "domChanged",
	    value: function domChanged() {
	      var sel = window.getSelection();
	      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset || sel.focusNode != this.lastHeadNode || sel.focusOffset != this.lastHeadOffset;
	    }
	  }, {
	    key: "storeDOMState",
	    value: function storeDOMState() {
	      var sel = window.getSelection();
	      this.lastAnchorNode = sel.anchorNode;this.lastAnchorOffset = sel.anchorOffset;
	      this.lastHeadNode = sel.focusNode;this.lastHeadOffset = sel.focusOffset;
	    }
	  }, {
	    key: "readFromDOM",
	    value: function readFromDOM() {
	      if (this.pm.input.composing || !hasFocus(this.pm) || !this.domChanged()) return false;

	      var sel = window.getSelection(),
	          doc = this.pm.doc;
	      var anchor = (0, _dompos.posFromDOM)(this.pm, sel.anchorNode, sel.anchorOffset);
	      var head = sel.isCollapsed ? anchor : (0, _dompos.posFromDOM)(this.pm, sel.focusNode, sel.focusOffset);

	      // Ignore selection changes that look like 'selection resets',
	      // caused by some browsers when an editable element is focused but
	      // does not have the selection (as happens for node selections),
	      // for example when the page gains focus.
	      //
	      // If we have a node selection, were recently focused, did not
	      // recently fast-poll, and have a collapsed selection at the start
	      // of the document, ignore it and reset to our stored selection.
	      if (this.range.node && sel.isCollapsed && this.lastFocusTime > Date.now() - 100 && this.lastFastPollTime < Date.now() - 100) {
	        var minPos = findSelectionAtStart(this.pm.doc, undefined, true);
	        if (minPos && anchor.cmp(minPos.anchor) == 0) return this.toDOM();
	      }

	      var newRange = findSelectionNear(doc, head, this.range.head && this.range.head.cmp(head) < 0 ? -1 : 1);
	      if (newRange instanceof TextSelection && doc.path(anchor.path).isTextblock) newRange = new TextSelection(anchor, newRange.head);
	      this.setAndSignal(newRange);

	      if (newRange instanceof NodeSelection || newRange.head.cmp(head) || newRange.anchor.cmp(anchor)) {
	        this.toDOM();
	      } else {
	        this.clearNode();
	        this.storeDOMState();
	      }
	      return true;
	    }
	  }, {
	    key: "toDOM",
	    value: function toDOM(takeFocus) {
	      if (this.range instanceof NodeSelection) this.nodeToDOM(takeFocus);else this.rangeToDOM(takeFocus);
	    }
	  }, {
	    key: "nodeToDOM",
	    value: function nodeToDOM(takeFocus) {
	      window.getSelection().removeAllRanges();
	      if (takeFocus) this.pm.content.focus();
	      var dom = (0, _dompos.pathToDOM)(this.pm.content, this.range.from.toPath());
	      if (dom != this.lastNode) {
	        this.clearNode();
	        dom.classList.add("ProseMirror-selectednode");
	        this.lastNode = dom;
	      }
	    }
	  }, {
	    key: "clearNode",
	    value: function clearNode() {
	      if (this.lastNode) {
	        this.lastNode.classList.remove("ProseMirror-selectednode");
	        this.lastNode = null;
	        return true;
	      }
	    }
	  }, {
	    key: "rangeToDOM",
	    value: function rangeToDOM(takeFocus) {
	      if (!this.clearNode() && !hasFocus(this.pm)) {
	        if (!takeFocus) return;
	        // See https://bugzilla.mozilla.org/show_bug.cgi?id=921444
	        else if (_dom.browser.gecko) this.pm.content.focus();
	      }
	      if (!this.domChanged()) return;

	      var content = this.pm.content;
	      var anchor = (0, _dompos.DOMFromPos)(content, this.range.anchor);
	      var head = (0, _dompos.DOMFromPos)(content, this.range.head);

	      var sel = window.getSelection(),
	          range = document.createRange();
	      if (sel.extend) {
	        range.setEnd(anchor.node, anchor.offset);
	        range.collapse(false);
	      } else {
	        if (this.range.anchor.cmp(this.range.head) > 0) {
	          var tmp = anchor;anchor = head;head = tmp;
	        }
	        range.setEnd(head.node, head.offset);
	        range.setStart(anchor.node, anchor.offset);
	      }
	      sel.removeAllRanges();
	      sel.addRange(range);
	      if (sel.extend) sel.extend(head.node, head.offset);
	      this.storeDOMState();
	    }
	  }, {
	    key: "receivedFocus",
	    value: function receivedFocus() {
	      this.lastFocusTime = Date.now();
	      if (this.polling == null) this.startPolling();
	    }
	  }]);

	  return SelectionState;
	}();

	// ;; An editor selection. Can be one of two selection types:
	// `TextSelection` and `NodeSelection`. Both have the properties
	// listed here, but also contain more information (such as the
	// selected [node](#NodeSelection.node) or the
	// [head](#TextSelection.head) and [anchor](#TextSelection.anchor)).

	var Selection = exports.Selection = function Selection() {
	  _classCallCheck(this, Selection);
	};

	// :: Pos #path=Selection.prototype.from
	// The start of the selection.

	// :: Pos #path=Selection.prototype.to
	// The end of the selection.

	// :: bool #path=Selection.empty
	// True if the selection is an empty text selection (head an anchor
	// are the same).

	// :: (other: Selection) → bool #path=Selection.eq
	// Test whether the selection is the same as another selection.

	// :: (doc: Node, mapping: Mappable) → Selection #path=Selection.map
	// Map this selection through a [mappable](#Mappable) thing. `doc`
	// should be the new document, to which we are mapping.

	// ;; A text selection represents a classical editor
	// selection, with a head (the moving side) and anchor (immobile
	// side), both of which point into textblock nodes. It can be empty (a
	// regular cursor position).

	var TextSelection = exports.TextSelection = function (_Selection) {
	  _inherits(TextSelection, _Selection);

	  // :: (Pos, ?Pos)
	  // Construct a text selection. When `head` is not given, it defaults
	  // to `anchor`.

	  function TextSelection(anchor, head) {
	    _classCallCheck(this, TextSelection);

	    // :: Pos
	    // The selection's immobile side (does not move when pressing
	    // shift-arrow).

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(TextSelection).call(this));

	    _this3.anchor = anchor;
	    // :: Pos
	    // The selection's mobile side (the side that moves when pressing
	    // shift-arrow).
	    _this3.head = head || anchor;
	    return _this3;
	  }

	  _createClass(TextSelection, [{
	    key: "eq",
	    value: function eq(other) {
	      return other instanceof TextSelection && !other.head.cmp(this.head) && !other.anchor.cmp(this.anchor);
	    }
	  }, {
	    key: "map",
	    value: function map(doc, mapping) {
	      var head = mapping.map(this.head).pos;
	      if (!doc.path(head.path).isTextblock) return findSelectionNear(doc, head);
	      var anchor = mapping.map(this.anchor).pos;
	      return new TextSelection(doc.path(anchor.path).isTextblock ? anchor : head, head);
	    }
	  }, {
	    key: "inverted",
	    get: function get() {
	      return this.anchor.cmp(this.head) > 0;
	    }
	  }, {
	    key: "from",
	    get: function get() {
	      return this.inverted ? this.head : this.anchor;
	    }
	  }, {
	    key: "to",
	    get: function get() {
	      return this.inverted ? this.anchor : this.head;
	    }
	  }, {
	    key: "empty",
	    get: function get() {
	      return this.anchor.cmp(this.head) == 0;
	    }
	  }]);

	  return TextSelection;
	}(Selection);

	// ;; A node selection is a selection that points at a
	// single node. All nodes marked [selectable](#NodeType.selectable)
	// can be the target of a node selection. In such an object, `from`
	// and `to` point directly before and after the selected node.

	var NodeSelection = exports.NodeSelection = function (_Selection2) {
	  _inherits(NodeSelection, _Selection2);

	  // :: (Pos, Pos, Node)
	  // Create a node selection. Does not verify the validity of its
	  // arguments. Use `ProseMirror.setNodeSelection` for an easier,
	  // error-checking way to create a node selection.

	  function NodeSelection(from, to, node) {
	    _classCallCheck(this, NodeSelection);

	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(NodeSelection).call(this));

	    _this4.from = from;
	    _this4.to = to;
	    // :: Node The selected node.
	    _this4.node = node;
	    return _this4;
	  }

	  _createClass(NodeSelection, [{
	    key: "eq",
	    value: function eq(other) {
	      return other instanceof NodeSelection && !this.from.cmp(other.from);
	    }
	  }, {
	    key: "map",
	    value: function map(doc, mapping) {
	      var from = mapping.map(this.from, 1).pos;
	      var to = mapping.map(this.to, -1).pos;
	      if (_model.Pos.samePath(from.path, to.path) && from.offset == to.offset - 1) {
	        var node = doc.nodeAfter(from);
	        if (node.type.selectable) return new NodeSelection(from, to, node);
	      }
	      return findSelectionNear(doc, from);
	    }
	  }, {
	    key: "empty",
	    get: function get() {
	      return false;
	    }
	  }]);

	  return NodeSelection;
	}(Selection);

	function rangeFromDOMLoose(pm) {
	  if (!hasFocus(pm)) return null;
	  var sel = window.getSelection();
	  return new TextSelection((0, _dompos.posFromDOM)(pm, sel.anchorNode, sel.anchorOffset, true), (0, _dompos.posFromDOM)(pm, sel.focusNode, sel.focusOffset, true));
	}

	function hasFocus(pm) {
	  var sel = window.getSelection();
	  return sel.rangeCount && (0, _dom.contains)(pm.content, sel.anchorNode);
	}

	function findSelectionIn(doc, path, offset, dir, text) {
	  var node = doc.path(path);
	  if (node.isTextblock) return new TextSelection(new _model.Pos(path, offset));

	  for (var i = offset + (dir > 0 ? 0 : -1); dir > 0 ? i < node.size : i >= 0; i += dir) {
	    var child = node.child(i);
	    if (!text && child.type.contains == null && child.type.selectable) return new NodeSelection(new _model.Pos(path, i), new _model.Pos(path, i + 1), child);
	    path.push(i);
	    var inside = findSelectionIn(doc, path, dir < 0 ? child.size : 0, dir, text);
	    if (inside) return inside;
	    path.pop();
	  }
	}

	// FIXME we'll need some awareness of bidi motion when determining block start and end

	function findSelectionFrom(doc, pos, dir, text) {
	  for (var path = pos.path.slice(), offset = pos.offset;;) {
	    var found = findSelectionIn(doc, path, offset, dir, text);
	    if (found) return found;
	    if (!path.length) break;
	    offset = path.pop() + (dir > 0 ? 1 : 0);
	  }
	}

	function findSelectionNear(doc, pos) {
	  var bias = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
	  var text = arguments[3];

	  var result = findSelectionFrom(doc, pos, bias, text) || findSelectionFrom(doc, pos, -bias, text);
	  if (!result) SelectionError("Searching for selection in invalid document " + doc);
	  return result;
	}

	function findSelectionAtStart(node) {
	  var path = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var text = arguments[2];

	  return findSelectionIn(node, path.slice(), 0, 1, text);
	}

	function findSelectionAtEnd(node) {
	  var path = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	  var text = arguments[2];

	  return findSelectionIn(node, path.slice(), node.size, -1, text);
	}

	function verticalMotionLeavesTextblock(pm, pos, dir) {
	  var dom = (0, _dompos.pathToDOM)(pm.content, pos.path);
	  var coords = (0, _dompos.coordsAtPos)(pm, pos);
	  for (var child = dom.firstChild; child; child = child.nextSibling) {
	    if (child.nodeType != 1) continue;
	    var boxes = child.getClientRects();
	    for (var i = 0; i < boxes.length; i++) {
	      var box = boxes[i];
	      if (dir < 0 ? box.bottom < coords.top : box.top > coords.bottom) return false;
	    }
	  }
	  return true;
	}

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pathFromDOM = pathFromDOM;
	exports.widthFromDOM = widthFromDOM;
	exports.posFromDOM = posFromDOM;
	exports.findByPath = findByPath;
	exports.pathToDOM = pathToDOM;
	exports.childContainer = childContainer;
	exports.DOMFromPos = DOMFromPos;
	exports.scrollIntoView = scrollIntoView;
	exports.posAtCoords = posAtCoords;
	exports.coordsAtPos = coordsAtPos;
	exports.setDOMSelectionToPos = setDOMSelectionToPos;
	exports.selectableNodeAbove = selectableNodeAbove;
	exports.handleNodeClick = handleNodeClick;

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _error = __webpack_require__(7);

	function pathFromDOM(pm, node) {
	  var path = [];
	  for (; node != pm.content;) {
	    var attr = node.getAttribute("pm-offset");
	    if (attr) path.unshift(+attr);
	    node = node.parentNode;
	  }
	  return path;
	}

	function widthFromDOM(dom) {
	  var attr = dom.getAttribute("pm-leaf");
	  return attr && attr != "true" ? +attr : 1;
	}

	function posFromDOM(pm, dom, domOffset, loose) {
	  if (!loose && pm.operation && pm.doc != pm.operation.doc) _error.AssertionError.raise("Fetching a position from an outdated DOM structure");

	  if (domOffset == null) {
	    domOffset = Array.prototype.indexOf.call(dom.parentNode.childNodes, dom);
	    dom = dom.parentNode;
	  }

	  var extraOffset = 0,
	      tag = undefined;
	  for (;;) {
	    var adjust = 0;
	    if (dom.nodeType == 3) {
	      extraOffset += domOffset;
	    } else if (dom.hasAttribute("pm-container")) {
	      break;
	    } else if (tag = dom.getAttribute("pm-inner-offset")) {
	      extraOffset += +tag;
	      adjust = -1;
	    } else if (domOffset && domOffset == dom.childNodes.length) {
	      adjust = 1;
	    }

	    var parent = dom.parentNode;
	    domOffset = adjust < 0 ? 0 : Array.prototype.indexOf.call(parent.childNodes, dom) + adjust;
	    dom = parent;
	  }

	  var path = pathFromDOM(pm, dom);
	  if (dom.hasAttribute("pm-leaf")) return _model.Pos.from(path, extraOffset + (domOffset ? 1 : 0));

	  var offset = 0;
	  for (var i = domOffset - 1; i >= 0; i--) {
	    var child = dom.childNodes[i];
	    if (child.nodeType == 3) {
	      if (loose) extraOffset += child.nodeValue.length;
	    } else if (tag = child.getAttribute("pm-offset")) {
	      offset = +tag + widthFromDOM(child);
	      break;
	    } else if (loose && !child.hasAttribute("pm-ignore")) {
	      extraOffset += child.textContent.length;
	    }
	  }
	  return new _model.Pos(path, offset + extraOffset);
	}

	function findByPath(node, n, fromEnd) {
	  var container = childContainer(node);
	  for (var ch = fromEnd ? container.lastChild : container.firstChild; ch; ch = fromEnd ? ch.previousSibling : ch.nextSibling) {
	    if (ch.nodeType != 1) continue;
	    var offset = ch.getAttribute("pm-offset");
	    if (offset && +offset == n) return ch;
	  }
	}

	function pathToDOM(parent, path) {
	  var node = parent;
	  for (var i = 0; i < path.length; i++) {
	    node = findByPath(node, path[i]);
	    if (!node) _error.AssertionError.raise("Failed to resolve path " + path.join("/"));
	  }
	  return node;
	}

	function childContainer(dom) {
	  return dom.hasAttribute("pm-container") ? dom : dom.querySelector("[pm-container]");
	}

	function findByOffset(node, offset, after) {
	  for (var ch = node.firstChild, i = 0, attr; ch; ch = ch.nextSibling, i++) {
	    if (ch.nodeType == 1 && (attr = ch.getAttribute("pm-offset"))) {
	      var diff = offset - +attr,
	          width = widthFromDOM(ch);
	      if (diff >= 0 && (after ? diff <= width : diff < width)) return { node: ch, offset: i, innerOffset: diff };
	    }
	  }
	}

	function leafAt(node, offset) {
	  for (;;) {
	    var child = node.firstChild;
	    if (!child) return { node: node, offset: offset };
	    if (child.nodeType != 1) return { node: child, offset: offset };
	    if (child.hasAttribute("pm-inner-offset")) {
	      var nodeOffset = 0;
	      for (;;) {
	        var nextSib = child.nextSibling,
	            nextOffset = undefined;
	        if (!nextSib || (nextOffset = +nextSib.getAttribute("pm-inner-offset")) >= offset) break;
	        child = nextSib;
	        nodeOffset = nextOffset;
	      }
	      offset -= nodeOffset;
	    }
	    node = child;
	  }
	}

	// Get a DOM element at a given position in the document.
	function DOMFromPos(parent, pos) {
	  var dom = childContainer(pathToDOM(parent, pos.path));
	  var found = findByOffset(dom, pos.offset, true),
	      inner = undefined;
	  if (!found) return { node: dom, offset: 0 };
	  if (found.node.getAttribute("pm-leaf") == "true" || !(inner = leafAt(found.node, found.innerOffset))) return { node: found.node.parentNode, offset: found.offset + (found.innerOffset ? 1 : 0) };else return inner;
	}

	function windowRect() {
	  return { left: 0, right: window.innerWidth,
	    top: 0, bottom: window.innerHeight };
	}

	var scrollMargin = 5;

	function scrollIntoView(pm, pos) {
	  if (!pos) pos = pm.sel.range.head || pm.sel.range.from;
	  var coords = coordsAtPos(pm, pos);
	  for (var parent = pm.content;; parent = parent.parentNode) {
	    var atBody = parent == document.body;
	    var rect = atBody ? windowRect() : parent.getBoundingClientRect();
	    var moveX = 0,
	        moveY = 0;
	    if (coords.top < rect.top) moveY = -(rect.top - coords.top + scrollMargin);else if (coords.bottom > rect.bottom) moveY = coords.bottom - rect.bottom + scrollMargin;
	    if (coords.left < rect.left) moveX = -(rect.left - coords.left + scrollMargin);else if (coords.right > rect.right) moveX = coords.right - rect.right + scrollMargin;
	    if (moveX || moveY) {
	      if (atBody) window.scrollBy(moveX, moveY);
	    } else {
	      if (moveY) parent.scrollTop += moveY;
	      if (moveX) parent.scrollLeft += moveX;
	    }
	    if (atBody) break;
	  }
	}

	function findOffsetInNode(node, coords) {
	  var closest = undefined,
	      dyClosest = 1e8,
	      coordsClosest = undefined,
	      offset = 0;
	  for (var child = node.firstChild, i = 0; child; child = child.nextSibling, i++) {
	    var rects = undefined;
	    if (child.nodeType == 1) rects = child.getClientRects();else if (child.nodeType == 3) rects = textRects(child);else continue;

	    for (var _i = 0; _i < rects.length; _i++) {
	      var rect = rects[_i];
	      if (rect.left <= coords.left && rect.right >= coords.left) {
	        var dy = rect.top > coords.top ? rect.top - coords.top : rect.bottom < coords.top ? coords.top - rect.bottom : 0;
	        if (dy < dyClosest) {
	          // FIXME does not group by row
	          closest = child;
	          dyClosest = dy;
	          coordsClosest = dy ? { left: coords.left, top: rect.top } : coords;
	          if (child.nodeType == 1 && !child.firstChild) offset = _i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0);
	          continue;
	        }
	      }
	      if (!closest && (coords.top >= rect.bottom || coords.top >= rect.top && coords.left >= rect.right)) offset = _i + 1;
	    }
	  }
	  if (!closest) return { node: node, offset: offset };
	  if (closest.nodeType == 3) return findOffsetInText(closest, coordsClosest);
	  if (closest.firstChild) return findOffsetInNode(closest, coordsClosest);
	  return { node: node, offset: offset };
	}

	function findOffsetInText(node, coords) {
	  var len = node.nodeValue.length;
	  var range = document.createRange();
	  for (var i = 0; i < len; i++) {
	    range.setEnd(node, i + 1);
	    range.setStart(node, i);
	    var rect = range.getBoundingClientRect();
	    if (rect.top == rect.bottom) continue;
	    if (rect.left <= coords.left && rect.right >= coords.left && rect.top <= coords.top && rect.bottom >= coords.top) return { node: node, offset: i + (coords.left >= (rect.left + rect.right) / 2 ? 1 : 0) };
	  }
	  return { node: node, offset: 0 };
	}

	// Given an x,y position on the editor, get the position in the document.
	function posAtCoords(pm, coords) {
	  var elt = document.elementFromPoint(coords.left, coords.top + 1);
	  if (!(0, _dom.contains)(pm.content, elt)) return null;

	  if (!elt.firstChild) elt = elt.parentNode;

	  var _findOffsetInNode = findOffsetInNode(elt, coords);

	  var node = _findOffsetInNode.node;
	  var offset = _findOffsetInNode.offset;

	  return posFromDOM(pm, node, offset);
	}

	function textRect(node, from, to) {
	  var range = document.createRange();
	  range.setEnd(node, to);
	  range.setStart(node, from);
	  return range.getBoundingClientRect();
	}

	function textRects(node) {
	  var range = document.createRange();
	  range.setEnd(node, node.nodeValue.length);
	  range.setStart(node, 0);
	  return range.getClientRects();
	}

	// Given a position in the document model, get a bounding box of the character at
	// that position, relative to the window.
	function coordsAtPos(pm, pos) {
	  var _DOMFromPos = DOMFromPos(pm.content, pos);

	  var node = _DOMFromPos.node;
	  var offset = _DOMFromPos.offset;

	  var side = undefined,
	      rect = undefined;
	  if (node.nodeType == 3) {
	    if (offset < node.nodeValue.length) {
	      rect = textRect(node, offset, offset + 1);
	      side = "left";
	    }
	    if ((!rect || rect.left == rect.right) && offset) {
	      rect = textRect(node, offset - 1, offset);
	      side = "right";
	    }
	  } else if (node.firstChild) {
	    if (offset < node.childNodes.length) {
	      var child = node.childNodes[offset];
	      rect = child.nodeType == 3 ? textRect(child, 0, child.nodeValue.length) : child.getBoundingClientRect();
	      side = "left";
	    }
	    if ((!rect || rect.left == rect.right) && offset) {
	      var child = node.childNodes[offset - 1];
	      rect = child.nodeType == 3 ? textRect(child, 0, child.nodeValue.length) : child.getBoundingClientRect();
	      side = "right";
	    }
	  } else {
	    rect = node.getBoundingClientRect();
	    side = "left";
	  }
	  var x = rect[side];
	  return { top: rect.top, bottom: rect.bottom, left: x, right: x };
	}

	function setDOMSelectionToPos(pm, pos) {
	  var _DOMFromPos2 = DOMFromPos(pm.content, pos);

	  var node = _DOMFromPos2.node;
	  var offset = _DOMFromPos2.offset;

	  var range = document.createRange();
	  range.setEnd(node, offset);
	  range.setStart(node, offset);
	  var sel = window.getSelection();
	  sel.removeAllRanges();
	  sel.addRange(range);
	}

	// ;; #path=NodeType #kind=class #noAnchor
	// You can add several properties to [node types](#NodeType) to
	// influence the way the editor interacts with them.

	// :: (node: Node, path: [number], dom: DOMNode, coords: {left: number, top: number}) → ?Pos
	// #path=NodeType.prototype.countCoordsAsChild
	// Specifies that, if this node is clicked, a child node might
	// actually be meant. This is used to, for example, make clicking a
	// list marker (which, in the DOM, is part of the list node) select
	// the list item it belongs to. Should return null if the given
	// coordinates don't refer to a child node, or the [position](#Pos)
	// before the child otherwise.

	function selectableNodeAbove(pm, dom, coords, liberal) {
	  for (; dom && dom != pm.content; dom = dom.parentNode) {
	    if (dom.hasAttribute("pm-offset")) {
	      var path = pathFromDOM(pm, dom),
	          node = pm.doc.path(path);
	      if (node.type.countCoordsAsChild) {
	        var result = node.type.countCoordsAsChild(node, path, dom, coords);
	        if (result) return result;
	      }
	      // Leaf nodes are implicitly clickable
	      if ((liberal || node.type.contains == null) && node.type.selectable) return _model.Pos.from(path);
	      if (!liberal) return null;
	    }
	  }
	}

	// :: (pm: ProseMirror, event: MouseEvent, path: [number], node: Node) → bool
	// #path=NodeType.prototype.handleClick
	// If a node is directly clicked (that is, the click didn't land in a
	// DOM node belonging to a child node), and its type has a
	// `handleClick` method, that method is given a chance to handle the
	// click. The method is called, and should return `false` if it did
	// _not_ handle the click.
	//
	// The `event` passed is the event for `"mousedown"`, but calling
	// `preventDefault` on it has no effect, since this method is only
	// called after a corresponding `"mouseup"` has occurred and
	// ProseMirror has determined that this is not a drag or multi-click
	// event.

	// :: (pm: ProseMirror, event: MouseEvent, path: [number], node: Node) → bool
	// #path=NodeType.prototype.handleContextMenu
	//
	// When the [context
	// menu](https://developer.mozilla.org/en-US/docs/Web/Events/contextmenu)
	// is activated in the editable context, nodes that the clicked
	// position falls inside of get a chance to react to it. Node types
	// may define a `handleContextMenu` method, which will be called when
	// present, first on inner nodes and then up the document tree, until
	// one of the methods returns something other than `false`.
	//
	// The handlers can inspect `event.target` to figure out whether they
	// were directly clicked, and may call `event.preventDefault()` to
	// prevent the native context menu.

	function handleNodeClick(pm, type, event, direct) {
	  for (var dom = event.target; dom && dom != pm.content; dom = dom.parentNode) {
	    if (dom.hasAttribute("pm-offset")) {
	      var path = pathFromDOM(pm, dom),
	          node = pm.doc.path(path);
	      var handled = node.type[type] && node.type[type](pm, event, path, node) !== false;
	      if (direct || handled) return handled;
	    }
	  }
	}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.draw = draw;
	exports.redraw = redraw;

	var _model = __webpack_require__(3);

	var _format = __webpack_require__(35);

	var _dom = __webpack_require__(14);

	var _main = __webpack_require__(19);

	var _dompos = __webpack_require__(46);

	// FIXME clean up threading of path and offset, maybe remove from DOM renderer entirely

	function options(path, ranges) {
	  return {
	    onRender: function onRender(node, dom, offset) {
	      if (!node.isText && node.type.contains == null) {
	        dom.contentEditable = false;
	        if (node.isBlock) dom.setAttribute("pm-leaf", "true");
	      }
	      if (node.isBlock && offset != null) dom.setAttribute("pm-offset", offset);
	      if (node.isTextblock) adjustTrailingHacks(dom, node);

	      return dom;
	    },
	    onContainer: function onContainer(node) {
	      node.setAttribute("pm-container", true);
	    },
	    renderInlineFlat: function renderInlineFlat(node, dom, offset) {
	      ranges.advanceTo(new _model.Pos(path, offset));
	      var end = new _model.Pos(path, offset + node.width);
	      var nextCut = ranges.nextChangeBefore(end);

	      var inner = dom,
	          wrapped = undefined;
	      for (var i = 0; i < node.marks.length; i++) {
	        inner = inner.firstChild;
	      }if (dom.nodeType != 1) {
	        dom = (0, _dom.elt)("span", null, dom);
	        if (!nextCut) wrapped = dom;
	      }
	      if (!wrapped && (nextCut || ranges.current.length)) {
	        wrapped = inner == dom ? dom = (0, _dom.elt)("span", null, inner) : inner.parentNode.appendChild((0, _dom.elt)("span", null, inner));
	      }

	      dom.setAttribute("pm-offset", offset);
	      if (node.type.contains == null) dom.setAttribute("pm-leaf", node.isText ? node.width : "true");

	      var inlineOffset = 0;
	      while (nextCut) {
	        var size = nextCut - offset;
	        var split = splitSpan(wrapped, size);
	        if (ranges.current.length) split.className = ranges.current.join(" ");
	        split.setAttribute("pm-inner-offset", inlineOffset);
	        inlineOffset += size;
	        offset += size;
	        ranges.advanceTo(new _model.Pos(path, offset));
	        if (!(nextCut = ranges.nextChangeBefore(end))) wrapped.setAttribute("pm-inner-offset", inlineOffset);
	      }

	      if (ranges.current.length) wrapped.className = ranges.current.join(" ");
	      return dom;
	    },

	    document: document, path: path
	  };
	}

	function splitSpan(span, at) {
	  var textNode = span.firstChild,
	      text = textNode.nodeValue;
	  var newNode = span.parentNode.insertBefore((0, _dom.elt)("span", null, text.slice(0, at)), span);
	  textNode.nodeValue = text.slice(at);
	  return newNode;
	}

	function draw(pm, doc) {
	  pm.content.textContent = "";
	  pm.content.appendChild((0, _format.toDOM)(doc, options([], pm.ranges.activeRangeTracker())));
	}

	function adjustTrailingHacks(dom, node) {
	  var needs = node.size == 0 || node.lastChild.type.isBR || node.type.isCode && node.lastChild.isText && /\n$/.test(node.lastChild.text) ? "br" : !node.lastChild.isText && node.lastChild.type.contains == null ? "text" : null;
	  var last = dom.lastChild;
	  var has = !last || last.nodeType != 1 || !last.hasAttribute("pm-ignore") ? null : last.nodeName == "BR" ? "br" : "text";
	  if (needs != has) {
	    if (has) dom.removeChild(last);
	    if (needs) dom.appendChild(needs == "br" ? (0, _dom.elt)("br", { "pm-ignore": "trailing-break" }) : (0, _dom.elt)("span", { "pm-ignore": "cursor-text" }, ""));
	  }
	}

	function findNodeIn(iter, node) {
	  var copy = iter.copy();
	  for (var child; child = copy.next().value;) {
	    if (child == node) return child;
	  }
	}

	function movePast(dom) {
	  var next = dom.nextSibling;
	  dom.parentNode.removeChild(dom);
	  return next;
	}

	function redraw(pm, dirty, doc, prev) {
	  if (dirty.get(prev) == _main.DIRTY_REDRAW) return draw(pm, doc);

	  var opts = options([], pm.ranges.activeRangeTracker());

	  function scan(dom, node, prev) {
	    var iNode = node.iter(),
	        iPrev = prev.iter(),
	        pChild = iPrev.next().value;
	    var domPos = dom.firstChild;

	    for (var child; child = iNode.next().value;) {
	      var offset = iNode.offset - child.width,
	          matching = undefined,
	          reuseDOM = undefined;
	      if (!node.isTextblock) opts.path.push(offset);

	      if (pChild == child) {
	        matching = pChild;
	      } else if (matching = findNodeIn(iPrev, child)) {
	        while (pChild != matching) {
	          pChild = iPrev.next().value;
	          domPos = movePast(domPos);
	        }
	      }

	      if (matching && !dirty.get(matching)) {
	        reuseDOM = true;
	      } else if (pChild && !child.isText && child.sameMarkup(pChild) && dirty.get(pChild) != _main.DIRTY_REDRAW) {
	        reuseDOM = true;
	        if (pChild.type.contains) scan((0, _dompos.childContainer)(domPos), child, pChild);
	      } else {
	        var rendered = (0, _format.nodeToDOM)(child, opts, offset);
	        dom.insertBefore(rendered, domPos);
	        reuseDOM = false;
	      }

	      if (reuseDOM) {
	        domPos.setAttribute("pm-offset", offset);
	        domPos = domPos.nextSibling;
	        pChild = iPrev.next().value;
	      }
	      if (!node.isTextblock) opts.path.pop();
	    }

	    while (pChild) {
	      domPos = movePast(domPos);
	      pChild = iPrev.next().value;
	    }
	    if (node.isTextblock) adjustTrailingHacks(dom, node);
	  }
	  scan(pm.content, doc, prev);
	}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Input = undefined;
	exports.dispatchKey = dispatchKey;

	var _browserkeymap = __webpack_require__(21);

	var _browserkeymap2 = _interopRequireDefault(_browserkeymap);

	var _model = __webpack_require__(3);

	var _format = __webpack_require__(35);

	var _capturekeys = __webpack_require__(49);

	var _dom = __webpack_require__(14);

	var _domchange = __webpack_require__(50);

	var _selection = __webpack_require__(45);

	var _dompos = __webpack_require__(46);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var stopSeq = null;

	// A collection of DOM events that occur within the editor, and callback functions
	// to invoke when the event fires.
	var handlers = {};

	var Input = exports.Input = function () {
	  function Input(pm) {
	    var _this = this;

	    _classCallCheck(this, Input);

	    this.pm = pm;
	    this.baseKeymap = null;

	    this.keySeq = null;

	    // When the user is creating a composed character,
	    // this is set to a Composing instance.
	    this.composing = null;
	    this.mouseDown = null;
	    this.shiftKey = this.updatingComposition = false;
	    this.skipInput = 0;

	    this.draggingFrom = false;

	    this.keymaps = [];
	    this.defaultKeymap = null;

	    this.storedMarks = null;

	    this.dropTarget = pm.wrapper.appendChild((0, _dom.elt)("div", { class: "ProseMirror-drop-target" }));

	    var _loop = function _loop(event) {
	      var handler = handlers[event];
	      pm.content.addEventListener(event, function (e) {
	        return handler(pm, e);
	      });
	    };

	    for (var event in handlers) {
	      _loop(event);
	    }

	    pm.on("selectionChange", function () {
	      return _this.storedMarks = null;
	    });
	  }

	  _createClass(Input, [{
	    key: "maybeAbortComposition",
	    value: function maybeAbortComposition() {
	      if (this.composing && !this.updatingComposition) {
	        if (this.composing.finished) {
	          finishComposing(this.pm);
	        } else {
	          // Toggle selection to force end of composition
	          this.composing = null;
	          this.skipInput++;
	          var sel = window.getSelection();
	          if (sel.rangeCount) {
	            var range = sel.getRangeAt(0);
	            sel.removeAllRanges();
	            sel.addRange(range);
	          }
	        }
	        return true;
	      }
	    }
	  }]);

	  return Input;
	}();

	// Dispatch a key press to the internal keymaps, which will override the default
	// DOM behavior.

	function dispatchKey(pm, name, e) {
	  var seq = pm.input.keySeq;
	  // If the previous key should be used in sequence with this one, modify the name accordingly.
	  if (seq) {
	    if (_browserkeymap2.default.isModifierKey(name)) return true;
	    clearTimeout(stopSeq);
	    stopSeq = setTimeout(function () {
	      if (pm.input.keySeq == seq) pm.input.keySeq = null;
	    }, 50);
	    name = seq + " " + name;
	  }

	  var handle = function handle(bound) {
	    if (bound === false) return "nothing";
	    if (bound == "...") return "multi";
	    if (bound == null) return false;

	    var result = false;
	    if (Array.isArray(bound)) {
	      for (var i = 0; result === false && i < bound.length; i++) {
	        result = handle(bound[i]);
	      }
	    } else if (typeof bound == "string") {
	      result = pm.execCommand(bound);
	    } else {
	      result = bound(pm);
	    }
	    return result == false ? false : "handled";
	  };

	  var result = undefined;
	  for (var i = 0; !result && i < pm.input.keymaps.length; i++) {
	    result = handle(pm.input.keymaps[i].map.lookup(name, pm));
	  }if (!result) result = handle(pm.input.baseKeymap.lookup(name, pm)) || handle(_capturekeys.captureKeys.lookup(name));

	  // If the key should be used in sequence with the next key, store the keyname internally.
	  if (result == "multi") pm.input.keySeq = name;

	  if (result == "handled" || result == "multi") e.preventDefault();

	  if (seq && !result && /\'$/.test(name)) {
	    e.preventDefault();
	    return true;
	  }
	  return !!result;
	}

	handlers.keydown = function (pm, e) {
	  // :: () #path=ProseMirror#events#interaction
	  // Fired when the user interacts with the editor, for example by
	  // clicking on it or pressing a key while it is focused. Mostly
	  // useful for closing or resetting transient UI state such as open
	  // menus.
	  pm.signal("interaction");
	  if (e.keyCode == 16) pm.input.shiftKey = true;
	  if (pm.input.composing) return;
	  var name = _browserkeymap2.default.keyName(e);
	  if (name && dispatchKey(pm, name, e)) return;
	  pm.sel.fastPoll();
	};

	handlers.keyup = function (pm, e) {
	  if (e.keyCode == 16) pm.input.shiftKey = false;
	};

	// : (ProseMirror, TextSelection, string)
	// Insert text into a document.
	function inputText(pm, range, text) {
	  if (range.empty && !text) return false;
	  var marks = pm.input.storedMarks || pm.doc.marksAt(range.from);
	  pm.tr.replaceWith(range.from, range.to, pm.schema.text(text, marks)).apply({ scrollIntoView: true });
	  // :: () #path=ProseMirror#events#textInput
	  // Fired when the user types text into the editor.
	  pm.signal("textInput", text);
	}

	handlers.keypress = function (pm, e) {
	  if (pm.input.composing || !e.charCode || e.ctrlKey && !e.altKey || _dom.browser.mac && e.metaKey) return;
	  if (dispatchKey(pm, _browserkeymap2.default.keyName(e))) return;
	  var sel = pm.selection;
	  if (sel.node && sel.node.contains == null) {
	    pm.tr.delete(sel.from, sel.to).apply();
	    sel = pm.selection;
	  }
	  inputText(pm, sel, String.fromCharCode(e.charCode));
	  e.preventDefault();
	};

	function selectClickedNode(pm, e) {
	  var pos = (0, _dompos.selectableNodeAbove)(pm, e.target, { left: e.clientX, top: e.clientY }, true);
	  if (!pos) return pm.sel.fastPoll();

	  var _pm$selection = pm.selection;
	  var node = _pm$selection.node;
	  var from = _pm$selection.from;

	  if (node && pos.depth >= from.depth && pos.shorten(from.depth).cmp(from) == 0) {
	    if (from.depth == 0) return pm.sel.fastPoll();
	    pos = from.shorten();
	  }

	  pm.setNodeSelection(pos);
	  pm.focus();
	  e.preventDefault();
	}

	var lastClick = 0,
	    oneButLastClick = 0;

	function handleTripleClick(pm, e) {
	  e.preventDefault();
	  var pos = (0, _dompos.selectableNodeAbove)(pm, e.target, { left: e.clientX, top: e.clientY }, true);
	  if (pos) {
	    var node = pm.doc.nodeAfter(pos);
	    if (node.isBlock && !node.isTextblock) {
	      pm.setNodeSelection(pos);
	    } else {
	      var path = node.isInline ? pos.path : pos.toPath();
	      if (node.isInline) node = pm.doc.path(path);
	      pm.setTextSelection(new _model.Pos(path, 0), new _model.Pos(path, node.size));
	    }
	    pm.focus();
	  }
	}

	handlers.mousedown = function (pm, e) {
	  pm.signal("interaction");
	  var now = Date.now(),
	      doubleClick = now - lastClick < 500,
	      tripleClick = now - oneButLastClick < 600;
	  oneButLastClick = lastClick;
	  lastClick = now;

	  if (tripleClick) handleTripleClick(pm, e);else pm.input.mouseDown = new MouseDown(pm, e, doubleClick);
	};

	var MouseDown = function () {
	  function MouseDown(pm, event, doubleClick) {
	    _classCallCheck(this, MouseDown);

	    this.pm = pm;
	    this.event = event;
	    this.leaveToBrowser = pm.input.shiftKey || doubleClick;

	    var path = (0, _dompos.pathFromDOM)(pm, event.target),
	        node = pm.doc.path(path);
	    this.mightDrag = node.type.draggable || node == pm.sel.range.node ? path : null;
	    if (this.mightDrag) {
	      event.target.draggable = true;
	      if (_dom.browser.gecko && (this.setContentEditable = !event.target.hasAttribute("contentEditable"))) event.target.setAttribute("contentEditable", "false");
	    }

	    this.x = event.clientX;this.y = event.clientY;

	    addEventListener("mouseup", this.up = this.up.bind(this));
	    addEventListener("mousemove", this.move = this.move.bind(this));
	    pm.sel.fastPoll();
	  }

	  _createClass(MouseDown, [{
	    key: "done",
	    value: function done() {
	      removeEventListener("mouseup", this.up);
	      removeEventListener("mousemove", this.move);
	      if (this.mightDrag) {
	        this.event.target.draggable = false;
	        if (_dom.browser.gecko && this.setContentEditable) this.event.target.removeAttribute("contentEditable");
	      }
	    }
	  }, {
	    key: "up",
	    value: function up() {
	      this.done();

	      if (this.leaveToBrowser) {
	        this.pm.sel.fastPoll();
	      } else if (this.event.ctrlKey) {
	        selectClickedNode(this.pm, this.event);
	      } else if (!(0, _dompos.handleNodeClick)(this.pm, "handleClick", this.event, true)) {
	        var pos = (0, _dompos.selectableNodeAbove)(this.pm, this.event.target, { left: this.x, top: this.y });
	        if (pos) {
	          this.pm.setNodeSelection(pos);
	          this.pm.focus();
	        } else {
	          this.pm.sel.fastPoll();
	        }
	      }
	    }
	  }, {
	    key: "move",
	    value: function move(event) {
	      if (!this.leaveToBrowser && (Math.abs(this.x - event.clientX) > 4 || Math.abs(this.y - event.clientY) > 4)) this.leaveToBrowser = true;
	      this.pm.sel.fastPoll();
	    }
	  }]);

	  return MouseDown;
	}();

	handlers.touchdown = function (pm) {
	  pm.sel.fastPoll();
	};

	handlers.contextmenu = function (pm, e) {
	  (0, _dompos.handleNodeClick)(pm, "handleContextMenu", e, false);
	};

	// A class to track state while creating a composed character.

	var Composing = function Composing(pm, data) {
	  _classCallCheck(this, Composing);

	  this.finished = false;
	  this.context = (0, _domchange.textContext)(data);
	  this.data = data;
	  this.endData = null;
	  var range = pm.selection;
	  if (data) {
	    var path = range.head.path,
	        line = pm.doc.path(path).textContent;
	    var found = line.indexOf(data, range.head.offset - data.length);
	    if (found > -1 && found <= range.head.offset + data.length) range = new _selection.TextSelection(new _model.Pos(path, found), new _model.Pos(path, found + data.length));
	  }
	  this.range = range;
	};

	handlers.compositionstart = function (pm, e) {
	  if (pm.input.maybeAbortComposition()) return;

	  pm.flush();
	  pm.input.composing = new Composing(pm, e.data);
	  var above = pm.selection.head.shorten();
	  pm.markRangeDirty({ from: above, to: above.move(1) });
	};

	handlers.compositionupdate = function (pm, e) {
	  var info = pm.input.composing;
	  if (info && info.data != e.data) {
	    info.data = e.data;
	    pm.input.updatingComposition = true;
	    inputText(pm, info.range, info.data);
	    pm.input.updatingComposition = false;
	    info.range = new _selection.TextSelection(info.range.from, info.range.from.move(info.data.length));
	  }
	};

	handlers.compositionend = function (pm, e) {
	  var info = pm.input.composing;
	  if (info) {
	    pm.input.composing.finished = true;
	    pm.input.composing.endData = e.data;
	    setTimeout(function () {
	      if (pm.input.composing == info) finishComposing(pm);
	    }, 20);
	  }
	};

	function finishComposing(pm) {
	  var info = pm.input.composing;
	  var text = (0, _domchange.textInContext)(info.context, info.endData);
	  var range = (0, _selection.rangeFromDOMLoose)(pm);
	  pm.ensureOperation();
	  pm.input.composing = null;
	  if (text != info.data) inputText(pm, info.range, text);
	  if (range && !range.eq(pm.sel.range)) pm.setSelectionDirect(range);
	}

	handlers.input = function (pm) {
	  if (pm.input.skipInput) return --pm.input.skipInput;

	  if (pm.input.composing) {
	    if (pm.input.composing.finished) finishComposing(pm);
	    return;
	  }

	  pm.startOperation({ readSelection: false });
	  (0, _domchange.applyDOMChange)(pm);
	  pm.scrollIntoView();
	};

	var lastCopied = null;

	function setCopied(doc, from, to, dataTransfer) {
	  var fragment = doc.sliceBetween(from, to);
	  lastCopied = { doc: doc, from: from, to: to,
	    schema: doc.type.schema,
	    html: (0, _format.toHTML)(fragment),
	    text: (0, _format.toText)(fragment) };
	  if (dataTransfer) {
	    dataTransfer.clearData();
	    dataTransfer.setData("text/html", lastCopied.html);
	    dataTransfer.setData("text/plain", lastCopied.text);
	  }
	}

	function getCopied(pm, dataTransfer, plainText) {
	  var txt = dataTransfer.getData("text/plain");
	  var html = dataTransfer.getData("text/html");
	  if (!html && !txt) return null;
	  var doc = undefined;
	  if (plainText && txt) {
	    doc = (0, _format.fromText)(pm.schema, pm.signalPipelined("transformPastedText", txt));
	  } else if (lastCopied && lastCopied.html == html && lastCopied.schema == pm.schema) {
	    return lastCopied;
	  } else if (html) {
	    doc = (0, _format.fromHTML)(pm.schema, pm.signalPipelined("transformPastedHTML", html));
	  } else {
	    doc = (0, _format.parseFrom)(pm.schema, pm.signalPipelined("transformPastedText", txt), (0, _format.knownSource)("markdown") ? "markdown" : "text");
	  }
	  return { doc: doc, from: (0, _selection.findSelectionAtStart)(doc).from, to: (0, _selection.findSelectionAtEnd)(doc).to };
	}

	handlers.copy = handlers.cut = function (pm, e) {
	  var _pm$selection2 = pm.selection;
	  var from = _pm$selection2.from;
	  var to = _pm$selection2.to;
	  var empty = _pm$selection2.empty;

	  if (empty) return;
	  setCopied(pm.doc, from, to, e.clipboardData);
	  if (e.clipboardData) {
	    e.preventDefault();
	    if (e.type == "cut" && !empty) pm.tr.delete(from, to).apply();
	  }
	};

	// :: (text: string) → string #path=ProseMirror#events#transformPastedText
	// Fired when plain text is pasted. Handlers must return the given
	// string or a [transformed](#EventMixin.signalPipelined) version of
	// it.

	// :: (html: string) → string #path=ProseMirror#events#transformPastedHTML
	// Fired when html content is pasted. Handlers must return the given
	// string or a [transformed](#EventMixin.signalPipelined) version of
	// it.

	handlers.paste = function (pm, e) {
	  if (!e.clipboardData) return;
	  var sel = pm.selection;
	  var fragment = getCopied(pm, e.clipboardData, pm.input.shiftKey);
	  if (fragment) {
	    e.preventDefault();
	    pm.tr.replace(sel.from, sel.to, fragment.doc, fragment.from, fragment.to).apply();
	    pm.scrollIntoView();
	  }
	};

	handlers.dragstart = function (pm, e) {
	  var mouseDown = pm.input.mouseDown;
	  if (mouseDown) mouseDown.done();

	  if (!e.dataTransfer) return;

	  var _pm$selection3 = pm.selection;
	  var from = _pm$selection3.from;
	  var to = _pm$selection3.to;
	  var empty = _pm$selection3.empty;var fragment = undefined;
	  var pos = !empty && pm.posAtCoords({ left: e.clientX, top: e.clientY });
	  if (pos && pos.cmp(from) >= 0 && pos.cmp(to) <= 0) {
	    fragment = { from: from, to: to };
	  } else if (mouseDown && mouseDown.mightDrag) {
	    var _pos = _model.Pos.from(mouseDown.mightDrag);
	    fragment = { from: _pos, to: _pos.move(1) };
	  }

	  if (fragment) {
	    // FIXME the document could change during a drag, invalidating this range
	    pm.input.draggingFrom = fragment;
	    setCopied(pm.doc, fragment.from, fragment.to, e.dataTransfer);
	  }
	};

	handlers.dragend = function (pm) {
	  return window.setTimeout(function () {
	    return pm.input.draggingFrom = false;
	  }, 50);
	};

	handlers.dragover = handlers.dragenter = function (pm, e) {
	  e.preventDefault();
	  var cursorPos = pm.posAtCoords({ left: e.clientX, top: e.clientY });
	  if (!cursorPos) return;
	  var coords = (0, _dompos.coordsAtPos)(pm, cursorPos);
	  var rect = pm.wrapper.getBoundingClientRect();
	  coords.top -= rect.top;
	  coords.right -= rect.left;
	  coords.bottom -= rect.top;
	  coords.left -= rect.left;
	  var target = pm.input.dropTarget;
	  target.style.display = "block";
	  target.style.left = coords.left - 1 + "px";
	  target.style.top = coords.top + "px";
	  target.style.height = coords.bottom - coords.top + "px";
	};

	handlers.dragleave = function (pm) {
	  return pm.input.dropTarget.style.display = "";
	};

	handlers.drop = function (pm, e) {
	  pm.input.dropTarget.style.display = "";

	  if (!e.dataTransfer) return;

	  var fragment = getCopied(pm, e.dataTransfer);
	  if (fragment) {
	    e.preventDefault();
	    var insertPos = pm.posAtCoords({ left: e.clientX, top: e.clientY }),
	        origPos = insertPos;
	    if (!insertPos) return;
	    var tr = pm.tr;
	    if (pm.input.draggingFrom && !e.ctrlKey) {
	      tr.delete(pm.input.draggingFrom.from, pm.input.draggingFrom.to);
	      insertPos = tr.map(insertPos).pos;
	    }
	    tr.replace(insertPos, insertPos, fragment.doc, fragment.from, fragment.to).apply();
	    var posAfter = tr.map(origPos).pos;
	    if (_model.Pos.samePath(insertPos.path, posAfter.path) && posAfter.offset == insertPos.offset + 1 && pm.doc.nodeAfter(insertPos).type.selectable) pm.setNodeSelection(insertPos);else pm.setTextSelection(insertPos, posAfter);
	    pm.focus();
	  }
	};

	handlers.focus = function (pm) {
	  (0, _dom.addClass)(pm.wrapper, "ProseMirror-focused");
	  // :: () #path=ProseMirror#events#focus
	  // Fired when the editor gains focus.
	  pm.signal("focus");
	};

	handlers.blur = function (pm) {
	  (0, _dom.rmClass)(pm.wrapper, "ProseMirror-focused");
	  // :: () #path=ProseMirror#events#blur
	  // Fired when the editor loses focus.
	  pm.signal("blur");
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.captureKeys = undefined;

	var _browserkeymap = __webpack_require__(21);

	var _browserkeymap2 = _interopRequireDefault(_browserkeymap);

	var _selection = __webpack_require__(45);

	var _dompos = __webpack_require__(46);

	var _dom = __webpack_require__(14);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function nothing() {}

	function ensureSelection(pm) {
	  if (pm.selection.node) {
	    var found = (0, _selection.findSelectionNear)(pm.doc, pm.selection.from, 1, true);
	    if (found) (0, _dompos.setDOMSelectionToPos)(pm, found.head);
	  }
	  return false;
	}

	// A backdrop keymap used to make sure we always suppress keys that
	// have a dangerous default effect, even if the commands they are
	// bound to return false, and to make sure that cursor-motion keys
	// find a cursor (as opposed to a node selection) when pressed.

	var keys = {
	  "Esc": nothing,
	  "Enter": nothing,
	  "Mod-Enter": nothing,
	  "Shift-Enter": nothing,
	  "Backspace": nothing,
	  "Delete": nothing,
	  "Mod-B": nothing,
	  "Mod-I": nothing,
	  "Mod-Backspace": nothing,
	  "Mod-Delete": nothing,
	  "Shift-Backspace": nothing,
	  "Shift-Delete": nothing,
	  "Shift-Mod-Backspace": nothing,
	  "Shift-Mod-Delete": nothing,
	  "Mod-Z": nothing,
	  "Mod-Y": nothing,
	  "Shift-Mod-Z": nothing,
	  "Ctrl-D": nothing,
	  "Ctrl-H": nothing,
	  "Ctrl-Alt-Backspace": nothing,
	  "Alt-D": nothing,
	  "Alt-Delete": nothing,
	  "Alt-Backspace": nothing,

	  "Mod-A": ensureSelection
	};["Left", "Right", "Up", "Down", "Home", "End", "PageUp", "PageDown"].forEach(function (key) {
	  keys[key] = keys["Shift-" + key] = keys["Mod-" + key] = keys["Shift-Mod-" + key] = keys["Alt-" + key] = keys["Shift-Alt-" + key] = ensureSelection;
	});["Left", "Mod-Left", "Right", "Mod-Right", "Up", "Down"].forEach(function (key) {
	  return delete keys[key];
	});

	if (_dom.browser.mac) keys["Ctrl-F"] = keys["Ctrl-B"] = keys["Ctrl-P"] = keys["Ctrl-N"] = keys["Alt-F"] = keys["Alt-B"] = keys["Ctrl-A"] = keys["Ctrl-E"] = keys["Ctrl-V"] = keys["goPageUp"] = ensureSelection;

	var captureKeys = exports.captureKeys = new _browserkeymap2.default(keys);

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.applyDOMChange = applyDOMChange;
	exports.textContext = textContext;
	exports.textInContext = textInContext;

	var _model = __webpack_require__(3);

	var _format = __webpack_require__(35);

	var _tree = __webpack_require__(27);

	var _dompos = __webpack_require__(46);

	function isAtEnd(node, pos, depth) {
	  for (var i = depth || 0; i < pos.path.length; i++) {
	    var n = pos.path[depth];
	    if (n < node.size - 1) return false;
	    node = node.child(n);
	  }
	  return pos.offset == node.size;
	}
	function isAtStart(pos, depth) {
	  if (pos.offset > 0) return false;
	  for (var i = depth || 0; i < pos.path.length; i++) {
	    if (pos.path[depth] > 0) return false;
	  }return true;
	}

	function parseNearSelection(pm) {
	  var dom = pm.content,
	      node = pm.doc;
	  var _pm$selection = pm.selection;
	  var from = _pm$selection.from;
	  var to = _pm$selection.to;

	  for (var depth = 0;; depth++) {
	    var toNode = node.child(to.path[depth]);
	    var fromStart = isAtStart(from, depth + 1);
	    var toEnd = isAtEnd(toNode, to, depth + 1);
	    if (fromStart || toEnd || from.path[depth] != to.path[depth] || toNode.isTextblock) {
	      var startOffset = depth == from.depth ? from.offset : from.path[depth];
	      if (fromStart && startOffset > 0) startOffset--;
	      var endOffset = depth == to.depth ? to.offset : to.path[depth] + 1;
	      if (toEnd && endOffset < node.size - 1) endOffset++;
	      var parsed = (0, _format.fromDOM)(pm.schema, dom, { topNode: node.copy(),
	        from: startOffset,
	        to: dom.childNodes.length - (node.size - endOffset) });
	      parsed = parsed.copy(node.content.slice(0, startOffset).append(parsed.content).append(node.content.slice(endOffset)));
	      for (var i = depth - 1; i >= 0; i--) {
	        var wrap = pm.doc.path(from.path.slice(0, i));
	        parsed = wrap.replace(from.path[i], parsed);
	      }
	      return parsed;
	    }
	    node = toNode;
	    dom = (0, _dompos.findByPath)(dom, from.path[depth], false);
	  }
	}

	function applyDOMChange(pm) {
	  var updated = parseNearSelection(pm);
	  var changeStart = (0, _model.findDiffStart)(pm.doc.content, updated.content);
	  if (changeStart) {
	    var changeEnd = findDiffEndConstrained(pm.doc.content, updated.content, changeStart);
	    // Mark nodes touched by this change as 'to be redrawn'
	    markDirtyFor(pm, changeStart, changeEnd);

	    pm.tr.replace(changeStart, changeEnd.a, updated, changeStart, changeEnd.b).apply();
	    return true;
	  } else {
	    return false;
	  }
	}

	function offsetBy(first, second, pos) {
	  var same = (0, _tree.samePathDepth)(first, second);
	  var firstEnd = same == first.depth,
	      secondEnd = same == second.depth;
	  var off = (secondEnd ? second.offset : second.path[same]) - (firstEnd ? first.offset : first.path[same]);
	  var shorter = firstEnd ? pos.move(off) : pos.shorten(same, off);
	  if (secondEnd) return shorter;else return shorter.extend(new _model.Pos(second.path.slice(same), second.offset));
	}

	function findDiffEndConstrained(a, b, start) {
	  var end = (0, _model.findDiffEnd)(a, b);
	  if (!end) return end;
	  if (end.a.cmp(start) < 0) return { a: start, b: offsetBy(end.a, start, end.b) };
	  if (end.b.cmp(start) < 0) return { a: offsetBy(end.b, start, end.a), b: start };
	  return end;
	}

	function sameDepth(a, b) {
	  var max = Math.min(a.depth, b.depth);
	  for (var i = 0; i < max; i++) {
	    if (a.path[i] != b.path[i]) return i;
	  }return max;
	}

	function markDirtyFor(pm, start, end) {
	  var depth = Math.min(sameDepth(start, end.a), sameDepth(start, end.b));
	  if (depth == 0) {
	    pm.markAllDirty();
	  } else {
	    var pos = _model.Pos.from(start.path.slice(0, depth));
	    pm.markRangeDirty({ from: pos, to: pos.move(1) });
	  }
	}

	// Text-only queries for composition events

	function textContext(data) {
	  var range = window.getSelection().getRangeAt(0);
	  var start = range.startContainer,
	      end = range.endContainer;
	  if (start == end && start.nodeType == 3) {
	    var value = start.nodeValue,
	        lead = range.startOffset,
	        _end = range.endOffset;
	    if (data && _end >= data.length && value.slice(_end - data.length, _end) == data) lead = _end - data.length;
	    return { inside: start, lead: lead, trail: value.length - _end };
	  }

	  var sizeBefore = null,
	      sizeAfter = null;
	  var before = start.childNodes[range.startOffset - 1] || nodeBefore(start);
	  while (before.lastChild) {
	    before = before.lastChild;
	  }if (before && before.nodeType == 3) {
	    var value = before.nodeValue;
	    sizeBefore = value.length;
	    if (data && value.slice(value.length - data.length) == data) sizeBefore -= data.length;
	  }
	  var after = end.childNodes[range.endOffset] || nodeAfter(end);
	  while (after.firstChild) {
	    after = after.firstChild;
	  }if (after && after.nodeType == 3) sizeAfter = after.nodeValue.length;

	  return { before: before, sizeBefore: sizeBefore,
	    after: after, sizeAfter: sizeAfter };
	}

	function textInContext(context, deflt) {
	  if (context.inside) {
	    var _val = context.inside.nodeValue;
	    return _val.slice(context.lead, _val.length - context.trail);
	  } else {
	    var before = context.before,
	        after = context.after,
	        val = "";
	    if (!before) return deflt;
	    if (before.nodeType == 3) val = before.nodeValue.slice(context.sizeBefore);
	    var scan = scanText(before, after);
	    if (scan == null) return deflt;
	    val += scan;
	    if (after && after.nodeType == 3) {
	      var valAfter = after.nodeValue;
	      val += valAfter.slice(0, valAfter.length - context.sizeAfter);
	    }
	    return val;
	  }
	}

	function nodeAfter(node) {
	  for (;;) {
	    var next = node.nextSibling;
	    if (next) {
	      while (next.firstChild) {
	        next = next.firstChild;
	      }return next;
	    }
	    if (!(node = node.parentElement)) return null;
	  }
	}

	function nodeBefore(node) {
	  for (;;) {
	    var prev = node.previousSibling;
	    if (prev) {
	      while (prev.lastChild) {
	        prev = prev.lastChild;
	      }return prev;
	    }
	    if (!(node = node.parentElement)) return null;
	  }
	}

	function scanText(start, end) {
	  var text = "",
	      cur = nodeAfter(start);
	  for (;;) {
	    if (cur == end) return text;
	    if (!cur) return null;
	    if (cur.nodeType == 3) text += cur.nodeValue;
	    cur = cur.firstChild || nodeAfter(cur);
	  }
	}

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.History = undefined;

	var _model = __webpack_require__(3);

	var _transform = __webpack_require__(22);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// Steps are stored in inverted form (so that they can be applied to
	// undo the original).

	var InvertedStep = function InvertedStep(step, version, id) {
	  _classCallCheck(this, InvertedStep);

	  this.step = step;
	  this.version = version;
	  this.id = id;
	};

	var BranchRemapping = function () {
	  function BranchRemapping(branch) {
	    _classCallCheck(this, BranchRemapping);

	    this.branch = branch;
	    this.remap = new _transform.Remapping();
	    this.version = branch.version;
	    this.mirrorBuffer = Object.create(null);
	  }

	  _createClass(BranchRemapping, [{
	    key: "moveToVersion",
	    value: function moveToVersion(version) {
	      while (this.version > version) {
	        this.addNextMap();
	      }
	    }
	  }, {
	    key: "addNextMap",
	    value: function addNextMap() {
	      var found = this.branch.mirror[this.version];
	      var mapOffset = this.branch.maps.length - (this.branch.version - this.version) - 1;
	      var id = this.remap.addToFront(this.branch.maps[mapOffset], this.mirrorBuffer[this.version]);
	      --this.version;
	      if (found != null) this.mirrorBuffer[found] = id;
	      return id;
	    }
	  }, {
	    key: "movePastStep",
	    value: function movePastStep(result) {
	      var id = this.addNextMap();
	      if (result) this.remap.addToBack(result.map, id);
	    }
	  }]);

	  return BranchRemapping;
	}();

	var workTime = 100,
	    pauseTime = 150;

	var CompressionWorker = function () {
	  function CompressionWorker(doc, branch, callback) {
	    _classCallCheck(this, CompressionWorker);

	    this.branch = branch;
	    this.callback = callback;
	    this.remap = new BranchRemapping(branch);

	    this.doc = doc;
	    this.events = [];
	    this.maps = [];
	    this.version = this.startVersion = branch.version;

	    this.i = branch.events.length;
	    this.timeout = null;
	    this.aborted = false;
	  }

	  _createClass(CompressionWorker, [{
	    key: "work",
	    value: function work() {
	      var _this = this;

	      if (this.aborted) return;

	      var endTime = Date.now() + workTime;

	      for (;;) {
	        if (this.i == 0) return this.finish();
	        var event = this.branch.events[--this.i],
	            outEvent = [];
	        for (var j = event.length - 1; j >= 0; j--) {
	          var _event$j = event[j];
	          var step = _event$j.step;
	          var stepVersion = _event$j.version;
	          var stepID = _event$j.id;

	          this.remap.moveToVersion(stepVersion);

	          var mappedStep = step.map(this.remap.remap);
	          if (mappedStep && isDelStep(step)) {
	            var extra = 0,
	                start = step.from;
	            while (j > 0) {
	              var next = event[j - 1];
	              if (next.version != stepVersion - 1 || !isDelStep(next.step) || start.cmp(next.step.to)) break;
	              extra += next.step.to.offset - next.step.from.offset;
	              start = next.step.from;
	              stepVersion--;
	              j--;
	              this.remap.addNextMap();
	            }
	            if (extra > 0) {
	              var _start = mappedStep.from.move(-extra);
	              mappedStep = new _transform.Step("replace", _start, mappedStep.to, _start);
	            }
	          }
	          var result = mappedStep && mappedStep.apply(this.doc);
	          if (result) {
	            this.doc = result.doc;
	            this.maps.push(result.map.invert());
	            outEvent.push(new InvertedStep(mappedStep, this.version, stepID));
	            this.version--;
	          }
	          this.remap.movePastStep(result);
	        }
	        if (outEvent.length) {
	          outEvent.reverse();
	          this.events.push(outEvent);
	        }
	        if (Date.now() > endTime) {
	          this.timeout = window.setTimeout(function () {
	            return _this.work();
	          }, pauseTime);
	          return;
	        }
	      }
	    }
	  }, {
	    key: "finish",
	    value: function finish() {
	      if (this.aborted) return;

	      this.events.reverse();
	      this.maps.reverse();
	      this.callback(this.maps.concat(this.branch.maps.slice(this.branch.maps.length - (this.branch.version - this.startVersion))), this.events);
	    }
	  }, {
	    key: "abort",
	    value: function abort() {
	      this.aborted = true;
	      window.clearTimeout(this.timeout);
	    }
	  }]);

	  return CompressionWorker;
	}();

	function isDelStep(step) {
	  return step.type == "replace" && step.from.offset < step.to.offset && _model.Pos.samePath(step.from.path, step.to.path) && (!step.param || step.param.content.size == 0);
	}

	var compressStepCount = 150;

	// A branch is a history of steps. There'll be one for the undo and
	// one for the redo history.

	var Branch = function () {
	  function Branch(maxDepth) {
	    _classCallCheck(this, Branch);

	    this.maxDepth = maxDepth;
	    this.version = 0;
	    this.nextStepID = 1;

	    this.maps = [];
	    this.mirror = Object.create(null);
	    this.events = [];

	    this.stepsSinceCompress = 0;
	    this.compressing = null;
	    this.compressTimeout = null;
	  }

	  _createClass(Branch, [{
	    key: "clear",
	    value: function clear(force) {
	      if (force || !this.empty()) {
	        this.maps.length = this.events.length = this.stepsSinceCompress = 0;
	        this.mirror = Object.create(null);
	        this.abortCompression();
	      }
	    }
	  }, {
	    key: "newEvent",
	    value: function newEvent() {
	      this.abortCompression();
	      this.events.push([]);
	      while (this.events.length > this.maxDepth) {
	        this.events.shift();
	      }
	    }
	  }, {
	    key: "addMap",
	    value: function addMap(map) {
	      if (!this.empty()) {
	        this.maps.push(map);
	        this.version++;
	        this.stepsSinceCompress++;
	        return true;
	      }
	    }
	  }, {
	    key: "empty",
	    value: function empty() {
	      return this.events.length == 0;
	    }
	  }, {
	    key: "addStep",
	    value: function addStep(step, map, id) {
	      this.addMap(map);
	      if (id == null) id = this.nextStepID++;
	      this.events[this.events.length - 1].push(new InvertedStep(step, this.version, id));
	    }

	    // : (Transform, ?[number])
	    // Add a transform to the branch's history.

	  }, {
	    key: "addTransform",
	    value: function addTransform(transform, ids) {
	      this.abortCompression();
	      for (var i = 0; i < transform.steps.length; i++) {
	        var inverted = transform.steps[i].invert(transform.docs[i], transform.maps[i]);
	        this.addStep(inverted, transform.maps[i], ids && ids[i]);
	      }
	    }

	    // : (Node, bool) → {transform: Transform, ids: [number]}
	    // Pop the latest event off the branch's history and apply it
	    // to a document transform, returning the transform and the step ID.

	  }, {
	    key: "popEvent",
	    value: function popEvent(doc, allowCollapsing) {
	      this.abortCompression();
	      var event = this.events.pop();
	      if (!event) return null;

	      var remap = new BranchRemapping(this),
	          collapsing = allowCollapsing;
	      var tr = new _transform.Transform(doc);
	      var ids = [];

	      for (var i = event.length - 1; i >= 0; i--) {
	        var invertedStep = event[i],
	            step = invertedStep.step;
	        if (!collapsing || invertedStep.version != remap.version) {
	          collapsing = false;
	          remap.moveToVersion(invertedStep.version);

	          step = step.map(remap.remap);
	          var result = step && tr.step(step);
	          if (result) {
	            ids.push(invertedStep.id);
	            if (this.addMap(result.map)) this.mirror[this.version] = invertedStep.version;
	          }

	          if (i > 0) remap.movePastStep(result);
	        } else {
	          this.version--;
	          delete this.mirror[this.version];
	          this.maps.pop();
	          tr.step(step);
	          ids.push(invertedStep.id);
	          --remap.version;
	        }
	      }
	      if (this.empty()) this.clear(true);
	      return { transform: tr, ids: ids };
	    }
	  }, {
	    key: "lastStep",
	    value: function lastStep() {
	      for (var i = this.events.length - 1; i >= 0; i--) {
	        var event = this.events[i];
	        if (event.length) return event[event.length - 1];
	      }
	    }
	  }, {
	    key: "getVersion",
	    value: function getVersion() {
	      var step = this.lastStep();
	      return { lastID: step && step.id, version: this.version };
	    }
	  }, {
	    key: "isAtVersion",
	    value: function isAtVersion(version) {
	      var step = this.lastStep();
	      return this.version == version.version && (step && step.id) == version.lastID;
	    }
	  }, {
	    key: "findVersion",
	    value: function findVersion(version) {
	      for (var i = this.events.length - 1; i >= 0; i--) {
	        var event = this.events[i];
	        for (var j = event.length - 1; j >= 0; j--) {
	          if (event[j].id <= version.lastID) return { event: i, step: j + 1 };
	        }
	      }
	    }
	  }, {
	    key: "rebased",
	    value: function rebased(newMaps, rebasedTransform, positions) {
	      if (this.empty()) return;
	      this.abortCompression();

	      var startVersion = this.version - positions.length;

	      // Update and clean up the events
	      out: for (var i = this.events.length - 1; i >= 0; i--) {
	        var event = this.events[i];
	        for (var j = event.length - 1; j >= 0; j--) {
	          var step = event[j];
	          if (step.version <= startVersion) break out;
	          var off = positions[step.version - startVersion - 1];
	          if (off == -1) {
	            event.splice(j--, 1);
	          } else {
	            var inv = rebasedTransform.steps[off].invert(rebasedTransform.docs[off], rebasedTransform.maps[off]);
	            event[j] = new InvertedStep(inv, startVersion + newMaps.length + off + 1, step.id);
	          }
	        }
	      }

	      // Sync the array of maps
	      if (this.maps.length > positions.length) this.maps = this.maps.slice(0, this.maps.length - positions.length).concat(newMaps).concat(rebasedTransform.maps);else this.maps = rebasedTransform.maps.slice();

	      this.version = startVersion + newMaps.length + rebasedTransform.maps.length;

	      this.stepsSinceCompress += newMaps.length + rebasedTransform.steps.length - positions.length;
	    }
	  }, {
	    key: "abortCompression",
	    value: function abortCompression() {
	      if (this.compressing) {
	        this.compressing.abort();
	        this.compressing = null;
	      }
	    }
	  }, {
	    key: "needsCompression",
	    value: function needsCompression() {
	      return this.stepsSinceCompress > compressStepCount && !this.compressing;
	    }
	  }, {
	    key: "startCompression",
	    value: function startCompression(doc) {
	      var _this2 = this;

	      this.compressing = new CompressionWorker(doc, this, function (maps, events) {
	        _this2.maps = maps;
	        _this2.events = events;
	        _this2.mirror = Object.create(null);
	        _this2.compressing = null;
	        _this2.stepsSinceCompress = 0;
	      });
	      this.compressing.work();
	    }
	  }]);

	  return Branch;
	}();

	var compressDelay = 750;

	// ;; An undo/redo history manager for an editor instance.

	var History = exports.History = function () {
	  function History(pm) {
	    var _this3 = this;

	    _classCallCheck(this, History);

	    this.pm = pm;

	    this.done = new Branch(pm.options.historyDepth);
	    this.undone = new Branch(pm.options.historyDepth);

	    this.lastAddedAt = 0;
	    this.ignoreTransform = false;

	    this.allowCollapsing = true;

	    pm.on("transform", function (transform, options) {
	      return _this3.recordTransform(transform, options);
	    });
	  }

	  // : (Transform, Object)
	  // Record a transformation in undo history.

	  _createClass(History, [{
	    key: "recordTransform",
	    value: function recordTransform(transform, options) {
	      if (this.ignoreTransform) return;

	      if (options.addToHistory == false) {
	        for (var i = 0; i < transform.maps.length; i++) {
	          var map = transform.maps[i];
	          this.done.addMap(map);
	          this.undone.addMap(map);
	        }
	      } else {
	        this.undone.clear();
	        var now = Date.now();
	        if (now > this.lastAddedAt + this.pm.options.historyEventDelay) this.done.newEvent();

	        this.done.addTransform(transform);
	        this.lastAddedAt = now;
	      }
	      this.maybeScheduleCompression();
	    }

	    // :: () → bool
	    // Undo one history event. The return value indicates whether
	    // anything was actually undone. Note that in a collaborative
	    // context, or when changes are [applied](#ProseMirror.apply)
	    // without adding them to the history, it is possible for
	    // [`undoDepth`](#History.undoDepth) to have a positive value, but
	    // this method to still return `false`, when non-history changes
	    // overwrote all remaining changes in the history.

	  }, {
	    key: "undo",
	    value: function undo() {
	      return this.shift(this.done, this.undone);
	    }

	    // :: () → bool
	    // Redo one history event. The return value indicates whether
	    // anything was actually redone.

	  }, {
	    key: "redo",
	    value: function redo() {
	      return this.shift(this.undone, this.done);
	    }

	    // :: number
	    // The amount of undoable events available.

	  }, {
	    key: "shift",

	    // : (Branch, Branch) → bool
	    // Apply the latest event from one branch to the document and shift
	    // the event onto the other branch. Returns true when an event could
	    // be shifted.
	    value: function shift(from, to) {
	      var event = from.popEvent(this.pm.doc, this.allowCollapsing);
	      if (!event) return false;
	      var transform = event.transform;
	      var ids = event.ids;

	      this.ignoreTransform = true;
	      this.pm.apply(transform);
	      this.ignoreTransform = false;

	      if (!transform.steps.length) return this.shift(from, to);

	      if (to) {
	        to.newEvent();
	        to.addTransform(transform, ids);
	      }
	      this.lastAddedAt = 0;

	      return true;
	    }

	    // :: () → Object
	    // Get the current ‘version’ of the editor content. This can be used
	    // to later [check](#History.isAtVersion) whether anything changed, or
	    // to [roll back](#History.backToVersion) to this version.

	  }, {
	    key: "getVersion",
	    value: function getVersion() {
	      return this.done.getVersion();
	    }

	    // :: (Object) → bool
	    // Returns `true` when the editor history is in the state that it
	    // was when the given [version](#History.getVersion) was recorded.
	    // That means either no changes were made, or changes were
	    // done/undone and then undone/redone again.

	  }, {
	    key: "isAtVersion",
	    value: function isAtVersion(version) {
	      return this.done.isAtVersion(version);
	    }

	    // :: (Object) → bool
	    // Rolls back all changes made since the given
	    // [version](#History.getVersion) was recorded. Returns `false` if
	    // that version was no longer found in the history, and thus the
	    // action could not be completed.

	  }, {
	    key: "backToVersion",
	    value: function backToVersion(version) {
	      var found = this.done.findVersion(version);
	      if (!found) return false;
	      var event = this.done.events[found.event];
	      if (found.event == this.done.events.length - 1 && found.step == event.length) return true;
	      var combined = this.done.events.slice(found.event + 1).reduce(function (comb, arr) {
	        return comb.concat(arr);
	      }, event.slice(found.step));
	      this.done.events.length = found.event + ((event.length = found.step) ? 1 : 0);
	      this.done.events.push(combined);

	      this.shift(this.done);
	      return true;
	    }
	  }, {
	    key: "rebased",
	    value: function rebased(newMaps, rebasedTransform, positions) {
	      this.done.rebased(newMaps, rebasedTransform, positions);
	      this.undone.rebased(newMaps, rebasedTransform, positions);
	      this.maybeScheduleCompression();
	    }
	  }, {
	    key: "maybeScheduleCompression",
	    value: function maybeScheduleCompression() {
	      this.maybeScheduleCompressionForBranch(this.done);
	      this.maybeScheduleCompressionForBranch(this.undone);
	    }
	  }, {
	    key: "maybeScheduleCompressionForBranch",
	    value: function maybeScheduleCompressionForBranch(branch) {
	      var _this4 = this;

	      window.clearTimeout(branch.compressTimeout);
	      if (branch.needsCompression()) branch.compressTimeout = window.setTimeout(function () {
	        if (branch.needsCompression()) branch.startCompression(_this4.pm.doc);
	      }, compressDelay);
	    }
	  }, {
	    key: "undoDepth",
	    get: function get() {
	      return this.done.events.length;
	    }

	    // :: number
	    // The amount of redoable events available.

	  }, {
	    key: "redoDepth",
	    get: function get() {
	      return this.undone.events.length;
	    }
	  }]);

	  return History;
	}();

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.RangeStore = exports.MarkedRange = undefined;

	var _event = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// ;; A [marked range](#ProseMirror.markRange). Includes the methods
	// from the [event mixin](#EventMixin).

	var MarkedRange = exports.MarkedRange = function () {
	  function MarkedRange(from, to, options) {
	    _classCallCheck(this, MarkedRange);

	    this.options = options || {};
	    // :: ?Pos
	    // The current start position of the range. Updated whenever the
	    // editor's document is changed. Set to `null` when the marked
	    // range is [removed](#ProseMirror.removeRange).
	    this.from = from;
	    // :: ?Pos
	    // The current end position of the range. Updated whenever the
	    // editor's document is changed. Set to `null` when the marked
	    // range is [removed](#ProseMirror.removeRange).
	    this.to = to;
	  }

	  _createClass(MarkedRange, [{
	    key: "remove",
	    value: function remove() {
	      // :: (from: Pos, to: Pos) #path=MarkedRange#events#removed
	      // Signalled when the marked range is removed from the editor.
	      this.signal("removed", this.from, this.to.max(this.from));
	      this.from = this.to = null;
	    }
	  }]);

	  return MarkedRange;
	}();

	(0, _event.eventMixin)(MarkedRange);

	var RangeSorter = function () {
	  function RangeSorter() {
	    _classCallCheck(this, RangeSorter);

	    this.sorted = [];
	  }

	  _createClass(RangeSorter, [{
	    key: "find",
	    value: function find(at) {
	      var min = 0,
	          max = this.sorted.length;
	      for (;;) {
	        if (max < min + 10) {
	          for (var i = min; i < max; i++) {
	            if (this.sorted[i].at.cmp(at) >= 0) return i;
	          }return max;
	        }
	        var mid = min + max >> 1;
	        if (this.sorted[mid].at.cmp(at) > 0) max = mid;else min = mid;
	      }
	    }
	  }, {
	    key: "insert",
	    value: function insert(obj) {
	      this.sorted.splice(this.find(obj.at), 0, obj);
	    }
	  }, {
	    key: "remove",
	    value: function remove(at, range) {
	      var pos = this.find(at);
	      for (var dist = 0;; dist++) {
	        var leftPos = pos - dist - 1,
	            rightPos = pos + dist;
	        if (leftPos >= 0 && this.sorted[leftPos].range == range) {
	          this.sorted.splice(leftPos, 1);
	          return;
	        } else if (rightPos < this.sorted.length && this.sorted[rightPos].range == range) {
	          this.sorted.splice(rightPos, 1);
	          return;
	        }
	      }
	    }
	  }, {
	    key: "resort",
	    value: function resort() {
	      for (var i = 0; i < this.sorted.length; i++) {
	        var cur = this.sorted[i];
	        var at = cur.at = cur.type == "open" ? cur.range.from : cur.range.to;
	        var pos = i;
	        while (pos > 0 && this.sorted[pos - 1].at.cmp(at) > 0) {
	          this.sorted[pos] = this.sorted[pos - 1];
	          this.sorted[--pos] = cur;
	        }
	      }
	    }
	  }]);

	  return RangeSorter;
	}();

	var RangeStore = exports.RangeStore = function () {
	  function RangeStore(pm) {
	    _classCallCheck(this, RangeStore);

	    this.pm = pm;
	    this.ranges = [];
	    this.sorted = new RangeSorter();
	  }

	  _createClass(RangeStore, [{
	    key: "addRange",
	    value: function addRange(range) {
	      this.ranges.push(range);
	      this.sorted.insert({ type: "open", at: range.from, range: range });
	      this.sorted.insert({ type: "close", at: range.to, range: range });
	      this.pm.markRangeDirty(range);
	    }
	  }, {
	    key: "removeRange",
	    value: function removeRange(range) {
	      var found = this.ranges.indexOf(range);
	      if (found > -1) {
	        this.ranges.splice(found, 1);
	        this.sorted.remove(range.from, range);
	        this.sorted.remove(range.to, range);
	        this.pm.markRangeDirty(range);
	        range.remove();
	      }
	    }
	  }, {
	    key: "transform",
	    value: function transform(mapping) {
	      for (var i = 0; i < this.ranges.length; i++) {
	        var range = this.ranges[i];
	        range.from = mapping.map(range.from, range.options.inclusiveLeft ? -1 : 1).pos;
	        range.to = mapping.map(range.to, range.options.inclusiveRight ? 1 : -1).pos;
	        var diff = range.from.cmp(range.to);
	        if (range.options.removeWhenEmpty !== false && diff >= 0) {
	          this.removeRange(range);
	          i--;
	        } else if (diff > 0) {
	          range.to = range.from;
	        }
	      }
	      this.sorted.resort();
	    }
	  }, {
	    key: "activeRangeTracker",
	    value: function activeRangeTracker() {
	      return new RangeTracker(this.sorted.sorted);
	    }
	  }]);

	  return RangeStore;
	}();

	var RangeTracker = function () {
	  function RangeTracker(sorted) {
	    _classCallCheck(this, RangeTracker);

	    this.sorted = sorted;
	    this.pos = 0;
	    this.current = [];
	  }

	  _createClass(RangeTracker, [{
	    key: "advanceTo",
	    value: function advanceTo(pos) {
	      var next = undefined;
	      while (this.pos < this.sorted.length && (next = this.sorted[this.pos]).at.cmp(pos) <= 0) {
	        var className = next.range.options.className;
	        if (className) {
	          if (next.type == "open") this.current.push(className);else this.current.splice(this.current.indexOf(className), 1);
	        }
	        this.pos++;
	      }
	    }
	  }, {
	    key: "nextChangeBefore",
	    value: function nextChangeBefore(pos) {
	      for (;;) {
	        if (this.pos == this.sorted.length) return null;
	        var next = this.sorted[this.pos];
	        if (!next.range.options.className) this.pos++;else if (next.at.cmp(pos) >= 0) return null;else return next.at.offset;
	      }
	    }
	  }]);

	  return RangeTracker;
	}();

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _model = __webpack_require__(3);

	var _command = __webpack_require__(42);

	var _format = __webpack_require__(35);

	// # Mark types

	// ;; #path="strong:set" #kind=command
	// Add the [strong](#StrongMark) mark to the selected content.
	_model.StrongMark.register("command", "set", { derive: true, label: "Set strong" });

	// ;; #path="strong:unset" #kind=command
	// Remove the [strong](#StrongMark) mark from the selected content.
	_model.StrongMark.register("command", "unset", { derive: true, label: "Unset strong" });

	// ;; #path="strong:toggle" #kind=command
	// Toggle the [strong](#StrongMark) mark. If there is any strong
	// content in the selection, or there is no selection and the [active
	// marks](#ProseMirror.activeMarks) contain the strong mark, this
	// counts as [active](#Command.active) and executing it removes the
	// mark. Otherwise, this does not count as active, and executing it
	// makes the selected content strong.
	//
	// **Keybindings:** Mod-B
	_model.StrongMark.register("command", "toggle", {
	  derive: true,
	  label: "Toggle strong",
	  menu: {
	    group: "inline", rank: 20,
	    display: {
	      type: "icon",
	      width: 805, height: 1024,
	      path: "M317 869q42 18 80 18 214 0 214-191 0-65-23-102-15-25-35-42t-38-26-46-14-48-6-54-1q-41 0-57 5 0 30-0 90t-0 90q0 4-0 38t-0 55 2 47 6 38zM309 442q24 4 62 4 46 0 81-7t62-25 42-51 14-81q0-40-16-70t-45-46-61-24-70-8q-28 0-74 7 0 28 2 86t2 86q0 15-0 45t-0 45q0 26 0 39zM0 950l1-53q8-2 48-9t60-15q4-6 7-15t4-19 3-18 1-21 0-19v-37q0-561-12-585-2-4-12-8t-25-6-28-4-27-2-17-1l-2-47q56-1 194-6t213-5q13 0 39 0t38 0q40 0 78 7t73 24 61 40 42 59 16 78q0 29-9 54t-22 41-36 32-41 25-48 22q88 20 146 76t58 141q0 57-20 102t-53 74-78 48-93 27-100 8q-25 0-75-1t-75-1q-60 0-175 6t-132 6z"
	    }
	  },
	  keys: ["Mod-B"]
	});

	// ;; #path=em:set #kind=command
	// Add the [emphasis](#EmMark) mark to the selected content.
	_model.EmMark.register("command", "set", { derive: true, label: "Add emphasis" });

	// ;; #path=em:unset #kind=command
	// Remove the [emphasis](#EmMark) mark from the selected content.
	_model.EmMark.register("command", "unset", { derive: true, label: "Remove emphasis" });

	// ;; #path=em:toggle #kind=command
	// Toggle the [emphasis](#EmMark) mark. If there is any emphasized
	// content in the selection, or there is no selection and the [active
	// marks](#ProseMirror.activeMarks) contain the emphasis mark, this
	// counts as [active](#Command.active) and executing it removes the
	// mark. Otherwise, this does not count as active, and executing it
	// makes the selected content emphasized.
	//
	// **Keybindings:** Mod-I
	_model.EmMark.register("command", "toggle", {
	  derive: true,
	  label: "Toggle emphasis",
	  menu: {
	    group: "inline", rank: 21,
	    display: {
	      type: "icon",
	      width: 585, height: 1024,
	      path: "M0 949l9-48q3-1 46-12t63-21q16-20 23-57 0-4 35-165t65-310 29-169v-14q-13-7-31-10t-39-4-33-3l10-58q18 1 68 3t85 4 68 1q27 0 56-1t69-4 56-3q-2 22-10 50-17 5-58 16t-62 19q-4 10-8 24t-5 22-4 26-3 24q-15 84-50 239t-44 203q-1 5-7 33t-11 51-9 47-3 32l0 10q9 2 105 17-1 25-9 56-6 0-18 0t-18 0q-16 0-49-5t-49-5q-78-1-117-1-29 0-81 5t-69 6z"
	    }
	  },
	  keys: ["Mod-I"]
	});

	// ;; #path=code:set #kind=command
	// Add the [code](#CodeMark) mark to the selected content.
	_model.CodeMark.register("command", "set", { derive: true, label: "Set code style" });

	// ;; #path=code:unset #kind=command
	// Remove the [code](#CodeMark) mark from the selected content.
	_model.CodeMark.register("command", "unset", { derive: true, label: "Remove code style" });

	// ;; #path=code:toggle #kind=command
	// Toggle the [code](#CodeMark) mark. If there is any code-styled
	// content in the selection, or there is no selection and the [active
	// marks](#ProseMirror.activeMarks) contain the code mark, this
	// counts as [active](#Command.active) and executing it removes the
	// mark. Otherwise, this does not count as active, and executing it
	// styles the selected content as code.
	//
	// **Keybindings:** Mod-`
	_model.CodeMark.register("command", "toggle", {
	  derive: true,
	  label: "Toggle code style",
	  menu: {
	    group: "inline", rank: 22,
	    display: {
	      type: "icon",
	      width: 896, height: 1024,
	      path: "M608 192l-96 96 224 224-224 224 96 96 288-320-288-320zM288 192l-288 320 288 320 96-96-224-224 224-224-96-96z"
	    }
	  },
	  keys: ["Mod-`"]
	});

	var linkIcon = {
	  type: "icon",
	  width: 951, height: 1024,
	  path: "M832 694q0-22-16-38l-118-118q-16-16-38-16-24 0-41 18 1 1 10 10t12 12 8 10 7 14 2 15q0 22-16 38t-38 16q-8 0-15-2t-14-7-10-8-12-12-10-10q-18 17-18 41 0 22 16 38l117 118q15 15 38 15 22 0 38-14l84-83q16-16 16-38zM430 292q0-22-16-38l-117-118q-16-16-38-16-22 0-38 15l-84 83q-16 16-16 38 0 22 16 38l118 118q15 15 38 15 24 0 41-17-1-1-10-10t-12-12-8-10-7-14-2-15q0-22 16-38t38-16q8 0 15 2t14 7 10 8 12 12 10 10q18-17 18-41zM941 694q0 68-48 116l-84 83q-47 47-116 47-69 0-116-48l-117-118q-47-47-47-116 0-70 50-119l-50-50q-49 50-118 50-68 0-116-48l-118-118q-48-48-48-116t48-116l84-83q47-47 116-47 69 0 116 48l117 118q47 47 47 116 0 70-50 119l50 50q49-50 118-50 68 0 116 48l118 118q48 48 48 116z"
	};

	// ;; #path=link:unset #kind=command
	// Removes all links for the selected content, or, if there is no
	// selection, from the [active marks](#ProseMirror.activeMarks). Will
	// only [select](#Command.select) itself when there is a link in the
	// selection or active marks.
	_model.LinkMark.register("command", "unset", {
	  derive: true,
	  label: "Unlink",
	  menu: { group: "inline", rank: 30, display: linkIcon },
	  active: function active() {
	    return true;
	  }
	});

	// ;; #path=link:set #kind=command
	// Adds a link mark to the selection or set of [active
	// marks](#ProseMirror.activeMarks). Takes parameters to determine the
	// attributes of the link:
	//
	// **`href`**`: string`
	//   : The link's target.
	//
	// **`title`**`: string`
	//   : The link's title.
	//
	// Only selects itself when `unlink` isn't selected, so that only one
	// of the two is visible in the menu at any time.
	_model.LinkMark.register("command", "set", {
	  derive: {
	    inverseSelect: true,
	    params: [{ label: "Target", attr: "href" }, { label: "Title", attr: "title" }]
	  },
	  label: "Add link",
	  menu: { group: "inline", rank: 30, display: linkIcon }
	});

	// Node types

	// ;; #path=image:insert #kind=command
	// Replace the selection with an [image](#Image) node. Takes paramers
	// that specify the image's attributes:
	//
	// **`src`**`: string`
	//   : The URL of the image.
	//
	// **`alt`**`: string`
	//   : The alt text for the image.
	//
	// **`title`**`: string`
	//   : A title for the image.
	_model.Image.register("command", "insert", {
	  derive: {
	    params: [{ label: "Image URL", attr: "src" }, { label: "Description / alternative text", attr: "alt",
	      prefill: function prefill(pm) {
	        return (0, _command.selectedNodeAttr)(pm, this, "alt") || (0, _format.toText)(pm.doc.sliceBetween(pm.selection.from, pm.selection.to));
	      } }, { label: "Title", attr: "title" }]
	  },
	  label: "Insert image",
	  menu: {
	    group: "insert", rank: 20,
	    display: { type: "label", label: "Image" }
	  }
	});

	// ;; #path=bullet_list:wrap #kind=command
	// Wrap the selection in a bullet list.
	//
	// **Keybindings:** Alt-Right '*', Alt-Right '-'
	_model.BulletList.register("command", "wrap", {
	  derive: { list: true },
	  label: "Wrap the selection in a bullet list",
	  menu: {
	    group: "block", rank: 40,
	    display: {
	      type: "icon",
	      width: 768, height: 896,
	      path: "M0 512h128v-128h-128v128zM0 256h128v-128h-128v128zM0 768h128v-128h-128v128zM256 512h512v-128h-512v128zM256 256h512v-128h-512v128zM256 768h512v-128h-512v128z"
	    }
	  },
	  keys: ["Alt-Right '*'", "Alt-Right '-'"]
	});

	// ;; #path=ordered_list:wrap #kind=command
	// Wrap the selection in an ordered list.
	//
	// **Keybindings:** Alt-Right '1'
	_model.OrderedList.register("command", "wrap", {
	  derive: { list: true },
	  label: "Wrap the selection in an ordered list",
	  menu: {
	    group: "block", rank: 41,
	    display: {
	      type: "icon",
	      width: 768, height: 896,
	      path: "M320 512h448v-128h-448v128zM320 768h448v-128h-448v128zM320 128v128h448v-128h-448zM79 384h78v-256h-36l-85 23v50l43-2v185zM189 590c0-36-12-78-96-78-33 0-64 6-83 16l1 66c21-10 42-15 67-15s32 11 32 28c0 26-30 58-110 112v50h192v-67l-91 2c49-30 87-66 87-113l1-1z"
	    }
	  },
	  keys: ["Alt-Right '1'"]
	});

	// ;; #path=blockquote:wrap #kind=command
	// Wrap the selection in a block quote.
	//
	// **Keybindings:** Alt-Right '>', Alt-Right '"'
	_model.BlockQuote.register("command", "wrap", {
	  derive: true,
	  label: "Wrap the selection in a block quote",
	  menu: {
	    group: "block", rank: 45,
	    display: {
	      type: "icon",
	      width: 640, height: 896,
	      path: "M0 448v256h256v-256h-128c0 0 0-128 128-128v-128c0 0-256 0-256 256zM640 320v-128c0 0-256 0-256 256v256h256v-256h-128c0 0 0-128 128-128z"
	    }
	  },
	  keys: ["Alt-Right '>'", "Alt-Right '\"'"]
	});

	// ;; #path=hard_break:insert #kind=command
	// Replace the selection with a hard break node. If the selection is
	// in a node whose [type](#NodeType) has a truthy `isCode` property
	// (such as `CodeBlock` in the default schema), a regular newline is
	// inserted instead.
	//
	// **Keybindings:** Mod-Enter, Shift-Enter
	_model.HardBreak.register("command", "insert", {
	  label: "Insert hard break",
	  run: function run(pm) {
	    var _pm$selection = pm.selection;
	    var node = _pm$selection.node;
	    var from = _pm$selection.from;

	    if (node && node.isBlock) return false;else if (pm.doc.path(from.path).type.isCode) return pm.tr.typeText("\n").apply(pm.apply.scroll);else return pm.tr.replaceSelection(this.create()).apply(pm.apply.scroll);
	  },

	  keys: ["Mod-Enter", "Shift-Enter"]
	});

	// ;; #path=list_item:split #kind=command
	// If the selection is a text selection inside of a child of a list
	// item, split that child and the list item, and delete the selection.
	//
	// **Keybindings:** Enter
	_model.ListItem.register("command", "split", {
	  label: "Split the current list item",
	  run: function run(pm) {
	    var _pm$selection2 = pm.selection;
	    var from = _pm$selection2.from;
	    var to = _pm$selection2.to;
	    var node = _pm$selection2.node;

	    if (node && node.isBlock || from.path.length < 2 || !_model.Pos.samePath(from.path, to.path)) return false;
	    var toParent = from.shorten(),
	        grandParent = pm.doc.path(toParent.path);
	    if (grandParent.type != this) return false;
	    var nextType = to.offset == grandParent.child(toParent.offset).size ? pm.schema.defaultTextblockType() : null;
	    return pm.tr.delete(from, to).split(from, 2, nextType).apply(pm.apply.scroll);
	  },

	  keys: ["Enter(50)"]
	});

	var _loop = function _loop(i) {
	  // ;; #path=:heading::make_ #kind=command
	  // The commands `make1` to `make6` set the textblocks in the
	  // selection to become headers with the given level.
	  //
	  // **Keybindings:** Mod-H '1' through Mod-H '6'
	  _model.Heading.registerComputed("command", "make" + i, function (type) {
	    if (i <= type.maxLevel) return {
	      derive: { name: "make", attrs: { level: i } },
	      label: "Change to heading " + i,
	      keys: ["Mod-H '" + i + "'"],
	      menu: {
	        group: "textblockHeading", rank: 30 + i,
	        display: { type: "label", label: "Level " + i },
	        activeDisplay: "Head " + i
	      }
	    };
	  });
	};

	for (var i = 1; i <= 10; i++) {
	  _loop(i);
	} // ;; #path=paragraph:make #kind=command
	// Set the textblocks in the selection to be regular paragraphs.
	//
	// **Keybindings:** Mod-P
	_model.Paragraph.register("command", "make", {
	  derive: true,
	  label: "Change to paragraph",
	  keys: ["Mod-P"],
	  menu: {
	    group: "textblock", rank: 10,
	    display: { type: "label", label: "Plain" },
	    activeDisplay: "Plain"
	  }
	});

	// ;; #path=code_block:make #kind=command
	// Set the textblocks in the selection to be code blocks.
	//
	// **Keybindings:** Mod-\
	_model.CodeBlock.register("command", "make", {
	  derive: true,
	  label: "Change to code block",
	  keys: ["Mod-\\"],
	  menu: {
	    group: "textblock", rank: 20,
	    display: { type: "label", label: "Code" },
	    activeDisplay: "Code"
	  }
	});

	// ;; #path=horizontal_rule:insert #kind=command
	// Replace the selection with a horizontal rule.
	//
	// **Keybindings:** Mod-Shift-Minus
	_model.HorizontalRule.register("command", "insert", {
	  derive: true,
	  label: "Insert horizontal rule",
	  keys: ["Mod-Shift--"],
	  menu: { group: "insert", rank: 70, display: { type: "label", label: "Horizontal rule" } }
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.ShortAnswer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _input = __webpack_require__(55);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ShortAnswer = exports.ShortAnswer = function (_Block) {
		_inherits(ShortAnswer, _Block);

		function ShortAnswer() {
			_classCallCheck(this, ShortAnswer);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		ShortAnswer.prototype.create = function create(attrs, content, marks) {
			return _Block.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.textfield.create(attrs)], marks);
		};

		_createClass(ShortAnswer, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					type: new _model.Attribute({ default: "text" }),
					size: new _model.Attribute({ default: "20" }),
					class: new _model.Attribute({ default: "widgets-shortanswer widgets-edit" })
				};
			}
		}]);

		return ShortAnswer;
	}(_model.Block);

	ShortAnswer.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	(0, _utils.defParser)(ShortAnswer, "div", "widgets-shortanswer");

	ShortAnswer.register("command", "insert", {
		label: "Short Answer",
		run: function run(pm, name, size) {
			return pm.tr.replaceSelection(this.create({ name: name, size: size })).apply(pm.apply.scroll);
		},

		menu: { group: "question", rank: 71, display: { type: "label", label: "Short Answer" } },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle } }, { name: "Size", attr: "size", label: "Size in characters", type: "number", default: "20",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "size");
			},
			options: { min: 1, max: 80 } }]
	});

	(0, _utils.defParamsClick)(ShortAnswer, "shortanswer:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-shortanswer p:hover {\n    cursor: text;\n}\n\n\n.ProseMirror .widgets-shortanswer {\n\tborder-top: 1px solid #AAA;\n\tpadding: 8px;\n}\n\n");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _input = __webpack_require__(56);

	Object.defineProperty(exports, "Input", {
	  enumerable: true,
	  get: function get() {
	    return _input.Input;
	  }
	});

	var _checkbox = __webpack_require__(57);

	Object.defineProperty(exports, "CheckBox", {
	  enumerable: true,
	  get: function get() {
	    return _checkbox.CheckBox;
	  }
	});

	var _radiobutton = __webpack_require__(58);

	Object.defineProperty(exports, "RadioButton", {
	  enumerable: true,
	  get: function get() {
	    return _radiobutton.RadioButton;
	  }
	});

	var _select = __webpack_require__(59);

	Object.defineProperty(exports, "Select", {
	  enumerable: true,
	  get: function get() {
	    return _select.Select;
	  }
	});

	var _textfield = __webpack_require__(60);

	Object.defineProperty(exports, "TextField", {
	  enumerable: true,
	  get: function get() {
	    return _textfield.TextField;
	  }
	});

	var _textarea = __webpack_require__(61);

	Object.defineProperty(exports, "TextArea", {
	  enumerable: true,
	  get: function get() {
	    return _textarea.TextArea;
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Input = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = exports.Input = function (_Block) {
		_inherits(Input, _Block);

		function Input() {
			_classCallCheck(this, Input);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		_createClass(Input, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					type: new _model.Attribute({ default: "text" }),
					value: new _model.Attribute()
				};
			}
		}, {
			key: "contains",
			get: function get() {
				return null;
			}
		}]);

		return Input;
	}(_model.Block);

	(0, _utils.defParser)(Input, "widgets-input");

	Input.prototype.serializeDOM = function (node) {
		return (0, _dom.elt)("input", node.attrs);
	};

	(0, _dom.insertCSS)("\n\t\t\n.widgets-input {}\n\n");

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.CheckBox = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _input = __webpack_require__(56);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckBox = exports.CheckBox = function (_Input) {
		_inherits(CheckBox, _Input);

		function CheckBox() {
			_classCallCheck(this, CheckBox);

			return _possibleConstructorReturn(this, _Input.apply(this, arguments));
		}

		_createClass(CheckBox, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					type: new _model.Attribute({ default: "checkbox" }),
					value: new _model.Attribute({ default: "1" }),
					class: new _model.Attribute({ default: "widgets-checkbox" })
				};
			}
		}]);

		return CheckBox;
	}(_input.Input);

	(0, _utils.defParser)(CheckBox, "input", "widgets-checkbox");

	CheckBox.register("command", "insert", {
		label: "CheckBox",
		run: function run(pm, name) {
			return pm.tr.replaceSelection(this.create({ name: name })).apply(pm.apply.scroll);
		},

		params: [{ name: "Name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle }
		}]
	});

	(0, _utils.defParamsClick)(CheckBox, "checkbox:insert", ["all"]);

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-checkbox:hover {\n\tcursor: pointer;\n}\n\n");

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.RadioButton = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	var _input = __webpack_require__(56);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var RadioButton = exports.RadioButton = function (_Input) {
		_inherits(RadioButton, _Input);

		function RadioButton() {
			_classCallCheck(this, RadioButton);

			return _possibleConstructorReturn(this, _Input.apply(this, arguments));
		}

		_createClass(RadioButton, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					type: new _model.Attribute({ default: "radio" }),
					value: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-radiobutton" })
				};
			}
		}]);

		return RadioButton;
	}(_input.Input);

	(0, _utils.defParser)(RadioButton, "input", "widgets-radiobutton");

	RadioButton.prototype.serializeDOM = function (node) {
		return (0, _dom.elt)("input", node.attrs);
	};

	(0, _dom.insertCSS)("\n\n.widgets-radiobutton {}\n\n");

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Select = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = exports.Select = function (_Inline) {
		_inherits(Select, _Inline);

		function Select() {
			_classCallCheck(this, Select);

			return _possibleConstructorReturn(this, _Inline.apply(this, arguments));
		}

		_createClass(Select, [{
			key: "contains",
			get: function get() {
				return null;
			}
		}, {
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					options: new _model.Attribute(),
					size: new _model.Attribute({ default: 1 }),
					multiple: new _model.Attribute({ default: "single" })
				};
			}
		}]);

		return Select;
	}(_model.Inline);

	(0, _utils.defParser)(Select, "select", "widgets-select");

	Select.prototype.serializeDOM = function (node) {
		var selection = node.attrs.multiple == "multiple";
		var select = (0, _dom.elt)("select", node.attrs);
		node.attrs.options.split(",").map(function (option) {
			select.appendChild((0, _dom.elt)("option", { value: option.trim() }, option));
		});
		return select;
	};

	Select.register("command", "insert", {
		label: "Select",
		run: function run(pm, name, options, size, multiple) {
			return pm.tr.replaceSelection(this.create({ name: name, options: options, size: size, multiple: multiple })).apply(pm.apply.scroll);
		},

		params: [{ name: "Name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle } }, { name: "Options", label: "comma separated names", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "options");
			} }, { name: "Size", label: "options displayed", type: "range",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "options");
			},
			options: { min: 1, max: 10, default: 1 }
		}, { name: "Selection", label: "Selection (single or multiple)", type: "select",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "multiple");
			},
			options: [{ value: "multiple", label: "multiple" }, { value: "single", label: "single" }]
		}]
	});

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-select {}\n\n");

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.TextField = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _input = __webpack_require__(56);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextField = exports.TextField = function (_Input) {
	  _inherits(TextField, _Input);

	  function TextField() {
	    _classCallCheck(this, TextField);

	    return _possibleConstructorReturn(this, _Input.apply(this, arguments));
	  }

	  _createClass(TextField, [{
	    key: "attrs",
	    get: function get() {
	      return {
	        name: new _model.Attribute(),
	        type: new _model.Attribute({ default: "text" }),
	        size: new _model.Attribute({ default: "20" }),
	        class: new _model.Attribute({ default: "widgets-textfield" })
	      };
	    }
	  }]);

	  return TextField;
	}(_input.Input);

	(0, _utils.defParser)(TextField, "input", "widgets-textfield");

	TextField.register("command", "insert", {
	  label: "TextField",
	  run: function run(pm, name) {
	    return pm.tr.replaceSelection(this.create({ name: name })).apply(pm.apply.scroll);
	  },

	  params: [{ name: "Name", label: "Short ID", type: "text",
	    prefill: function prefill(pm) {
	      return (0, _utils.selectedNodeAttr)(pm, this, "name");
	    },
	    options: {
	      pattern: _utils.namePattern,
	      size: 10,
	      title: _utils.nameTitle } }, { name: "Size", label: "Size in characters", type: "number", default: "20",
	    prefill: function prefill(pm) {
	      return (0, _utils.selectedNodeAttr)(pm, this, "size");
	    },
	    options: { min: 1, max: 80 } }]
	});

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-textfield:hover {\n\tcursor: pointer;\n}\n\n");

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.TextArea = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _input = __webpack_require__(56);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TextArea = exports.TextArea = function (_Block) {
	  _inherits(TextArea, _Block);

	  function TextArea() {
	    _classCallCheck(this, TextArea);

	    return _possibleConstructorReturn(this, _Block.apply(this, arguments));
	  }

	  _createClass(TextArea, [{
	    key: "attrs",
	    get: function get() {
	      return {
	        name: new _model.Attribute(),
	        rows: new _model.Attribute(),
	        cols: new _model.Attribute(),
	        class: new _model.Attribute({ default: "widgets-textarea" })
	      };
	    }
	  }]);

	  return TextArea;
	}(_model.Block);

	(0, _utils.defParser)(TextArea, "textarea", "widgets-textarea");

	TextArea.prototype.serializeDOM = function (node, s) {
	  return (0, _dom.elt)("textarea", node.attrs);
	};
	TextArea.register("command", "insert", {
	  label: "TextArea",
	  run: function run(pm, name, rows, cols) {
	    return pm.tr.replaceSelection(this.create({ name: name, rows: rows, cols: cols })).apply(pm.apply.scroll);
	  },

	  params: [{ name: "Name", label: "Short ID", type: "text",
	    prefill: function prefill(pm) {
	      return (0, _utils.selectedNodeAttr)(pm, this, "name");
	    },
	    options: {
	      pattern: _utils.namePattern,
	      size: 10,
	      title: _utils.nameTitle
	    } }, { name: "Rows", label: "In lines", type: "number", default: "4", options: { min: 2, max: 24 },
	    prefill: function prefill(pm) {
	      return (0, _utils.selectedNodeAttr)(pm, this, "rows");
	    }
	  }, { name: "Columns", label: "In characters", type: "number", default: "40",
	    prefill: function prefill(pm) {
	      return (0, _utils.selectedNodeAttr)(pm, this, "cols");
	    },
	    options: { min: 2, max: 80 }
	  }]
	});

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-textarea:hover {\n\tcursor: pointer;\n}\n\n");

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Essay = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Essay = exports.Essay = function (_Block) {
		_inherits(Essay, _Block);

		function Essay() {
			_classCallCheck(this, Essay);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		Essay.prototype.create = function create(attrs, content, marks) {
			return _Block.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.textarea.create(attrs, null, marks)], marks);
		};

		_createClass(Essay, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					rows: new _model.Attribute(),
					cols: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-essay widgets-edit" })
				};
			}
		}]);

		return Essay;
	}(_model.Block);

	(0, _utils.defParser)(Essay, "div", "widgets-essay");

	Essay.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	Essay.register("command", "insert", {
		label: "Essay",
		run: function run(pm, name, rows, cols) {
			var _pm$selection = pm.selection;
			var from = _pm$selection.from;
			var to = _pm$selection.to;
			var node = _pm$selection.node;

			if (node && node.type == this) {
				var tr = pm.tr.setNodeType(from, this, { name: name, rows: rows, cols: cols }).apply();
				return tr;
			} else return pm.tr.replaceSelection(this.create({ name: name, rows: rows, cols: cols })).apply(pm.apply.scroll);
		},
		select: function select(pm) {
			return pm.doc.path(pm.selection.from.path).type.canContainType(this);
		},

		menu: { group: "question", rank: 72, display: { type: "label", label: "Essay" }, select: "ignore" },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle
			} }, { name: "Rows", attr: "rows", label: "In lines lines", type: "number", default: "4", options: { min: 2, max: 24 },
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "rows");
			}
		}, { name: "Columns", attr: "cols", label: "In characters", type: "number", default: "40",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "cols");
			},
			options: { min: 2, max: 80 }
		}]
	});

	(0, _utils.defParamsClick)(Essay, "essay:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-essay p:hover {\n    cursor: text;\n}\n\n.ProseMirror .widgets-essay {\n\tborder-top: 1px solid #AAA;\n\tpadding: 8px;\n}\n\n");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.MultipleChoice = exports.Choice = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Choice = exports.Choice = function (_Block) {
		_inherits(Choice, _Block);

		function Choice() {
			_classCallCheck(this, Choice);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		Choice.prototype.create = function create(attrs, content, marks) {
			content = content ? content.content[0] : this.schema.nodes.textbox.create(null, "", marks);
			return _Block.prototype.create.call(this, attrs, [this.schema.nodes.radiobutton.create(attrs), content], marks);
		};

		_createClass(Choice, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					value: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-choice" })
				};
			}
		}]);

		return Choice;
	}(_model.Block);

	var MultipleChoice = exports.MultipleChoice = function (_Block2) {
		_inherits(MultipleChoice, _Block2);

		function MultipleChoice() {
			_classCallCheck(this, MultipleChoice);

			return _possibleConstructorReturn(this, _Block2.apply(this, arguments));
		}

		MultipleChoice.prototype.create = function create(attrs, content, marks) {
			return _Block2.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.choice.create({ name: attrs.name, value: 1 })], marks);
		};

		_createClass(MultipleChoice, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-multiplechoice widgets-edit" })
				};
			}
		}, {
			key: "isList",
			get: function get() {
				return true;
			}
		}]);

		return MultipleChoice;
	}(_model.Block);

	(0, _utils.defParser)(Choice, "div", "widgets-choice");
	(0, _utils.defParser)(MultipleChoice, "div", "widgets-multiplechoice");

	Choice.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	MultipleChoice.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	function renumber(pm, pos) {
		var cl = pm.doc.path(pos.path),
		    i = 1;
		cl.forEach(function (node, start) {
			if (start > 0) pm.tr.setNodeType(new _model.Pos(pos.path, start), node.type, { name: cl.attrs.name, value: i++ }).apply();
		});
	}

	Choice.register("command", "split", {
		label: "Split the current choice",
		run: function run(pm) {
			var _pm$selection = pm.selection;
			var from = _pm$selection.from;
			var to = _pm$selection.to;
			var node = _pm$selection.node;

			if (node && node.isBlock || from.path.length < 2 || !_model.Pos.samePath(from.path, to.path)) return false;
			var toParent = from.shorten(),
			    parent = pm.doc.path(toParent.path);
			if (parent.type != this) return false;
			var tr = pm.tr.delete(from, to).split(from, 2).apply(pm.apply.scroll);
			//renumber(pm, toParent.shorten())
			return tr;
		},

		keys: ["Enter(10)"]
	});

	Choice.register("command", "delete", {
		label: "delete text, this choice or choicelist",
		run: function run(pm) {
			var _pm$selection2 = pm.selection;
			var from = _pm$selection2.from;
			var to = _pm$selection2.to;
			var head = _pm$selection2.head;

			if (from.offset > 0) return pm.tr.delete(from, to).apply(pm.apply.scroll);
			var toCH = from.shorten(),
			    ch = pm.doc.path(toCH.path);
			var toMC = toCH.shorten(),
			    mc = pm.doc.path(toMC.path);
			// if more than one choice then delete choice otherwise delete whole multiplechoice
			if (mc.size > 1) {
				var cut = (0, _utils.getPosInParent)(pm, toMC, ch);
				pm.tr.lift(head).apply();
				return pm.tr.delete(cut, cut.move(1)).apply(pm.apply.scroll);
				//renumber(pm, toMC)
			} else {
					// don't delete if first choice has content
					if (pm.doc.path(from.path).size > 0) return true;
					var cut = (0, _utils.getPosInParent)(pm, toMC.shorten(), mc);
					return pm.tr.delete(cut, cut.move(1)).apply(pm.apply.scroll);
				}
		},

		keys: ["Backspace(20)", "Mod-Backspace(20)"]
	});

	MultipleChoice.register("command", "insert", {
		label: "MultipleChoice",
		run: function run(pm, name) {
			var _pm$selection3 = pm.selection;
			var from = _pm$selection3.from;
			var to = _pm$selection3.to;
			var node = _pm$selection3.node;

			if (node && node.type == this) {
				var tr = pm.tr.setNodeType(from, this, { name: name }).apply();
				//renumber(pm,Pos.from(from.toPath().concat(from.offset),0))
				return tr;
			} else return pm.tr.replaceSelection(this.create({ name: name })).apply(pm.apply.scroll);
		},
		select: function select(pm) {
			return true;
		},

		menu: { group: "question", rank: 70, display: { type: "label", label: "MultipleChoice" } },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle }
		}]
	});

	(0, _utils.defParamsClick)(MultipleChoice, "multiplechoice:insert");

	(0, _dom.insertCSS)("\n\n.widgets-choice input {\n\tfloat: left;\n}\n\n.widgets-multiplechoice {\n\tborder-top: 1px solid #DDD;\n\tpadding: 8px;\n}\n\n.ProseMirror .widgets-multiplechoice p:hover {\n    cursor: text;\n}\n\n.ProseMirror .widgets-choice:hover {\n\tcursor: text;\n}\n\n");

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.CheckList = exports.CheckItem = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _textbox = __webpack_require__(2);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CheckItem = exports.CheckItem = function (_Block) {
		_inherits(CheckItem, _Block);

		function CheckItem() {
			_classCallCheck(this, CheckItem);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		CheckItem.prototype.create = function create(attrs, content, marks) {
			content = content ? content.content[0] : this.schema.nodes.textbox.create(null, "", marks);
			return _Block.prototype.create.call(this, attrs, [this.schema.nodes.checkbox.create(attrs), content], marks);
		};

		_createClass(CheckItem, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					value: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-checkitem" })
				};
			}
		}], [{
			key: "kinds",
			get: function get() {
				return "checkitem";
			}
		}]);

		return CheckItem;
	}(_model.Block);

	var CheckList = exports.CheckList = function (_Block2) {
		_inherits(CheckList, _Block2);

		function CheckList() {
			_classCallCheck(this, CheckList);

			return _possibleConstructorReturn(this, _Block2.apply(this, arguments));
		}

		CheckList.prototype.create = function create(attrs, content, marks) {
			return _Block2.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.checkitem.create({ name: attrs.name, value: 1 }, content, marks)]);
		};

		_createClass(CheckList, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-checklist widgets-edit" })
				};
			}
		}, {
			key: "isList",
			get: function get() {
				return true;
			}
		}], [{
			key: "kinds",
			get: function get() {
				return _Block2.kinds + " checklist";
			}
		}, {
			key: "contains",
			get: function get() {
				return "checkitem";
			}
		}]);

		return CheckList;
	}(_model.Block);

	(0, _utils.defParser)(CheckItem, "div", "widgets-checkitem");
	(0, _utils.defParser)(CheckList, "div", "widgets-checklist");

	CheckItem.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	CheckList.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	function renumber(pm, pos) {
		var cl = pm.doc.path(pos.path),
		    i = 1;
		cl.forEach(function (node, start) {
			pm.tr.setNodeType(new _model.Pos(pos.path, start), node.type, { name: node.attrs.name + "-" + i, value: i++ }).apply();
		});
	}

	CheckItem.register("command", "split", {
		label: "Split the current checkitem",
		run: function run(pm) {
			var _pm$selection = pm.selection;
			var from = _pm$selection.from;
			var to = _pm$selection.to;
			var node = _pm$selection.node;

			if (node && node.isBlock || from.path.length < 2 || !_model.Pos.samePath(from.path, to.path)) return false;
			var toParent = from.shorten(),
			    parent = pm.doc.path(toParent.path);
			if (parent.type != this) return false;
			var tr = pm.tr.delete(from, to).split(from, 2).apply(pm.apply.scroll);
			renumber(pm, toParent.shorten());
			return tr;
		},

		keys: ["Enter(10)"]
	});

	CheckItem.register("command", "delete", {
		label: "delete this checkitem or checklist",
		run: function run(pm) {
			var _pm$selection2 = pm.selection;
			var from = _pm$selection2.from;
			var to = _pm$selection2.to;
			var head = _pm$selection2.head;

			if (from.offset > 0) return pm.tr.delete(from, to).apply(pm.apply.scroll);
			var toCH = from.shorten(),
			    ch = pm.doc.path(toCH.path);
			var toMC = toCH.shorten(),
			    mc = pm.doc.path(toMC.path);
			// if more than one choice then delete choice otherwise delete whole multiplechoice
			if (mc.size > 1) {
				var cut = getPosInParent(pm, toMC, ch);
				pm.tr.lift(head).apply();
				return pm.tr.delete(cut, cut.move(1)).apply(pm.apply.scroll);
				//renumber(pm, toMC)
			} else {
					// don't delete if still content in first choice
					if (pm.doc.path(from.path).size > 0) return true;
					var cut = getPosInParent(pm, toMC.shorten(), mc);
					return pm.tr.delete(cut, cut.move(1)).apply(pm.apply.scroll);
				}
		},

		keys: ["Backspace(20)", "Mod-Backspace(20)"]
	});

	CheckList.register("command", "insert", {
		label: "Check List",
		run: function run(pm, name) {
			var _pm$selection3 = pm.selection;
			var from = _pm$selection3.from;
			var to = _pm$selection3.to;
			var node = _pm$selection3.node;

			if (node && node.type == this) {
				var tr = pm.tr.setNodeType(from, this, { name: name }).apply();
				renumber(pm, _model.Pos.from(from.toPath().concat(from.offset), 0));
				return tr;
			} else return pm.tr.replaceSelection(this.create({ name: name })).apply(pm.apply.scroll);
		},
		select: function select(pm) {
			return true;
		},

		menu: { group: "question", rank: 70, display: { type: "label", label: "CheckList" } },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle } }]
	});

	(0, _utils.defParamsClick)(CheckList, "checklist:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-checkitem input {\n\tfloat: left;\n}\n\n.widgets-checklist {\n\tborder-top: 1px solid #DDD;\n\tpadding-left: 8px;\n\tpadding-top: 8px;\n}\n.ProseMirror .widgets-checklist p {\n    cursor: text;\n}\n\n\n.ProseMirror .widgets-checkitem {\n\tcursor: text;\n}\n\n\n");

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Scale = exports.ScaleDisplay = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScaleDisplay = exports.ScaleDisplay = function (_Block) {
		_inherits(ScaleDisplay, _Block);

		function ScaleDisplay() {
			_classCallCheck(this, ScaleDisplay);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		_createClass(ScaleDisplay, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					startvalue: new _model.Attribute({ default: "1" }),
					startlabel: new _model.Attribute({ default: "low" }),
					endvalue: new _model.Attribute({ default: "10" }),
					endlabel: new _model.Attribute({ default: "high" })
				};
			}
		}]);

		return ScaleDisplay;
	}(_model.Block);

	ScaleDisplay.prototype.serializeDOM = function (node, s) {
		var para = (0, _dom.elt)("div", { contenteditable: false });
		para.appendChild((0, _dom.elt)("span", null, node.attrs.startlabel + " "));
		var startVal = Number(node.attrs.startvalue);
		var endVal = Number(node.attrs.endvalue);
		if (startVal < endVal) for (var i = startVal; i <= endVal; i++) {
			var _name = node.attrs.name + i;
			para.appendChild((0, _dom.elt)("span", { class: "widgets-scaleitem" }, (0, _dom.elt)("label", { for: _name }, i.toString()), (0, _dom.elt)("input", { id: _name, name: node.attrs.name, type: "radio", value: i })));
		} else for (var i = startVal; i >= endVal; i--) {
			para.appendChild((0, _dom.elt)("span", { class: "widgets-scaleitem" }, (0, _dom.elt)("label", { for: name }, i.toString()), (0, _dom.elt)("input", { id: name, name: node.attrs.name, type: "radio", value: i })));
		}
		para.appendChild((0, _dom.elt)("span", null, " " + node.attrs.endlabel));
		return para;
	};

	var Scale = exports.Scale = function (_Block2) {
		_inherits(Scale, _Block2);

		function Scale() {
			_classCallCheck(this, Scale);

			return _possibleConstructorReturn(this, _Block2.apply(this, arguments));
		}

		Scale.prototype.create = function create(attrs, content, marks) {
			return _Block2.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.scaledisplay.create(attrs, null, marks)], marks);
		};

		_createClass(Scale, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					startvalue: new _model.Attribute({ default: "1" }),
					startlabel: new _model.Attribute({ default: "low" }),
					endvalue: new _model.Attribute({ default: "10" }),
					endlabel: new _model.Attribute({ default: "high" }),
					class: new _model.Attribute({ default: "widgets-scale widgets-edit" })
				};
			}
		}], [{
			key: "contains",
			get: function get() {
				return "text";
			}
		}]);

		return Scale;
	}(_model.Block);

	(0, _utils.defParser)(Scale, "div", "widgets-scale");

	Scale.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	Scale.register("command", "insert", {
		label: "Scale",
		run: function run(pm, name, startvalue, startlabel, endvalue, endlabel) {
			var _pm$selection = pm.selection;
			var from = _pm$selection.from;
			var to = _pm$selection.to;
			var node = _pm$selection.node;

			if (node && node.type == this) {
				return pm.tr.setNodeType(from, this, { name: name, startvalue: startvalue, startlabel: startlabel, endvalue: endvalue, endlabel: endlabel }).apply(pm.apply.scroll);
			} else return pm.tr.replaceSelection(this.create({ name: name, startvalue: startvalue, startlabel: startlabel, endvalue: endvalue, endlabel: endlabel })).apply(pm.apply.scroll);
		},

		menu: { group: "question", rank: 74, display: { type: "label", label: "Scale" } },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle } }, { label: "Start value", attr: "startvalue", type: "number", default: 1,
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "startvalue");
			} }, { name: "Start Label", attr: "startlabel", label: "Text on left", type: "text", default: "low",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "startlabel");
			} }, { label: "End value", attr: "endvalue", type: "number", default: 10,
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "endvalue");
			} }, { name: "End Label", attr: "endlabel", label: "Text on right", type: "text", default: "high",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "endlabel");
			} }]
	});

	(0, _utils.defParamsClick)(Scale, "scale:insert");

	(0, _dom.insertCSS)("\n\n.widgets-scaleitem {\n\tdisplay: inline-block;\n\ttext-align: center;\n    padding: 4px;\n}\n\n.widgets-scaleitem input {\n\tdisplay: block;\n}\n\n.widgets-scale span {\n\tvertical-align: middle;\n\tfont-weight: normal;\n}\n\n.ProseMirror .widgets-scale p:hover {\n    cursor: text;\n}\n\n.widgets-scale {\n\tpadding: 8px;\n    border-top: 1px solid #AAA;\n}\n\n.widgets-scale div {\n\tdisplay: inline-block;\n\tpadding: 4px;\n\tbackground: #EEE;\n    border-radius: 6px;\n    border: 1px solid #AAA;\n}\n");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Selection = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _input = __webpack_require__(55);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Selection = exports.Selection = function (_Block) {
		_inherits(Selection, _Block);

		function Selection() {
			_classCallCheck(this, Selection);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		Selection.prototype.create = function create(attrs, content, marks) {
			return _Block.prototype.create.call(this, attrs, [this.schema.nodes.paragraph.create(null, "", marks), this.schema.nodes.select.create(attrs, null, marks)], marks);
		};

		_createClass(Selection, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					options: new _model.Attribute(),
					size: new _model.Attribute({ default: 1 }),
					multiple: new _model.Attribute({ default: "single" }),
					class: new _model.Attribute({ default: "widgets-selection widgets-edit" })
				};
			}
		}]);

		return Selection;
	}(_model.Block);

	(0, _utils.defParser)(Selection, "div", "widgets-selection");

	Selection.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "div", node.attrs);
	};

	Selection.register("command", "insert", {
		label: "Selection",
		run: function run(pm, name, options, size, multiple) {
			var _pm$selection = pm.selection;
			var from = _pm$selection.from;
			var to = _pm$selection.to;
			var node = _pm$selection.node;

			if (node && node.type == this) {
				var tr = pm.tr.setNodeType(from, this, { name: name, options: options, size: size, multiple: multiple }).apply();
				return tr;
			} else return pm.tr.replaceSelection(this.create({ name: name, options: options, size: size, multiple: multiple })).apply(pm.apply.scroll);
		},

		menu: { group: "question", rank: 75, display: { type: "label", label: "Selection" } },
		params: [{ name: "Name", attr: "name", label: "Short ID", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "name");
			},
			options: {
				pattern: _utils.namePattern,
				size: 10,
				title: _utils.nameTitle } }, { name: "Options", attr: "options", label: "comma separated names", type: "text",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "options");
			} }, { name: "Size", attr: "size", label: "options displayed", type: "number", default: 1,
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "size");
			},
			options: { min: 1, max: 10 }
		}, { name: "Selection", attr: "multiple", label: "Selection (single or multiple)", type: "select", default: "single",
			prefill: function prefill(pm) {
				return (0, _utils.selectedNodeAttr)(pm, this, "multiple");
			},
			options: [{ value: "multiple", label: "multiple" }, { value: "single", label: "single" }]
		}]
	});

	(0, _utils.defParamsClick)(Selection, "selection:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-selection p:hover {\n    cursor: text;\n}\n\n.ProseMirror .widgets-selection {\n\tborder-top: 1px solid #AAA;\n\tpadding: 8px;\n}\n\n");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _blockmath = __webpack_require__(68);

	Object.defineProperty(exports, "BlockMath", {
	  enumerable: true,
	  get: function get() {
	    return _blockmath.BlockMath;
	  }
	});

	var _website = __webpack_require__(71);

	Object.defineProperty(exports, "Website", {
	  enumerable: true,
	  get: function get() {
	    return _website.Website;
	  }
	});

	var _inlinemath = __webpack_require__(72);

	Object.defineProperty(exports, "InlineMath", {
	  enumerable: true,
	  get: function get() {
	    return _inlinemath.InlineMath;
	  }
	});

	var _image = __webpack_require__(73);

	Object.defineProperty(exports, "Image", {
	  enumerable: true,
	  get: function get() {
	    return _image.Image;
	  }
	});

	var _spreadsheet = __webpack_require__(74);

	Object.defineProperty(exports, "SpreadSheet", {
	  enumerable: true,
	  get: function get() {
	    return _spreadsheet.SpreadSheet;
	  }
	});

	var _carryforward = __webpack_require__(75);

	Object.defineProperty(exports, "CarryForward", {
	  enumerable: true,
	  get: function get() {
	    return _carryforward.CarryForward;
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.BlockMath = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(69);
	__webpack_require__(70);

	var BlockMath = exports.BlockMath = function (_Block) {
		_inherits(BlockMath, _Block);

		function BlockMath() {
			_classCallCheck(this, BlockMath);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		_createClass(BlockMath, [{
			key: "attrs",
			get: function get() {
				return {
					tex: new _model.Attribute({ default: "" })
				};
			}
		}, {
			key: "contains",
			get: function get() {
				return null;
			}
		}]);

		return BlockMath;
	}(_model.Block);

	(0, _utils.defParser)(BlockMath, "div", "widgets-blockmath");

	BlockMath.prototype.serializeDOM = function (node) {
		if (node.rendered) {
			node.rendered = node.rendered.cloneNode(true);
		} else {
			node.rendered = (0, _dom.elt)("div", { class: "widgets-blockmath widgets-edit" }, "\\[" + node.attrs.tex + "\\]");
			// wait until node is attached to document to render
			MathJax.Hub.Queue(["Delay", MathJax.Callback, 100], ["Typeset", MathJax.Hub, node.rendered]);
		}
		return node.rendered;
	};

	BlockMath.register("command", "insert", {
		derive: {
			params: [{ name: "Latex", attr: "tex", label: "Latex Expression", type: "text",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "tex");
				} }]
		},
		label: "BlockMath",
		menu: { group: "content", rank: 73, display: { type: "label", label: "Block Math" } }
	});

	(0, _utils.defParamsClick)(BlockMath, "blockmath:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-blockmath {}\n\n");

/***/ },
/* 69 */
/***/ function(module, exports) {

	/*
	 *  /MathJax.js
	 *
	 *  Copyright (c) 2009-2015 The MathJax Consortium
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	if(document.getElementById&&document.childNodes&&document.createElement){if(!(window.MathJax&&MathJax.Hub)){if(window.MathJax){window.MathJax={AuthorConfig:window.MathJax}}else{window.MathJax={}}MathJax.isPacked=true;MathJax.version="2.6.1";MathJax.fileversion="2.6.1";MathJax.cdnVersion="2.6.1";MathJax.cdnFileVersions={};(function(d){var b=window[d];if(!b){b=window[d]={}}var e=[];var c=function(f){var g=f.constructor;if(!g){g=function(){}}for(var h in f){if(h!=="constructor"&&f.hasOwnProperty(h)){g[h]=f[h]}}return g};var a=function(){return function(){return arguments.callee.Init.call(this,arguments)}};b.Object=c({constructor:a(),Subclass:function(f,h){var g=a();g.SUPER=this;g.Init=this.Init;g.Subclass=this.Subclass;g.Augment=this.Augment;g.protoFunction=this.protoFunction;g.can=this.can;g.has=this.has;g.isa=this.isa;g.prototype=new this(e);g.prototype.constructor=g;g.Augment(f,h);return g},Init:function(f){var g=this;if(f.length===1&&f[0]===e){return g}if(!(g instanceof f.callee)){g=new f.callee(e)}return g.Init.apply(g,f)||g},Augment:function(f,g){var h;if(f!=null){for(h in f){if(f.hasOwnProperty(h)){this.protoFunction(h,f[h])}}if(f.toString!==this.prototype.toString&&f.toString!=={}.toString){this.protoFunction("toString",f.toString)}}if(g!=null){for(h in g){if(g.hasOwnProperty(h)){this[h]=g[h]}}}return this},protoFunction:function(g,f){this.prototype[g]=f;if(typeof f==="function"){f.SUPER=this.SUPER.prototype}},prototype:{Init:function(){},SUPER:function(f){return f.callee.SUPER},can:function(f){return typeof(this[f])==="function"},has:function(f){return typeof(this[f])!=="undefined"},isa:function(f){return(f instanceof Object)&&(this instanceof f)}},can:function(f){return this.prototype.can.call(this,f)},has:function(f){return this.prototype.has.call(this,f)},isa:function(g){var f=this;while(f){if(f===g){return true}else{f=f.SUPER}}return false},SimpleSUPER:c({constructor:function(f){return this.SimpleSUPER.define(f)},define:function(f){var h={};if(f!=null){for(var g in f){if(f.hasOwnProperty(g)){h[g]=this.wrap(g,f[g])}}if(f.toString!==this.prototype.toString&&f.toString!=={}.toString){h.toString=this.wrap("toString",f.toString)}}return h},wrap:function(i,h){if(typeof(h)!=="function"||!h.toString().match(/\.\s*SUPER\s*\(/)){return h}var g=function(){this.SUPER=g.SUPER[i];try{var f=h.apply(this,arguments)}catch(j){delete this.SUPER;throw j}delete this.SUPER;return f};g.toString=function(){return h.toString.apply(h,arguments)};return g}})})})("MathJax");(function(BASENAME){var BASE=window[BASENAME];if(!BASE){BASE=window[BASENAME]={}}var CALLBACK=function(data){var cb=function(){return arguments.callee.execute.apply(arguments.callee,arguments)};for(var id in CALLBACK.prototype){if(CALLBACK.prototype.hasOwnProperty(id)){if(typeof(data[id])!=="undefined"){cb[id]=data[id]}else{cb[id]=CALLBACK.prototype[id]}}}cb.toString=CALLBACK.prototype.toString;return cb};CALLBACK.prototype={isCallback:true,hook:function(){},data:[],object:window,execute:function(){if(!this.called||this.autoReset){this.called=!this.autoReset;return this.hook.apply(this.object,this.data.concat([].slice.call(arguments,0)))}},reset:function(){delete this.called},toString:function(){return this.hook.toString.apply(this.hook,arguments)}};var ISCALLBACK=function(f){return(typeof(f)==="function"&&f.isCallback)};var EVAL=function(code){return eval.call(window,code)};var TESTEVAL=function(){EVAL("var __TeSt_VaR__ = 1");if(window.__TeSt_VaR__){try{delete window.__TeSt_VaR__}catch(error){window.__TeSt_VaR__=null}}else{if(window.execScript){EVAL=function(code){BASE.__code=code;code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";window.execScript(code);var result=BASE.__result;delete BASE.__result;delete BASE.__code;if(result instanceof Error){throw result}return result}}else{EVAL=function(code){BASE.__code=code;code="try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";var head=(document.getElementsByTagName("head"))[0];if(!head){head=document.body}var script=document.createElement("script");script.appendChild(document.createTextNode(code));head.appendChild(script);head.removeChild(script);var result=BASE.__result;delete BASE.__result;delete BASE.__code;if(result instanceof Error){throw result}return result}}}TESTEVAL=null};var USING=function(args,i){if(arguments.length>1){if(arguments.length===2&&!(typeof arguments[0]==="function")&&arguments[0] instanceof Object&&typeof arguments[1]==="number"){args=[].slice.call(args,i)}else{args=[].slice.call(arguments,0)}}if(args instanceof Array&&args.length===1){args=args[0]}if(typeof args==="function"){if(args.execute===CALLBACK.prototype.execute){return args}return CALLBACK({hook:args})}else{if(args instanceof Array){if(typeof(args[0])==="string"&&args[1] instanceof Object&&typeof args[1][args[0]]==="function"){return CALLBACK({hook:args[1][args[0]],object:args[1],data:args.slice(2)})}else{if(typeof args[0]==="function"){return CALLBACK({hook:args[0],data:args.slice(1)})}else{if(typeof args[1]==="function"){return CALLBACK({hook:args[1],object:args[0],data:args.slice(2)})}}}}else{if(typeof(args)==="string"){if(TESTEVAL){TESTEVAL()}return CALLBACK({hook:EVAL,data:[args]})}else{if(args instanceof Object){return CALLBACK(args)}else{if(typeof(args)==="undefined"){return CALLBACK({})}}}}}throw Error("Can't make callback from given data")};var DELAY=function(time,callback){callback=USING(callback);callback.timeout=setTimeout(callback,time);return callback};var WAITFOR=function(callback,signal){callback=USING(callback);if(!callback.called){WAITSIGNAL(callback,signal);signal.pending++}};var WAITEXECUTE=function(){var signals=this.signal;delete this.signal;this.execute=this.oldExecute;delete this.oldExecute;var result=this.execute.apply(this,arguments);if(ISCALLBACK(result)&&!result.called){WAITSIGNAL(result,signals)}else{for(var i=0,m=signals.length;i<m;i++){signals[i].pending--;if(signals[i].pending<=0){signals[i].call()}}}};var WAITSIGNAL=function(callback,signals){if(!(signals instanceof Array)){signals=[signals]}if(!callback.signal){callback.oldExecute=callback.execute;callback.execute=WAITEXECUTE;callback.signal=signals}else{if(signals.length===1){callback.signal.push(signals[0])}else{callback.signal=callback.signal.concat(signals)}}};var AFTER=function(callback){callback=USING(callback);callback.pending=0;for(var i=1,m=arguments.length;i<m;i++){if(arguments[i]){WAITFOR(arguments[i],callback)}}if(callback.pending===0){var result=callback();if(ISCALLBACK(result)){callback=result}}return callback};var HOOKS=MathJax.Object.Subclass({Init:function(reset){this.hooks=[];this.remove=[];this.reset=reset;this.running=false},Add:function(hook,priority){if(priority==null){priority=10}if(!ISCALLBACK(hook)){hook=USING(hook)}hook.priority=priority;var i=this.hooks.length;while(i>0&&priority<this.hooks[i-1].priority){i--}this.hooks.splice(i,0,hook);return hook},Remove:function(hook){for(var i=0,m=this.hooks.length;i<m;i++){if(this.hooks[i]===hook){if(this.running){this.remove.push(i)}else{this.hooks.splice(i,1)}return}}},Execute:function(){var callbacks=[{}];this.running=true;for(var i=0,m=this.hooks.length;i<m;i++){if(this.reset){this.hooks[i].reset()}var result=this.hooks[i].apply(window,arguments);if(ISCALLBACK(result)&&!result.called){callbacks.push(result)}}this.running=false;if(this.remove.length){this.RemovePending()}if(callbacks.length===1){return null}if(callbacks.length===2){return callbacks[1]}return AFTER.apply({},callbacks)},RemovePending:function(){this.remove=this.remove.sort();for(var i=this.remove.length-1;i>=0;i--){this.hooks.splice(i,1)}this.remove=[]}});var EXECUTEHOOKS=function(hooks,data,reset){if(!hooks){return null}if(!(hooks instanceof Array)){hooks=[hooks]}if(!(data instanceof Array)){data=(data==null?[]:[data])}var handler=HOOKS(reset);for(var i=0,m=hooks.length;i<m;i++){handler.Add(hooks[i])}return handler.Execute.apply(handler,data)};var QUEUE=BASE.Object.Subclass({Init:function(){this.pending=this.running=0;this.queue=[];this.Push.apply(this,arguments)},Push:function(){var callback;for(var i=0,m=arguments.length;i<m;i++){callback=USING(arguments[i]);if(callback===arguments[i]&&!callback.called){callback=USING(["wait",this,callback])}this.queue.push(callback)}if(!this.running&&!this.pending){this.Process()}return callback},Process:function(queue){while(!this.running&&!this.pending&&this.queue.length){var callback=this.queue[0];queue=this.queue.slice(1);this.queue=[];this.Suspend();var result=callback();this.Resume();if(queue.length){this.queue=queue.concat(this.queue)}if(ISCALLBACK(result)&&!result.called){WAITFOR(result,this)}}},Suspend:function(){this.running++},Resume:function(){if(this.running){this.running--}},call:function(){this.Process.apply(this,arguments)},wait:function(callback){return callback}});var SIGNAL=QUEUE.Subclass({Init:function(name){QUEUE.prototype.Init.call(this);this.name=name;this.posted=[];this.listeners=HOOKS(true);this.posting=false;this.callback=null},Post:function(message,callback,forget){callback=USING(callback);if(this.posting||this.pending){this.Push(["Post",this,message,callback,forget])}else{this.callback=callback;callback.reset();if(!forget){this.posted.push(message)}this.Suspend();this.posting=true;var result=this.listeners.Execute(message);if(ISCALLBACK(result)&&!result.called){WAITFOR(result,this)}this.Resume();this.posting=false;if(!this.pending){this.call()}}return callback},Clear:function(callback){callback=USING(callback);if(this.posting||this.pending){callback=this.Push(["Clear",this,callback])}else{this.posted=[];callback()}return callback},call:function(){this.callback(this);this.Process()},Interest:function(callback,ignorePast,priority){callback=USING(callback);this.listeners.Add(callback,priority);if(!ignorePast){for(var i=0,m=this.posted.length;i<m;i++){callback.reset();var result=callback(this.posted[i]);if(ISCALLBACK(result)&&i===this.posted.length-1){WAITFOR(result,this)}}}return callback},NoInterest:function(callback){this.listeners.Remove(callback)},MessageHook:function(msg,callback,priority){callback=USING(callback);if(!this.hooks){this.hooks={};this.Interest(["ExecuteHooks",this])}if(!this.hooks[msg]){this.hooks[msg]=HOOKS(true)}this.hooks[msg].Add(callback,priority);for(var i=0,m=this.posted.length;i<m;i++){if(this.posted[i]==msg){callback.reset();callback(this.posted[i])}}callback.msg=msg;return callback},ExecuteHooks:function(msg){var type=((msg instanceof Array)?msg[0]:msg);if(!this.hooks[type]){return null}return this.hooks[type].Execute(msg)},RemoveHook:function(hook){this.hooks[hook.msg].Remove(hook)}},{signals:{},find:function(name){if(!SIGNAL.signals[name]){SIGNAL.signals[name]=new SIGNAL(name)}return SIGNAL.signals[name]}});BASE.Callback=BASE.CallBack=USING;BASE.Callback.Delay=DELAY;BASE.Callback.After=AFTER;BASE.Callback.Queue=QUEUE;BASE.Callback.Signal=SIGNAL.find;BASE.Callback.Hooks=HOOKS;BASE.Callback.ExecuteHooks=EXECUTEHOOKS})("MathJax");(function(e){var a=window[e];if(!a){a=window[e]={}}var d=(navigator.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub==="undefined");var g=0;var h=function(i){if(document.styleSheets&&document.styleSheets.length>g){g=document.styleSheets.length}if(!i){i=document.head||((document.getElementsByTagName("head"))[0]);if(!i){i=document.body}}return i};var f=[];var c=function(){for(var k=0,j=f.length;k<j;k++){a.Ajax.head.removeChild(f[k])}f=[]};var b={};b[e]="";a.Ajax={loaded:{},loading:{},loadHooks:{},timeout:15*1000,styleDelay:1,config:{root:"",path:b},STATUS:{OK:1,ERROR:-1},fileURL:function(j){var i=j.match(/^\[([-._a-z0-9]+)\]/i);if(i&&i[1] in b){j=(b[i[1]]||this.config.root)+j.substr(i[1].length+2)}return j},fileName:function(j){var i=this.config.root;if(j.substr(0,i.length)===i){j="["+e+"]"+j.substr(i.length)}else{for(var k in b){if(b.hasOwnProperty(k)&&b[k]){if(j.substr(0,b[k].length)===b[k]){j="["+k+"]"+j.substr(b[k].length);break}}}}return j},fileRev:function(j){var i=a.cdnFileVersions[name]||a.cdnVersion;if(i){i="?rev="+i}return i},urlRev:function(i){return this.fileURL(i)+this.fileRev(i)},Require:function(k,n){n=a.Callback(n);var l;if(k instanceof Object){for(var j in k){if(k.hasOwnProperty(j)){l=j.toUpperCase();k=k[j]}}}else{l=k.split(/\./).pop().toUpperCase()}k=this.fileURL(k);if(this.loaded[k]){n(this.loaded[k])}else{var m={};m[l]=k;this.Load(m,n)}return n},Load:function(k,m){m=a.Callback(m);var l;if(k instanceof Object){for(var j in k){if(k.hasOwnProperty(j)){l=j.toUpperCase();k=k[j]}}}else{l=k.split(/\./).pop().toUpperCase()}k=this.fileURL(k);if(this.loading[k]){this.addHook(k,m)}else{this.head=h(this.head);if(this.loader[l]){this.loader[l].call(this,k,m)}else{throw Error("Can't load files of type "+l)}}return m},LoadHook:function(l,m,k){m=a.Callback(m);if(l instanceof Object){for(var j in l){if(l.hasOwnProperty(j)){l=l[j]}}}l=this.fileURL(l);if(this.loaded[l]){m(this.loaded[l])}else{this.addHook(l,m,k)}return m},addHook:function(j,k,i){if(!this.loadHooks[j]){this.loadHooks[j]=MathJax.Callback.Hooks()}this.loadHooks[j].Add(k,i);k.file=j},removeHook:function(i){if(this.loadHooks[i.file]){this.loadHooks[i.file].Remove(i);if(!this.loadHooks[i.file].hooks.length){delete this.loadHooks[i.file]}}},Preloading:function(){for(var l=0,j=arguments.length;l<j;l++){var k=this.fileURL(arguments[l]);if(!this.loading[k]){this.loading[k]={preloaded:true}}}},loader:{JS:function(k,m){var j=this.fileName(k);var i=document.createElement("script");var l=a.Callback(["loadTimeout",this,k]);this.loading[k]={callback:m,timeout:setTimeout(l,this.timeout),status:this.STATUS.OK,script:i};this.loading[k].message=a.Message.File(j);i.onerror=l;i.type="text/javascript";i.src=k+this.fileRev(j);this.head.appendChild(i)},CSS:function(j,l){var i=this.fileName(j);var k=document.createElement("link");k.rel="stylesheet";k.type="text/css";k.href=j+this.fileRev(i);this.loading[j]={callback:l,message:a.Message.File(i),status:this.STATUS.OK};this.head.appendChild(k);this.timer.create.call(this,[this.timer.file,j],k)}},timer:{create:function(j,i){j=a.Callback(j);if(i.nodeName==="STYLE"&&i.styleSheet&&typeof(i.styleSheet.cssText)!=="undefined"){j(this.STATUS.OK)}else{if(window.chrome&&i.nodeName==="LINK"){j(this.STATUS.OK)}else{if(d){this.timer.start(this,[this.timer.checkSafari2,g++,j],this.styleDelay)}else{this.timer.start(this,[this.timer.checkLength,i,j],this.styleDelay)}}}return j},start:function(j,i,k,l){i=a.Callback(i);i.execute=this.execute;i.time=this.time;i.STATUS=j.STATUS;i.timeout=l||j.timeout;i.delay=i.total=k||0;if(k){setTimeout(i,k)}else{i()}},time:function(i){this.total+=this.delay;this.delay=Math.floor(this.delay*1.05+5);if(this.total>=this.timeout){i(this.STATUS.ERROR);return 1}return 0},file:function(j,i){if(i<0){a.Ajax.loadTimeout(j)}else{a.Ajax.loadComplete(j)}},execute:function(){this.hook.call(this.object,this,this.data[0],this.data[1])},checkSafari2:function(i,j,k){if(i.time(k)){return}if(document.styleSheets.length>j&&document.styleSheets[j].cssRules&&document.styleSheets[j].cssRules.length){k(i.STATUS.OK)}else{setTimeout(i,i.delay)}},checkLength:function(i,l,n){if(i.time(n)){return}var m=0;var j=(l.sheet||l.styleSheet);try{if((j.cssRules||j.rules||[]).length>0){m=1}}catch(k){if(k.message.match(/protected variable|restricted URI/)){m=1}else{if(k.message.match(/Security error/)){m=1}}}if(m){setTimeout(a.Callback([n,i.STATUS.OK]),0)}else{setTimeout(i,i.delay)}}},loadComplete:function(i){i=this.fileURL(i);var j=this.loading[i];if(j&&!j.preloaded){a.Message.Clear(j.message);clearTimeout(j.timeout);if(j.script){if(f.length===0){setTimeout(c,0)}f.push(j.script)}this.loaded[i]=j.status;delete this.loading[i];this.addHook(i,j.callback)}else{if(j){delete this.loading[i]}this.loaded[i]=this.STATUS.OK;j={status:this.STATUS.OK}}if(!this.loadHooks[i]){return null}return this.loadHooks[i].Execute(j.status)},loadTimeout:function(i){if(this.loading[i].timeout){clearTimeout(this.loading[i].timeout)}this.loading[i].status=this.STATUS.ERROR;this.loadError(i);this.loadComplete(i)},loadError:function(i){a.Message.Set(["LoadFailed","File failed to load: %1",i],null,2000);a.Hub.signal.Post(["file load error",i])},Styles:function(k,l){var i=this.StyleString(k);if(i===""){l=a.Callback(l);l()}else{var j=document.createElement("style");j.type="text/css";this.head=h(this.head);this.head.appendChild(j);if(j.styleSheet&&typeof(j.styleSheet.cssText)!=="undefined"){j.styleSheet.cssText=i}else{j.appendChild(document.createTextNode(i))}l=this.timer.create.call(this,l,j)}return l},StyleString:function(n){if(typeof(n)==="string"){return n}var k="",o,m;for(o in n){if(n.hasOwnProperty(o)){if(typeof n[o]==="string"){k+=o+" {"+n[o]+"}\n"}else{if(n[o] instanceof Array){for(var l=0;l<n[o].length;l++){m={};m[o]=n[o][l];k+=this.StyleString(m)}}else{if(o.substr(0,6)==="@media"){k+=o+" {"+this.StyleString(n[o])+"}\n"}else{if(n[o]!=null){m=[];for(var j in n[o]){if(n[o].hasOwnProperty(j)){if(n[o][j]!=null){m[m.length]=j+": "+n[o][j]}}}k+=o+" {"+m.join("; ")+"}\n"}}}}}}return k}}})("MathJax");MathJax.HTML={Element:function(d,f,e){var g=document.createElement(d),h;if(f){if(f.hasOwnProperty("style")){var c=f.style;f.style={};for(h in c){if(c.hasOwnProperty(h)){f.style[h.replace(/-([a-z])/g,this.ucMatch)]=c[h]}}}MathJax.Hub.Insert(g,f);for(h in f){if(h==="role"||h.substr(0,5)==="aria-"){g.setAttribute(h,f[h])}}}if(e){if(!(e instanceof Array)){e=[e]}for(var b=0,a=e.length;b<a;b++){if(e[b] instanceof Array){g.appendChild(this.Element(e[b][0],e[b][1],e[b][2]))}else{if(d==="script"){this.setScript(g,e[b])}else{g.appendChild(document.createTextNode(e[b]))}}}}return g},ucMatch:function(a,b){return b.toUpperCase()},addElement:function(b,a,d,c){return b.appendChild(this.Element(a,d,c))},TextNode:function(a){return document.createTextNode(a)},addText:function(a,b){return a.appendChild(this.TextNode(b))},setScript:function(a,b){if(this.setScriptBug){a.text=b}else{while(a.firstChild){a.removeChild(a.firstChild)}this.addText(a,b)}},getScript:function(a){var b=(a.text===""?a.innerHTML:a.text);return b.replace(/^\s+/,"").replace(/\s+$/,"")},Cookie:{prefix:"mjx",expires:365,Set:function(a,e){var d=[];if(e){for(var g in e){if(e.hasOwnProperty(g)){d.push(g+":"+e[g].toString().replace(/&/g,"&&"))}}}var b=this.prefix+"."+a+"="+escape(d.join("&;"));if(this.expires){var f=new Date();f.setDate(f.getDate()+this.expires);b+="; expires="+f.toGMTString()}try{document.cookie=b+"; path=/"}catch(c){}},Get:function(a,d){if(!d){d={}}var g=new RegExp("(?:^|;\\s*)"+this.prefix+"\\."+a+"=([^;]*)(?:;|$)");var f;try{f=g.exec(document.cookie)}catch(c){}if(f&&f[1]!==""){var j=unescape(f[1]).split("&;");for(var e=0,b=j.length;e<b;e++){f=j[e].match(/([^:]+):(.*)/);var h=f[2].replace(/&&/g,"&");if(h==="true"){h=true}else{if(h==="false"){h=false}else{if(h.match(/^-?(\d+(\.\d+)?|\.\d+)$/)){h=parseFloat(h)}}}d[f[1]]=h}}return d}}};MathJax.Localization={locale:"en",directory:"[MathJax]/localization",strings:{ast:{menuTitle:"asturianu"},bg:{menuTitle:"\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"},bcc:{menuTitle:"\u0628\u0644\u0648\u0686\u06CC"},br:{menuTitle:"brezhoneg"},ca:{menuTitle:"catal\u00E0"},cdo:{menuTitle:"M\u00ECng-d\u0115\u0324ng-ng\u1E73\u0304"},cs:{menuTitle:"\u010De\u0161tina"},da:{menuTitle:"dansk"},de:{menuTitle:"Deutsch"},en:{menuTitle:"English",isLoaded:true},eo:{menuTitle:"Esperanto"},es:{menuTitle:"espa\u00F1ol"},fa:{menuTitle:"\u0641\u0627\u0631\u0633\u06CC"},fi:{menuTitle:"suomi"},fr:{menuTitle:"fran\u00E7ais"},gl:{menuTitle:"galego"},he:{menuTitle:"\u05E2\u05D1\u05E8\u05D9\u05EA"},ia:{menuTitle:"interlingua"},it:{menuTitle:"italiano"},ja:{menuTitle:"\u65E5\u672C\u8A9E"},kn:{menuTitle:"\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"},ko:{menuTitle:"\uD55C\uAD6D\uC5B4"},lb:{menuTitle:"L\u00EBtzebuergesch"},lt:{menuTitle:"lietuvi\u0173"},mk:{menuTitle:"\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"},nl:{menuTitle:"Nederlands"},oc:{menuTitle:"occitan"},pl:{menuTitle:"polski"},pt:{menuTitle:"portugus\u00EA"},"pt-br":{menuTitle:"portugu\u00EAs do Brasil"},ru:{menuTitle:"\u0440\u0443\u0441\u0441\u043A\u0438\u0439"},sco:{menuTitle:"Scots"},scn:{menuTitle:"sicilianu"},sl:{menuTitle:"sloven\u0161\u010Dina"},sv:{menuTitle:"svenska"},tr:{menuTitle:"T\u00FCrk\u00E7e"},uk:{menuTitle:"\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},vi:{menuTitle:"Ti\u1EBFng Vi\u1EC7t"},"zh-hans":{menuTitle:"\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"}},pattern:/%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,SPLIT:("axb".split(/(x)/).length===3?function(a,b){return a.split(b)}:function(c,e){var a=[],b,d=0;e.lastIndex=0;while((b=e.exec(c))){a.push(c.substr(d,b.index-d));a.push.apply(a,b.slice(1));d=b.index+b[0].length}a.push(c.substr(d));return a}),_:function(b,a){if(a instanceof Array){return this.processSnippet(b,a)}return this.processString(this.lookupPhrase(b,a),[].slice.call(arguments,2))},processString:function(l,o,g){var j,e;for(j=0,e=o.length;j<e;j++){if(g&&o[j] instanceof Array){o[j]=this.processSnippet(g,o[j])}}var f=this.SPLIT(l,this.pattern);for(j=1,e=f.length;j<e;j+=2){var p=f[j].charAt(0);if(p>="0"&&p<="9"){f[j]=o[f[j]-1];if(typeof f[j]==="number"){f[j]=this.number(f[j])}}else{if(p==="{"){p=f[j].substr(1);if(p>="0"&&p<="9"){f[j]=o[f[j].substr(1,f[j].length-2)-1];if(typeof f[j]==="number"){f[j]=this.number(f[j])}}else{var k=f[j].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);if(k){if(k[1]==="plural"){var d=o[k[2]-1];if(typeof d==="undefined"){f[j]="???"}else{d=this.plural(d)-1;var h=k[3].replace(/(^|[^%])(%%)*%\|/g,"$1$2%\uEFEF").split(/\|/);if(d>=0&&d<h.length){f[j]=this.processString(h[d].replace(/\uEFEF/g,"|"),o,g)}else{f[j]="???"}}}else{f[j]="%"+f[j]}}}}}if(f[j]==null){f[j]="???"}}if(!g){return f.join("")}var a=[],b="";for(j=0;j<e;j++){b+=f[j];j++;if(j<e){if(f[j] instanceof Array){a.push(b);a=a.concat(f[j]);b=""}else{b+=f[j]}}}if(b!==""){a.push(b)}return a},processSnippet:function(g,e){var c=[];for(var d=0,b=e.length;d<b;d++){if(e[d] instanceof Array){var f=e[d];if(typeof f[1]==="string"){var h=f[0];if(!(h instanceof Array)){h=[g,h]}var a=this.lookupPhrase(h,f[1]);c=c.concat(this.processMarkdown(a,f.slice(2),g))}else{if(f[1] instanceof Array){c=c.concat(this.processSnippet.apply(this,f))}else{if(f.length>=3){c.push([f[0],f[1],this.processSnippet(g,f[2])])}else{c.push(e[d])}}}}else{c.push(e[d])}}return c},markdownPattern:/(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,processMarkdown:function(b,h,d){var j=[],e;var c=b.split(this.markdownPattern);var g=c[0];for(var f=1,a=c.length;f<a;f+=8){if(c[f+1]){e=this.processString(c[f+2],h,d);if(!(e instanceof Array)){e=[e]}e=[["b","i","i"][c[f+1].length-1],{},e];if(c[f+1].length===3){e=["b",{},e]}}else{if(c[f+3]){e=this.processString(c[f+4].replace(/^\s/,"").replace(/\s$/,""),h,d);if(!(e instanceof Array)){e=[e]}e=["code",{},e]}else{if(c[f+5]){e=this.processString(c[f+5],h,d);if(!(e instanceof Array)){e=[e]}e=["a",{href:this.processString(c[f+6],h),target:"_blank"},e]}else{g+=c[f];e=null}}}if(e){j=this.concatString(j,g,h,d);j.push(e);g=""}if(c[f+7]!==""){g+=c[f+7]}}j=this.concatString(j,g,h,d);return j},concatString:function(a,c,b,d){if(c!=""){c=this.processString(c,b,d);if(!(c instanceof Array)){c=[c]}a=a.concat(c)}return a},lookupPhrase:function(f,a,d){if(!d){d="_"}if(f instanceof Array){d=(f[0]||"_");f=(f[1]||"")}var c=this.loadDomain(d);if(c){MathJax.Hub.RestartAfter(c)}var b=this.strings[this.locale];if(b){if(b.domains&&d in b.domains){var e=b.domains[d];if(e.strings&&f in e.strings){a=e.strings[f]}}}return a},loadFile:function(b,d,e){e=MathJax.Callback(e);b=(d.file||b);if(!b.match(/\.js$/)){b+=".js"}if(!b.match(/^([a-z]+:|\[MathJax\])/)){var a=(this.strings[this.locale].directory||this.directory+"/"+this.locale||"[MathJax]/localization/"+this.locale);b=a+"/"+b}var c=MathJax.Ajax.Require(b,function(){d.isLoaded=true;return e()});return(c.called?null:c)},loadDomain:function(c,e){var b,a=this.strings[this.locale];if(a){if(!a.isLoaded){b=this.loadFile(this.locale,a);if(b){return MathJax.Callback.Queue(b,["loadDomain",this,c]).Push(e||{})}}if(a.domains&&c in a.domains){var d=a.domains[c];if(!d.isLoaded){b=this.loadFile(c,d);if(b){return MathJax.Callback.Queue(b).Push(e)}}}}return MathJax.Callback(e)()},Try:function(a){a=MathJax.Callback(a);a.autoReset=true;try{a()}catch(b){if(!b.restart){throw b}MathJax.Callback.After(["Try",this,a],b.restart)}},resetLocale:function(a){if(!a){return}a=a.toLowerCase();while(!this.strings[a]){var c=a.lastIndexOf("-");if(c===-1){return}a=a.substring(0,c)}var b=this.strings[a].remap;this.locale=b?b:a},setLocale:function(a){this.resetLocale(a);if(MathJax.Menu){this.loadDomain("MathMenu")}},addTranslation:function(b,e,c){var d=this.strings[b],a=false;if(!d){d=this.strings[b]={};a=true}if(!d.domains){d.domains={}}if(e){if(!d.domains[e]){d.domains[e]={}}d=d.domains[e]}MathJax.Hub.Insert(d,c);if(a&&MathJax.Menu.menu){MathJax.Menu.CreateLocaleMenu()}},setCSS:function(b){var a=this.strings[this.locale];if(a){if(a.fontFamily){b.style.fontFamily=a.fontFamily}if(a.fontDirection){b.style.direction=a.fontDirection;if(a.fontDirection==="rtl"){b.style.textAlign="right"}}}return b},fontFamily:function(){var a=this.strings[this.locale];return(a?a.fontFamily:null)},fontDirection:function(){var a=this.strings[this.locale];return(a?a.fontDirection:null)},plural:function(b){var a=this.strings[this.locale];if(a&&a.plural){return a.plural(b)}if(b==1){return 1}return 2},number:function(b){var a=this.strings[this.locale];if(a&&a.number){return a.number(b)}return b}};MathJax.Message={ready:false,log:[{}],current:null,textNodeBug:(navigator.vendor==="Apple Computer, Inc."&&typeof navigator.vendorSub==="undefined")||(window.hasOwnProperty&&window.hasOwnProperty("konqueror")),styles:{"#MathJax_Message":{position:"fixed",left:"1px",bottom:"2px","background-color":"#E6E6E6",border:"1px solid #959595",margin:"0px",padding:"2px 8px","z-index":"102",color:"black","font-size":"80%",width:"auto","white-space":"nowrap"},"#MathJax_MSIE_Frame":{position:"absolute",top:0,left:0,width:"0px","z-index":101,border:"0px",margin:"0px",padding:"0px"}},browsers:{MSIE:function(a){MathJax.Message.msieFixedPositionBug=((document.documentMode||0)<7);if(MathJax.Message.msieFixedPositionBug){MathJax.Hub.config.styles["#MathJax_Message"].position="absolute"}MathJax.Message.quirks=(document.compatMode==="BackCompat")},Chrome:function(a){MathJax.Hub.config.styles["#MathJax_Message"].bottom="1.5em";MathJax.Hub.config.styles["#MathJax_Message"].left="1em"}},Init:function(a){if(a){this.ready=true}if(!document.body||!this.ready){return false}if(this.div&&this.div.parentNode==null){this.div=document.getElementById("MathJax_Message");if(this.div){this.text=this.div.firstChild}}if(!this.div){var b=document.body;if(this.msieFixedPositionBug&&window.attachEvent){b=this.frame=this.addDiv(document.body);b.removeAttribute("id");b.style.position="absolute";b.style.border=b.style.margin=b.style.padding="0px";b.style.zIndex="101";b.style.height="0px";b=this.addDiv(b);b.id="MathJax_MSIE_Frame";window.attachEvent("onscroll",this.MoveFrame);window.attachEvent("onresize",this.MoveFrame);this.MoveFrame()}this.div=this.addDiv(b);this.div.style.display="none";this.text=this.div.appendChild(document.createTextNode(""))}return true},addDiv:function(a){var b=document.createElement("div");b.id="MathJax_Message";if(a.firstChild){a.insertBefore(b,a.firstChild)}else{a.appendChild(b)}return b},MoveFrame:function(){var a=(MathJax.Message.quirks?document.body:document.documentElement);var b=MathJax.Message.frame;b.style.left=a.scrollLeft+"px";b.style.top=a.scrollTop+"px";b.style.width=a.clientWidth+"px";b=b.firstChild;b.style.height=a.clientHeight+"px"},localize:function(a){return MathJax.Localization._(a,a)},filterText:function(a,c,b){if(MathJax.Hub.config.messageStyle==="simple"){if(b==="LoadFile"){if(!this.loading){this.loading=this.localize("Loading")+" "}a=this.loading;this.loading+="."}else{if(b==="ProcessMath"){if(!this.processing){this.processing=this.localize("Processing")+" "}a=this.processing;this.processing+="."}else{if(b==="TypesetMath"){if(!this.typesetting){this.typesetting=this.localize("Typesetting")+" "}a=this.typesetting;this.typesetting+="."}}}}return a},Set:function(c,e,b){if(e==null){e=this.log.length;this.log[e]={}}var d="";if(c instanceof Array){d=c[0];if(d instanceof Array){d=d[1]}try{c=MathJax.Localization._.apply(MathJax.Localization,c)}catch(a){if(!a.restart){throw a}if(!a.restart.called){if(this.log[e].restarted==null){this.log[e].restarted=0}this.log[e].restarted++;delete this.log[e].cleared;MathJax.Callback.After(["Set",this,c,e,b],a.restart);return e}}}if(this.timer){clearTimeout(this.timer);delete this.timer}this.log[e].text=c;this.log[e].filteredText=c=this.filterText(c,e,d);if(typeof(this.log[e].next)==="undefined"){this.log[e].next=this.current;if(this.current!=null){this.log[this.current].prev=e}this.current=e}if(this.current===e&&MathJax.Hub.config.messageStyle!=="none"){if(this.Init()){if(this.textNodeBug){this.div.innerHTML=c}else{this.text.nodeValue=c}this.div.style.display="";if(this.status){window.status="";delete this.status}}else{window.status=c;this.status=true}}if(this.log[e].restarted){if(this.log[e].cleared){b=0}if(--this.log[e].restarted===0){delete this.log[e].cleared}}if(b){setTimeout(MathJax.Callback(["Clear",this,e]),b)}else{if(b==0){this.Clear(e,0)}}return e},Clear:function(b,a){if(this.log[b].prev!=null){this.log[this.log[b].prev].next=this.log[b].next}if(this.log[b].next!=null){this.log[this.log[b].next].prev=this.log[b].prev}if(this.current===b){this.current=this.log[b].next;if(this.text){if(this.div.parentNode==null){this.Init()}if(this.current==null){if(this.timer){clearTimeout(this.timer);delete this.timer}if(a==null){a=600}if(a===0){this.Remove()}else{this.timer=setTimeout(MathJax.Callback(["Remove",this]),a)}}else{if(MathJax.Hub.config.messageStyle!=="none"){if(this.textNodeBug){this.div.innerHTML=this.log[this.current].filteredText}else{this.text.nodeValue=this.log[this.current].filteredText}}}if(this.status){window.status="";delete this.status}}else{if(this.status){window.status=(this.current==null?"":this.log[this.current].text)}}}delete this.log[b].next;delete this.log[b].prev;delete this.log[b].filteredText;if(this.log[b].restarted){this.log[b].cleared=true}},Remove:function(){this.text.nodeValue="";this.div.style.display="none"},File:function(a){return this.Set(["LoadFile","Loading %1",a],null,null)},Log:function(){var b=[];for(var c=1,a=this.log.length;c<a;c++){b[c]=this.log[c].text}return b.join("\n")}};MathJax.Hub={config:{root:"",config:[],styleSheets:[],styles:{".MathJax_Preview":{color:"#888"}},jax:[],extensions:[],preJax:null,postJax:null,displayAlign:"center",displayIndent:"0",preRemoveClass:"MathJax_Preview",showProcessingMessages:true,messageStyle:"normal",delayStartupUntil:"none",skipStartupTypeset:false,elements:[],positionToHash:true,showMathMenu:true,showMathMenuMSIE:true,menuSettings:{zoom:"None",CTRL:false,ALT:false,CMD:false,Shift:false,discoverable:false,zscale:"200%",renderer:null,font:"Auto",context:"MathJax",locale:null,mpContext:false,mpMouse:false,texHints:true,FastPreview:null,assistiveMML:null,inTabOrder:true,semantics:false},errorSettings:{message:["[",["MathProcessingError","Math Processing Error"],"]"],style:{color:"#CC0000","font-style":"italic"}},ignoreMMLattributes:{}},preProcessors:MathJax.Callback.Hooks(true),inputJax:{},outputJax:{order:{}},processSectionDelay:50,processUpdateTime:250,processUpdateDelay:10,signal:MathJax.Callback.Signal("Hub"),Config:function(a){this.Insert(this.config,a);if(this.config.Augment){this.Augment(this.config.Augment)}},CombineConfig:function(c,f){var b=this.config,g,e;c=c.split(/\./);for(var d=0,a=c.length;d<a;d++){g=c[d];if(!b[g]){b[g]={}}e=b;b=b[g]}e[g]=b=this.Insert(f,b);return b},Register:{PreProcessor:function(){return MathJax.Hub.preProcessors.Add.apply(MathJax.Hub.preProcessors,arguments)},MessageHook:function(){return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},StartupHook:function(){return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,arguments)},LoadHook:function(){return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments)}},UnRegister:{PreProcessor:function(a){MathJax.Hub.preProcessors.Remove(a)},MessageHook:function(a){MathJax.Hub.signal.RemoveHook(a)},StartupHook:function(a){MathJax.Hub.Startup.signal.RemoveHook(a)},LoadHook:function(a){MathJax.Ajax.removeHook(a)}},getAllJax:function(e){var c=[],b=this.elementScripts(e);for(var d=0,a=b.length;d<a;d++){if(b[d].MathJax&&b[d].MathJax.elementJax){c.push(b[d].MathJax.elementJax)}}return c},getJaxByType:function(f,e){var c=[],b=this.elementScripts(e);for(var d=0,a=b.length;d<a;d++){if(b[d].MathJax&&b[d].MathJax.elementJax&&b[d].MathJax.elementJax.mimeType===f){c.push(b[d].MathJax.elementJax)}}return c},getJaxByInputType:function(f,e){var c=[],b=this.elementScripts(e);for(var d=0,a=b.length;d<a;d++){if(b[d].MathJax&&b[d].MathJax.elementJax&&b[d].type&&b[d].type.replace(/ *;(.|\s)*/,"")===f){c.push(b[d].MathJax.elementJax)}}return c},getJaxFor:function(a){if(typeof(a)==="string"){a=document.getElementById(a)}if(a&&a.MathJax){return a.MathJax.elementJax}if(this.isMathJaxNode(a)){if(!a.isMathJax){a=a.firstChild}while(a&&!a.jaxID){a=a.parentNode}if(a){return MathJax.OutputJax[a.jaxID].getJaxFromMath(a)}}return null},isJax:function(a){if(typeof(a)==="string"){a=document.getElementById(a)}if(this.isMathJaxNode(a)){return 1}if(a&&(a.tagName||"").toLowerCase()==="script"){if(a.MathJax){return(a.MathJax.state===MathJax.ElementJax.STATE.PROCESSED?1:-1)}if(a.type&&this.inputJax[a.type.replace(/ *;(.|\s)*/,"")]){return -1}}return 0},isMathJaxNode:function(a){return !!a&&(a.isMathJax||(a.className||"")==="MathJax_MathML")},setRenderer:function(d,c){if(!d){return}if(!MathJax.OutputJax[d]){this.config.menuSettings.renderer="";var b="[MathJax]/jax/output/"+d+"/config.js";return MathJax.Ajax.Require(b,["setRenderer",this,d,c])}else{this.config.menuSettings.renderer=d;if(c==null){c="jax/mml"}var a=this.outputJax;if(a[c]&&a[c].length){if(d!==a[c][0].id){a[c].unshift(MathJax.OutputJax[d]);return this.signal.Post(["Renderer Selected",d])}}return null}},Queue:function(){return this.queue.Push.apply(this.queue,arguments)},Typeset:function(c,d){if(!MathJax.isReady){return null}var b=this.elementCallback(c,d);if(b.count){var a=MathJax.Callback.Queue(["PreProcess",this,b.elements],["Process",this,b.elements])}return a.Push(b.callback)},PreProcess:function(e,g){var c=this.elementCallback(e,g);var b=MathJax.Callback.Queue();if(c.count){var f=(c.count===1?[c.elements]:c.elements);b.Push(["Post",this.signal,["Begin PreProcess",c.elements]]);for(var d=0,a=f.length;d<a;d++){if(f[d]){b.Push(["Execute",this.preProcessors,f[d]])}}b.Push(["Post",this.signal,["End PreProcess",c.elements]])}return b.Push(c.callback)},Process:function(a,b){return this.takeAction("Process",a,b)},Update:function(a,b){return this.takeAction("Update",a,b)},Reprocess:function(a,b){return this.takeAction("Reprocess",a,b)},Rerender:function(a,b){return this.takeAction("Rerender",a,b)},takeAction:function(g,d,h){var c=this.elementCallback(d,h);var f=c.elements;var a=MathJax.Callback.Queue(["Clear",this.signal]);var e={scripts:[],start:new Date().getTime(),i:0,j:0,jax:{},jaxIDs:[]};if(c.count){var b=["Delay",MathJax.Callback,this.processSectionDelay];if(!b[2]){b={}}a.Push(["Post",this.signal,["Begin "+g,f]],["Post",this.signal,["Begin Math",f,g]],["prepareScripts",this,g,f,e],["Post",this.signal,["Begin Math Input",f,g]],["processInput",this,e],["Post",this.signal,["End Math Input",f,g]],b,["prepareOutput",this,e,"preProcess"],b,["Post",this.signal,["Begin Math Output",f,g]],["processOutput",this,e],["Post",this.signal,["End Math Output",f,g]],b,["prepareOutput",this,e,"postProcess"],b,["Post",this.signal,["End Math",f,g]],["Post",this.signal,["End "+g,f]])}return a.Push(c.callback)},scriptAction:{Process:function(a){},Update:function(b){var a=b.MathJax.elementJax;if(a&&a.needsUpdate()){a.Remove(true);b.MathJax.state=a.STATE.UPDATE}else{b.MathJax.state=a.STATE.PROCESSED}},Reprocess:function(b){var a=b.MathJax.elementJax;if(a){a.Remove(true);b.MathJax.state=a.STATE.UPDATE}},Rerender:function(b){var a=b.MathJax.elementJax;if(a){a.Remove(true);b.MathJax.state=a.STATE.OUTPUT}}},prepareScripts:function(h,e,g){if(arguments.callee.disabled){return}var b=this.elementScripts(e);var f=MathJax.ElementJax.STATE;for(var d=0,a=b.length;d<a;d++){var c=b[d];if(c.type&&this.inputJax[c.type.replace(/ *;(.|\n)*/,"")]){if(c.MathJax){if(c.MathJax.elementJax&&c.MathJax.elementJax.hover){MathJax.Extension.MathEvents.Hover.ClearHover(c.MathJax.elementJax)}if(c.MathJax.state!==f.PENDING){this.scriptAction[h](c)}}if(!c.MathJax){c.MathJax={state:f.PENDING}}if(c.MathJax.error){delete c.MathJax.error}if(c.MathJax.state!==f.PROCESSED){g.scripts.push(c)}}}},checkScriptSiblings:function(a){if(a.MathJax.checked){return}var b=this.config,f=a.previousSibling;if(f&&f.nodeName==="#text"){var d,e,c=a.nextSibling;if(c&&c.nodeName!=="#text"){c=null}if(b.preJax){if(typeof(b.preJax)==="string"){b.preJax=new RegExp(b.preJax+"$")}d=f.nodeValue.match(b.preJax)}if(b.postJax&&c){if(typeof(b.postJax)==="string"){b.postJax=new RegExp("^"+b.postJax)}e=c.nodeValue.match(b.postJax)}if(d&&(!b.postJax||e)){f.nodeValue=f.nodeValue.replace(b.preJax,(d.length>1?d[1]:""));f=null}if(e&&(!b.preJax||d)){c.nodeValue=c.nodeValue.replace(b.postJax,(e.length>1?e[1]:""))}if(f&&!f.nodeValue.match(/\S/)){f=f.previousSibling}}if(b.preRemoveClass&&f&&f.className===b.preRemoveClass){a.MathJax.preview=f}a.MathJax.checked=1},processInput:function(a){var b,i=MathJax.ElementJax.STATE;var h,e,d=a.scripts.length;try{while(a.i<d){h=a.scripts[a.i];if(!h){a.i++;continue}e=h.previousSibling;if(e&&e.className==="MathJax_Error"){e.parentNode.removeChild(e)}if(!h.MathJax||h.MathJax.state===i.PROCESSED){a.i++;continue}if(!h.MathJax.elementJax||h.MathJax.state===i.UPDATE){this.checkScriptSiblings(h);var g=h.type.replace(/ *;(.|\s)*/,"");var j=this.inputJax[g];b=j.Process(h,a);if(typeof b==="function"){if(b.called){continue}this.RestartAfter(b)}b=b.Attach(h,j.id);this.saveScript(b,a,h,i);this.postInputHooks.Execute(b,j.id,h)}else{if(h.MathJax.state===i.OUTPUT){this.saveScript(h.MathJax.elementJax,a,h,i)}}a.i++;var c=new Date().getTime();if(c-a.start>this.processUpdateTime&&a.i<a.scripts.length){a.start=c;this.RestartAfter(MathJax.Callback.Delay(1))}}}catch(f){return this.processError(f,a,"Input")}if(a.scripts.length&&this.config.showProcessingMessages){MathJax.Message.Set(["ProcessMath","Processing math: %1%%",100],0)}a.start=new Date().getTime();a.i=a.j=0;return null},postInputHooks:MathJax.Callback.Hooks(true),saveScript:function(a,d,b,c){if(!this.outputJax[a.mimeType]){b.MathJax.state=c.UPDATE;throw Error("No output jax registered for "+a.mimeType)}a.outputJax=this.outputJax[a.mimeType][0].id;if(!d.jax[a.outputJax]){if(d.jaxIDs.length===0){d.jax[a.outputJax]=d.scripts}else{if(d.jaxIDs.length===1){d.jax[d.jaxIDs[0]]=d.scripts.slice(0,d.i)}d.jax[a.outputJax]=[]}d.jaxIDs.push(a.outputJax)}if(d.jaxIDs.length>1){d.jax[a.outputJax].push(b)}b.MathJax.state=c.OUTPUT},prepareOutput:function(c,f){while(c.j<c.jaxIDs.length){var e=c.jaxIDs[c.j],d=MathJax.OutputJax[e];if(d[f]){try{var a=d[f](c);if(typeof a==="function"){if(a.called){continue}this.RestartAfter(a)}}catch(b){if(!b.restart){MathJax.Message.Set(["PrepError","Error preparing %1 output (%2)",e,f],null,600);MathJax.Hub.lastPrepError=b;c.j++}return MathJax.Callback.After(["prepareOutput",this,c,f],b.restart)}}c.j++}return null},processOutput:function(h){var b,g=MathJax.ElementJax.STATE,d,a=h.scripts.length;try{while(h.i<a){d=h.scripts[h.i];if(!d||!d.MathJax||d.MathJax.error){h.i++;continue}var c=d.MathJax.elementJax;if(!c){h.i++;continue}b=MathJax.OutputJax[c.outputJax].Process(d,h);if(b!==false){d.MathJax.state=g.PROCESSED;if(d.MathJax.preview){d.MathJax.preview.innerHTML=""}this.signal.Post(["New Math",c.inputID])}h.i++;var e=new Date().getTime();if(e-h.start>this.processUpdateTime&&h.i<h.scripts.length){h.start=e;this.RestartAfter(MathJax.Callback.Delay(this.processUpdateDelay))}}}catch(f){return this.processError(f,h,"Output")}if(h.scripts.length&&this.config.showProcessingMessages){MathJax.Message.Set(["TypesetMath","Typesetting math: %1%%",100],0);MathJax.Message.Clear(0)}h.i=h.j=0;return null},processMessage:function(d,b){var a=Math.floor(d.i/(d.scripts.length)*100);var c=(b==="Output"?["TypesetMath","Typesetting math: %1%%"]:["ProcessMath","Processing math: %1%%"]);if(this.config.showProcessingMessages){MathJax.Message.Set(c.concat(a),0)}},processError:function(b,c,a){if(!b.restart){if(!this.config.errorSettings.message){throw b}this.formatError(c.scripts[c.i],b);c.i++}this.processMessage(c,a);return MathJax.Callback.After(["process"+a,this,c],b.restart)},formatError:function(b,f){var h=function(l,k,j,i){return MathJax.Localization._(l,k,j,i)};var e=h("ErrorMessage","Error: %1",f.message)+"\n";if(f.sourceURL||f.fileName){e+="\n"+h("ErrorFile","file: %1",f.sourceURL||f.fileName)}if(f.line||f.lineNumber){e+="\n"+h("ErrorLine","line: %1",f.line||f.lineNumber)}e+="\n\n"+h("ErrorTips","Debugging tips: use %1, inspect %2 in the browser console","'unpacked/MathJax.js'","'MathJax.Hub.lastError'");b.MathJax.error=MathJax.OutputJax.Error.Jax(e,b);if(b.MathJax.elementJax){b.MathJax.error.inputID=b.MathJax.elementJax.inputID}var g=this.config.errorSettings;var a=h(g.messageId,g.message);var c=MathJax.HTML.Element("span",{className:"MathJax_Error",jaxID:"Error",isMathJax:true,id:b.MathJax.error.inputID+"-Frame"},[["span",null,a]]);MathJax.Ajax.Require("[MathJax]/extensions/MathEvents.js",function(){var j=MathJax.Extension.MathEvents.Event,i=MathJax.Hub;c.oncontextmenu=j.Menu;c.onmousedown=j.Mousedown;c.onkeydown=j.Keydown;c.tabIndex=i.getTabOrder(i.getJaxFor(b))});var d=document.getElementById(c.id);if(d){d.parentNode.removeChild(d)}b.parentNode.insertBefore(c,b);if(b.MathJax.preview){b.MathJax.preview.innerHTML=""}this.lastError=f;this.signal.Post(["Math Processing Error",b,f])},RestartAfter:function(a){throw this.Insert(Error("restart"),{restart:MathJax.Callback(a)})},elementCallback:function(c,f){if(f==null&&(c instanceof Array||typeof c==="function")){try{MathJax.Callback(c);f=c;c=null}catch(d){}}if(c==null){c=this.config.elements||[]}if(this.isHTMLCollection(c)){c=this.HTMLCollection2Array(c)}if(!(c instanceof Array)){c=[c]}c=[].concat(c);for(var b=0,a=c.length;b<a;b++){if(typeof(c[b])==="string"){c[b]=document.getElementById(c[b])}}if(!document.body){document.body=document.getElementsByTagName("body")[0]}if(c.length==0){c.push(document.body)}if(!f){f={}}return{count:c.length,elements:(c.length===1?c[0]:c),callback:f}},elementScripts:function(e){var b=[];if(e instanceof Array||this.isHTMLCollection(e)){for(var d=0,a=e.length;d<a;d++){var f=0;for(var c=0;c<d&&!f;c++){f=e[c].contains(e[d])}if(!f){b.push.apply(b,this.elementScripts(e[d]))}}return b}if(typeof(e)==="string"){e=document.getElementById(e)}if(!document.body){document.body=document.getElementsByTagName("body")[0]}if(e==null){e=document.body}if(e.tagName!=null&&e.tagName.toLowerCase()==="script"){return[e]}b=e.getElementsByTagName("script");if(this.msieHTMLCollectionBug){b=this.HTMLCollection2Array(b)}return b},isHTMLCollection:function(a){return("HTMLCollection" in window&&typeof(a)==="object"&&a instanceof HTMLCollection)},HTMLCollection2Array:function(c){if(!this.msieHTMLCollectionBug){return[].slice.call(c)}var b=[];for(var d=0,a=c.length;d<a;d++){b[d]=c[d]}return b},Insert:function(c,a){for(var b in a){if(a.hasOwnProperty(b)){if(typeof a[b]==="object"&&!(a[b] instanceof Array)&&(typeof c[b]==="object"||typeof c[b]==="function")){this.Insert(c[b],a[b])}else{c[b]=a[b]}}}return c},getTabOrder:function(a){return this.config.menuSettings.inTabOrder?0:-1},SplitList:("trim" in String.prototype?function(a){return a.trim().split(/\s+/)}:function(a){return a.replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/)})};MathJax.Hub.Insert(MathJax.Hub.config.styles,MathJax.Message.styles);MathJax.Hub.Insert(MathJax.Hub.config.styles,{".MathJax_Error":MathJax.Hub.config.errorSettings.style});MathJax.Extension={};MathJax.Hub.Configured=MathJax.Callback({});MathJax.Hub.Startup={script:"",queue:MathJax.Callback.Queue(),signal:MathJax.Callback.Signal("Startup"),params:{},Config:function(){this.queue.Push(["Post",this.signal,"Begin Config"]);if(this.params.locale){MathJax.Localization.resetLocale(this.params.locale);MathJax.Hub.config.menuSettings.locale=this.params.locale}if(this.params.config){var c=this.params.config.split(/,/);for(var b=0,a=c.length;b<a;b++){if(!c[b].match(/\.js$/)){c[b]+=".js"}this.queue.Push(["Require",MathJax.Ajax,this.URL("config",c[b])])}}this.queue.Push(["Config",MathJax.Hub,MathJax.AuthorConfig]);if(this.script.match(/\S/)){this.queue.Push(this.script+";\n1;")}this.queue.Push(["ConfigDelay",this],["ConfigBlocks",this],[function(d){return d.loadArray(MathJax.Hub.config.config,"config",null,true)},this],["Post",this.signal,"End Config"])},ConfigDelay:function(){var a=this.params.delayStartupUntil||MathJax.Hub.config.delayStartupUntil;if(a==="onload"){return this.onload}if(a==="configured"){return MathJax.Hub.Configured}return a},ConfigBlocks:function(){var c=document.getElementsByTagName("script");var f=null,b=MathJax.Callback.Queue();for(var d=0,a=c.length;d<a;d++){var e=String(c[d].type).replace(/ /g,"");if(e.match(/^text\/x-mathjax-config(;.*)?$/)&&!e.match(/;executed=true/)){c[d].type+=";executed=true";f=b.Push(c[d].innerHTML+";\n1;")}}return f},Cookie:function(){return this.queue.Push(["Post",this.signal,"Begin Cookie"],["Get",MathJax.HTML.Cookie,"menu",MathJax.Hub.config.menuSettings],[function(e){var d=e.menuSettings;if(d.locale){MathJax.Localization.resetLocale(d.locale)}var g=e.menuSettings.renderer,b=e.jax;if(g){var c="output/"+g;b.sort();for(var f=0,a=b.length;f<a;f++){if(b[f].substr(0,7)==="output/"){break}}if(f==a-1){b.pop()}else{while(f<a){if(b[f]===c){b.splice(f,1);break}f++}}b.unshift(c)}if(d.CHTMLpreview!=null){if(d.FastPreview==null){d.FastPreview=d.CHTMLpreview}delete d.CHTMLpreview}if(d.FastPreview&&!MathJax.Extension["fast-preview"]){MathJax.Hub.config.extensions.push("fast-preview.js")}if(e.menuSettings.assistiveMML&&!MathJax.Extension.AssistiveMML){MathJax.Hub.config.extensions.push("AssistiveMML.js")}},MathJax.Hub.config],["Post",this.signal,"End Cookie"])},Styles:function(){return this.queue.Push(["Post",this.signal,"Begin Styles"],["loadArray",this,MathJax.Hub.config.styleSheets,"config"],["Styles",MathJax.Ajax,MathJax.Hub.config.styles],["Post",this.signal,"End Styles"])},Jax:function(){var f=MathJax.Hub.config,c=MathJax.Hub.outputJax;for(var g=0,b=f.jax.length,d=0;g<b;g++){var e=f.jax[g].substr(7);if(f.jax[g].substr(0,7)==="output/"&&c.order[e]==null){c.order[e]=d;d++}}var a=MathJax.Callback.Queue();return a.Push(["Post",this.signal,"Begin Jax"],["loadArray",this,f.jax,"jax","config.js"],["Post",this.signal,"End Jax"])},Extensions:function(){var a=MathJax.Callback.Queue();return a.Push(["Post",this.signal,"Begin Extensions"],["loadArray",this,MathJax.Hub.config.extensions,"extensions"],["Post",this.signal,"End Extensions"])},Message:function(){MathJax.Message.Init(true)},Menu:function(){var b=MathJax.Hub.config.menuSettings,a=MathJax.Hub.outputJax,d;for(var c in a){if(a.hasOwnProperty(c)){if(a[c].length){d=a[c];break}}}if(d&&d.length){if(b.renderer&&b.renderer!==d[0].id){d.unshift(MathJax.OutputJax[b.renderer])}b.renderer=d[0].id}},Hash:function(){if(MathJax.Hub.config.positionToHash&&document.location.hash&&document.body&&document.body.scrollIntoView){var d=document.location.hash.substr(1);var f=document.getElementById(d);if(!f){var c=document.getElementsByTagName("a");for(var e=0,b=c.length;e<b;e++){if(c[e].name===d){f=c[e];break}}}if(f){while(!f.scrollIntoView){f=f.parentNode}f=this.HashCheck(f);if(f&&f.scrollIntoView){setTimeout(function(){f.scrollIntoView(true)},1)}}}},HashCheck:function(b){var a=MathJax.Hub.getJaxFor(b);if(a&&MathJax.OutputJax[a.outputJax].hashCheck){b=MathJax.OutputJax[a.outputJax].hashCheck(b)}return b},MenuZoom:function(){if(MathJax.Hub.config.showMathMenu){if(!MathJax.Extension.MathMenu){setTimeout(function(){MathJax.Callback.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/MathMenu.js",{}],["loadDomain",MathJax.Localization,"MathMenu"])},1000)}else{setTimeout(MathJax.Callback(["loadDomain",MathJax.Localization,"MathMenu"]),1000)}if(!MathJax.Extension.MathZoom){setTimeout(MathJax.Callback(["Require",MathJax.Ajax,"[MathJax]/extensions/MathZoom.js",{}]),2000)}}},onLoad:function(){var a=this.onload=MathJax.Callback(function(){MathJax.Hub.Startup.signal.Post("onLoad")});if(document.body&&document.readyState){if(MathJax.Hub.Browser.isMSIE){if(document.readyState==="complete"){return[a]}}else{if(document.readyState!=="loading"){return[a]}}}if(window.addEventListener){window.addEventListener("load",a,false);if(!this.params.noDOMContentEvent){window.addEventListener("DOMContentLoaded",a,false)}}else{if(window.attachEvent){window.attachEvent("onload",a)}else{window.onload=a}}return a},Typeset:function(a,b){if(MathJax.Hub.config.skipStartupTypeset){return function(){}}return this.queue.Push(["Post",this.signal,"Begin Typeset"],["Typeset",MathJax.Hub,a,b],["Post",this.signal,"End Typeset"])},URL:function(b,a){if(!a.match(/^([a-z]+:\/\/|\[|\/)/)){a="[MathJax]/"+b+"/"+a}return a},loadArray:function(b,f,c,a){if(b){if(!(b instanceof Array)){b=[b]}if(b.length){var h=MathJax.Callback.Queue(),j={},e;for(var g=0,d=b.length;g<d;g++){e=this.URL(f,b[g]);if(c){e+="/"+c}if(a){h.Push(["Require",MathJax.Ajax,e,j])}else{h.Push(MathJax.Ajax.Require(e,j))}}return h.Push({})}}return null}};(function(d){var b=window[d],e="["+d+"]";var c=b.Hub,a=b.Ajax,f=b.Callback;var g=MathJax.Object.Subclass({JAXFILE:"jax.js",require:null,config:{},Init:function(i,h){if(arguments.length===0){return this}return(this.constructor.Subclass(i,h))()},Augment:function(k,j){var i=this.constructor,h={};if(k!=null){for(var l in k){if(k.hasOwnProperty(l)){if(typeof k[l]==="function"){i.protoFunction(l,k[l])}else{h[l]=k[l]}}}if(k.toString!==i.prototype.toString&&k.toString!=={}.toString){i.protoFunction("toString",k.toString)}}c.Insert(i.prototype,h);i.Augment(null,j);return this},Translate:function(h,i){throw Error(this.directory+"/"+this.JAXFILE+" failed to define the Translate() method")},Register:function(h){},Config:function(){this.config=c.CombineConfig(this.id,this.config);if(this.config.Augment){this.Augment(this.config.Augment)}},Startup:function(){},loadComplete:function(i){if(i==="config.js"){return a.loadComplete(this.directory+"/"+i)}else{var h=f.Queue();h.Push(c.Register.StartupHook("End Config",{}),["Post",c.Startup.signal,this.id+" Jax Config"],["Config",this],["Post",c.Startup.signal,this.id+" Jax Require"],[function(j){return MathJax.Hub.Startup.loadArray(j.require,this.directory)},this],[function(j,k){return MathJax.Hub.Startup.loadArray(j.extensions,"extensions/"+k)},this.config||{},this.id],["Post",c.Startup.signal,this.id+" Jax Startup"],["Startup",this],["Post",c.Startup.signal,this.id+" Jax Ready"]);if(this.copyTranslate){h.Push([function(j){j.preProcess=j.preTranslate;j.Process=j.Translate;j.postProcess=j.postTranslate},this.constructor.prototype])}return h.Push(["loadComplete",a,this.directory+"/"+i])}}},{id:"Jax",version:"2.6.0",directory:e+"/jax",extensionDir:e+"/extensions"});b.InputJax=g.Subclass({elementJax:"mml",sourceMenuTitle:["Original","Original Form"],copyTranslate:true,Process:function(l,q){var j=f.Queue(),o;var k=this.elementJax;if(!(k instanceof Array)){k=[k]}for(var n=0,h=k.length;n<h;n++){o=b.ElementJax.directory+"/"+k[n]+"/"+this.JAXFILE;if(!this.require){this.require=[]}else{if(!(this.require instanceof Array)){this.require=[this.require]}}this.require.push(o);j.Push(a.Require(o))}o=this.directory+"/"+this.JAXFILE;var p=j.Push(a.Require(o));if(!p.called){this.constructor.prototype.Process=function(){if(!p.called){return p}throw Error(o+" failed to load properly")}}k=c.outputJax["jax/"+k[0]];if(k){j.Push(a.Require(k[0].directory+"/"+this.JAXFILE))}return j.Push({})},needsUpdate:function(h){var i=h.SourceElement();return(h.originalText!==b.HTML.getScript(i))},Register:function(h){if(!c.inputJax){c.inputJax={}}c.inputJax[h]=this}},{id:"InputJax",version:"2.6.0",directory:g.directory+"/input",extensionDir:g.extensionDir});b.OutputJax=g.Subclass({copyTranslate:true,preProcess:function(j){var i,h=this.directory+"/"+this.JAXFILE;this.constructor.prototype.preProcess=function(k){if(!i.called){return i}throw Error(h+" failed to load properly")};i=a.Require(h);return i},Register:function(i){var h=c.outputJax;if(!h[i]){h[i]=[]}if(h[i].length&&(this.id===c.config.menuSettings.renderer||(h.order[this.id]||0)<(h.order[h[i][0].id]||0))){h[i].unshift(this)}else{h[i].push(this)}if(!this.require){this.require=[]}else{if(!(this.require instanceof Array)){this.require=[this.require]}}this.require.push(b.ElementJax.directory+"/"+(i.split(/\//)[1])+"/"+this.JAXFILE)},Remove:function(h){}},{id:"OutputJax",version:"2.6.0",directory:g.directory+"/output",extensionDir:g.extensionDir,fontDir:e+(b.isPacked?"":"/..")+"/fonts",imageDir:e+(b.isPacked?"":"/..")+"/images"});b.ElementJax=g.Subclass({Init:function(i,h){return this.constructor.Subclass(i,h)},inputJax:null,outputJax:null,inputID:null,originalText:"",mimeType:"",sourceMenuTitle:["MathMLcode","MathML Code"],Text:function(i,j){var h=this.SourceElement();b.HTML.setScript(h,i);h.MathJax.state=this.STATE.UPDATE;return c.Update(h,j)},Reprocess:function(i){var h=this.SourceElement();h.MathJax.state=this.STATE.UPDATE;return c.Reprocess(h,i)},Update:function(h){return this.Rerender(h)},Rerender:function(i){var h=this.SourceElement();h.MathJax.state=this.STATE.OUTPUT;return c.Process(h,i)},Remove:function(h){if(this.hover){this.hover.clear(this)}b.OutputJax[this.outputJax].Remove(this);if(!h){c.signal.Post(["Remove Math",this.inputID]);this.Detach()}},needsUpdate:function(){return b.InputJax[this.inputJax].needsUpdate(this)},SourceElement:function(){return document.getElementById(this.inputID)},Attach:function(i,j){var h=i.MathJax.elementJax;if(i.MathJax.state===this.STATE.UPDATE){h.Clone(this)}else{h=i.MathJax.elementJax=this;if(i.id){this.inputID=i.id}else{i.id=this.inputID=b.ElementJax.GetID();this.newID=1}}h.originalText=b.HTML.getScript(i);h.inputJax=j;if(h.root){h.root.inputID=h.inputID}return h},Detach:function(){var h=this.SourceElement();if(!h){return}try{delete h.MathJax}catch(i){h.MathJax=null}if(this.newID){h.id=""}},Clone:function(h){var i;for(i in this){if(!this.hasOwnProperty(i)){continue}if(typeof(h[i])==="undefined"&&i!=="newID"){delete this[i]}}for(i in h){if(!h.hasOwnProperty(i)){continue}if(typeof(this[i])==="undefined"||(this[i]!==h[i]&&i!=="inputID")){this[i]=h[i]}}}},{id:"ElementJax",version:"2.6.0",directory:g.directory+"/element",extensionDir:g.extensionDir,ID:0,STATE:{PENDING:1,PROCESSED:2,UPDATE:3,OUTPUT:4},GetID:function(){this.ID++;return"MathJax-Element-"+this.ID},Subclass:function(){var h=g.Subclass.apply(this,arguments);h.loadComplete=this.prototype.loadComplete;return h}});b.ElementJax.prototype.STATE=b.ElementJax.STATE;b.OutputJax.Error={id:"Error",version:"2.6.0",config:{},errors:0,ContextMenu:function(){return b.Extension.MathEvents.Event.ContextMenu.apply(b.Extension.MathEvents.Event,arguments)},Mousedown:function(){return b.Extension.MathEvents.Event.AltContextMenu.apply(b.Extension.MathEvents.Event,arguments)},getJaxFromMath:function(h){return(h.nextSibling.MathJax||{}).error},Jax:function(j,i){var h=MathJax.Hub.inputJax[i.type.replace(/ *;(.|\s)*/,"")];this.errors++;return{inputJax:(h||{id:"Error"}).id,outputJax:"Error",inputID:"MathJax-Error-"+this.errors,sourceMenuTitle:["ErrorMessage","Error Message"],sourceMenuFormat:"Error",originalText:MathJax.HTML.getScript(i),errorText:j}}};b.InputJax.Error={id:"Error",version:"2.6.0",config:{},sourceMenuTitle:["Original","Original Form"]}})("MathJax");(function(o){var h=window[o];if(!h){h=window[o]={}}var d=h.Hub;var s=d.Startup;var w=d.config;var g=document.head||(document.getElementsByTagName("head")[0]);if(!g){g=document.childNodes[0]}var b=(document.documentElement||document).getElementsByTagName("script");if(b.length===0&&g.namespaceURI){b=document.getElementsByTagNameNS(g.namespaceURI,"script")}var f=new RegExp("(^|/)"+o+"\\.js(\\?.*)?$");for(var q=b.length-1;q>=0;q--){if((b[q].src||"").match(f)){s.script=b[q].innerHTML;if(RegExp.$2){var t=RegExp.$2.substr(1).split(/\&/);for(var p=0,l=t.length;p<l;p++){var n=t[p].match(/(.*)=(.*)/);if(n){s.params[unescape(n[1])]=unescape(n[2])}}}w.root=b[q].src.replace(/(^|\/)[^\/]*(\?.*)?$/,"").replace(/^(https?:\/\/cdn.mathjax.org\/mathjax\/)(latest)/,"$1"+h.version.split(/\./).slice(0,2).join(".")+"-$2");h.Ajax.config.root=w.root;break}}var k=navigator.userAgent;var a={isMac:(navigator.platform.substr(0,3)==="Mac"),isPC:(navigator.platform.substr(0,3)==="Win"),isMSIE:("ActiveXObject" in window&&"clipboardData" in window),isEdge:("MSGestureEvent" in window&&"chrome" in window&&window.chrome.loadTimes==null),isFirefox:(!!k.match(/Gecko\//)&&!k.match(/like Gecko/)),isSafari:(!!k.match(/ (Apple)?WebKit\//)&&!k.match(/ like iPhone /)&&(!window.chrome||window.chrome.app==null)),isChrome:("chrome" in window&&window.chrome.loadTimes!=null),isOpera:("opera" in window&&window.opera.version!=null),isKonqueror:("konqueror" in window&&navigator.vendor=="KDE"),versionAtLeast:function(y){var x=(this.version).split(".");y=(new String(y)).split(".");for(var z=0,j=y.length;z<j;z++){if(x[z]!=y[z]){return parseInt(x[z]||"0")>=parseInt(y[z])}}return true},Select:function(j){var i=j[d.Browser];if(i){return i(d.Browser)}return null}};var e=k.replace(/^Mozilla\/(\d+\.)+\d+ /,"").replace(/[a-z][-a-z0-9._: ]+\/\d+[^ ]*-[^ ]*\.([a-z][a-z])?\d+ /i,"").replace(/Gentoo |Ubuntu\/(\d+\.)*\d+ (\([^)]*\) )?/,"");d.Browser=d.Insert(d.Insert(new String("Unknown"),{version:"0.0"}),a);for(var v in a){if(a.hasOwnProperty(v)){if(a[v]&&v.substr(0,2)==="is"){v=v.slice(2);if(v==="Mac"||v==="PC"){continue}d.Browser=d.Insert(new String(v),a);var r=new RegExp(".*(Version/| Trident/.*; rv:)((?:\\d+\\.)+\\d+)|.*("+v+")"+(v=="MSIE"?" ":"/")+"((?:\\d+\\.)*\\d+)|(?:^|\\(| )([a-z][-a-z0-9._: ]+|(?:Apple)?WebKit)/((?:\\d+\\.)+\\d+)");var u=r.exec(e)||["","","","unknown","0.0"];d.Browser.name=(u[1]!=""?v:(u[3]||u[5]));d.Browser.version=u[2]||u[4]||u[6];break}}}try{d.Browser.Select({Safari:function(j){var i=parseInt((String(j.version).split("."))[0]);if(i>85){j.webkit=j.version}if(i>=538){j.version="8.0"}else{if(i>=537){j.version="7.0"}else{if(i>=536){j.version="6.0"}else{if(i>=534){j.version="5.1"}else{if(i>=533){j.version="5.0"}else{if(i>=526){j.version="4.0"}else{if(i>=525){j.version="3.1"}else{if(i>500){j.version="3.0"}else{if(i>400){j.version="2.0"}else{if(i>85){j.version="1.0"}}}}}}}}}}j.webkit=(navigator.appVersion.match(/WebKit\/(\d+)\./))[1];j.isMobile=(navigator.appVersion.match(/Mobile/i)!=null);j.noContextMenu=j.isMobile},Firefox:function(j){if((j.version==="0.0"||k.match(/Firefox/)==null)&&navigator.product==="Gecko"){var m=k.match(/[\/ ]rv:(\d+\.\d.*?)[\) ]/);if(m){j.version=m[1]}else{var i=(navigator.buildID||navigator.productSub||"0").substr(0,8);if(i>="20111220"){j.version="9.0"}else{if(i>="20111120"){j.version="8.0"}else{if(i>="20110927"){j.version="7.0"}else{if(i>="20110816"){j.version="6.0"}else{if(i>="20110621"){j.version="5.0"}else{if(i>="20110320"){j.version="4.0"}else{if(i>="20100121"){j.version="3.6"}else{if(i>="20090630"){j.version="3.5"}else{if(i>="20080617"){j.version="3.0"}else{if(i>="20061024"){j.version="2.0"}}}}}}}}}}}}j.isMobile=(navigator.appVersion.match(/Android/i)!=null||k.match(/ Fennec\//)!=null||k.match(/Mobile/)!=null)},Chrome:function(i){i.noContextMenu=i.isMobile=!!navigator.userAgent.match(/ Mobile[ \/]/)},Opera:function(i){i.version=opera.version()},Edge:function(i){i.isMobile=!!navigator.userAgent.match(/ Phone/)},MSIE:function(j){j.isMobile=!!navigator.userAgent.match(/ Phone/);j.isIE9=!!(document.documentMode&&(window.performance||window.msPerformance));MathJax.HTML.setScriptBug=!j.isIE9||document.documentMode<9;MathJax.Hub.msieHTMLCollectionBug=(document.documentMode<9);if(document.documentMode<10&&!s.params.NoMathPlayer){try{new ActiveXObject("MathPlayer.Factory.1");j.hasMathPlayer=true}catch(m){}try{if(j.hasMathPlayer){var i=document.createElement("object");i.id="mathplayer";i.classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987";g.appendChild(i);document.namespaces.add("m","http://www.w3.org/1998/Math/MathML");j.mpNamespace=true;if(document.readyState&&(document.readyState==="loading"||document.readyState==="interactive")){document.write('<?import namespace="m" implementation="#MathPlayer">');j.mpImported=true}}else{document.namespaces.add("mjx_IE_fix","http://www.w3.org/1999/xlink")}}catch(m){}}}})}catch(c){console.error(c.message)}d.Browser.Select(MathJax.Message.browsers);if(h.AuthorConfig&&typeof h.AuthorConfig.AuthorInit==="function"){h.AuthorConfig.AuthorInit()}d.queue=h.Callback.Queue();d.queue.Push(["Post",s.signal,"Begin"],["Config",s],["Cookie",s],["Styles",s],["Message",s],function(){var i=h.Callback.Queue(s.Jax(),s.Extensions());return i.Push({})},["Menu",s],s.onLoad(),function(){MathJax.isReady=true},["Typeset",s],["Hash",s],["MenuZoom",s],["Post",s.signal,"End"])})("MathJax")}};


/***/ },
/* 70 */
/***/ function(module, exports) {

	/*
	 *  /MathJax/extensions/MathMenu.js
	 *
	 *  Copyright (c) 2009-2015 The MathJax Consortium
	 *
	 *  Licensed under the Apache License, Version 2.0 (the "License");
	 *  you may not use this file except in compliance with the License.
	 *  You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 *  Unless required by applicable law or agreed to in writing, software
	 *  distributed under the License is distributed on an "AS IS" BASIS,
	 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 *  See the License for the specific language governing permissions and
	 *  limitations under the License.
	 */

	(function(f,n,p,e,q){var o="2.6.1";var d=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:o,signal:d};var s=function(t){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",t]].concat([].slice.call(arguments,1)))};var a=f.Browser.isPC,k=f.Browser.isMSIE,l=((document.documentMode||0)>8);var i=(a?null:"5px");var r=f.CombineConfig("MathMenu",{delay:150,showRenderer:true,showMathPlayer:true,showFontMenu:false,showContext:false,showDiscoverable:false,showLocale:true,showLocaleURL:false,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_About.MathJax_MousePost":{outline:"none"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(a?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":i,"-webkit-border-radius":i,"-moz-border-radius":i,"-khtml-border-radius":i,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(a?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em","padding-top":".25em",color:"#666666","font-family":(k?"'Arial unicode MS'":null),"font-size":".75em"},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL":{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(k?"'Arial unicode MS'":null)},".MathJax_MenuCheck.RTL":{right:".7em",left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:(a?"1em":".7em")},".MathJax_MenuRadioCheck.RTL":{right:(a?"1em":".7em"),left:"auto"},".MathJax_MenuLabel":{padding:(a?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(a?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(a?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(a?"Highlight":"#606872"),color:(a?"HighlightText":"white")},".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus":{"background-color":"#E8E8E8"},".MathJax_ContextMenu:focus":{outline:"none"},".MathJax_ContextMenu .MathJax_MenuItem:focus":{outline:"none"},"#MathJax_AboutClose":{top:".2em",right:".2em"},".MathJax_Menu .MathJax_MenuClose":{top:"-10px",left:"-10px"},".MathJax_MenuClose":{position:"absolute",cursor:"pointer",display:"inline-block",border:"2px solid #AAA","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","font-family":"'Courier New',Courier","font-size":"24px",color:"#F0F0F0"},".MathJax_MenuClose span":{display:"block","background-color":"#AAA",border:"1.5px solid","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","line-height":0,padding:"8px 0 6px"},".MathJax_MenuClose:hover":{color:"white!important",border:"2px solid #CCC!important"},".MathJax_MenuClose:hover span":{"background-color":"#CCC!important"},".MathJax_MenuClose:hover:focus":{outline:"none"}}});var m,j,b;f.Register.StartupHook("MathEvents Ready",function(){m=MathJax.Extension.MathEvents.Event.False;j=MathJax.Extension.MathEvents.Hover;b=MathJax.Extension.MathEvents.Event.KEY});var h=MathJax.Object.Subclass({Keydown:function(t,u){switch(t.keyCode){case b.ESCAPE:this.Remove(t,u);break;case b.RIGHT:this.Right(t,u);break;case b.LEFT:this.Left(t,u);break;case b.UP:this.Up(t,u);break;case b.DOWN:this.Down(t,u);break;case b.RETURN:case b.SPACE:this.Space(t,u);break;default:return;break}return m(t)},Escape:function(t,u){},Right:function(t,u){},Left:function(t,u){},Up:function(t,u){},Down:function(t,u){},Space:function(t,u){}},{});var g=MathJax.Menu=h.Subclass({version:o,items:[],posted:false,title:null,margin:5,Init:function(t){this.items=[].slice.call(arguments,0)},With:function(t){if(t){f.Insert(this,t)}return this},Post:function(u,I,G){if(!u){u=window.event||{}}var t=document.getElementById("MathJax_MenuFrame");if(!t){t=g.Background(this);delete c.lastItem;delete c.lastMenu;delete g.skipUp;d.Post(["post",g.jax]);g.isRTL=(MathJax.Localization.fontDirection()==="rtl")}var v=n.Element("div",{onmouseup:g.Mouseup,ondblclick:m,ondragstart:m,onselectstart:m,oncontextmenu:m,menuItem:this,className:"MathJax_Menu",onkeydown:g.Keydown,role:"menu"});if(u.type==="contextmenu"||u.type==="mouseover"){v.className+=" MathJax_ContextMenu"}if(!G){MathJax.Localization.setCSS(v)}for(var B=0,z=this.items.length;B<z;B++){this.items[B].Create(v)}if(g.isMobile){n.addElement(v,"span",{className:"MathJax_MenuClose",menu:I,ontouchstart:g.Close,ontouchend:m,onmousedown:g.Close,onmouseup:m},[["span",{},"\u00D7"]])}t.appendChild(v);this.posted=true;if(v.offsetWidth){v.style.width=(v.offsetWidth+2)+"px"}var H=u.pageX,F=u.pageY;if(!H&&!F&&"clientX" in u){H=u.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;F=u.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!I){var w=g.CurrentNode()||u.target;if((u.type==="keydown"||(!H&&!F))&&w){var C=window.pageXOffset||document.documentElement.scrollLeft;var A=window.pageYOffset||document.documentElement.scrollTop;var E=w.getBoundingClientRect();H=(E.right+E.left)/2+C;F=(E.bottom+E.top)/2+A}if(H+v.offsetWidth>document.body.offsetWidth-this.margin){H=document.body.offsetWidth-v.offsetWidth-this.margin}if(g.isMobile){H=Math.max(5,H-Math.floor(v.offsetWidth/2));F-=20}g.skipUp=u.isContextMenu}else{var D="left",L=I.offsetWidth;H=(g.isMobile?30:L-2);F=0;while(I&&I!==t){H+=I.offsetLeft;F+=I.offsetTop;I=I.parentNode}if(!g.isMobile){if((g.isRTL&&H-L-v.offsetWidth>this.margin)||(!g.isRTL&&H+v.offsetWidth>document.body.offsetWidth-this.margin)){D="right";H=Math.max(this.margin,H-L-v.offsetWidth+6)}}if(!a){v.style["borderRadiusTop"+D]=0;v.style["WebkitBorderRadiusTop"+D]=0;v.style["MozBorderRadiusTop"+D]=0;v.style["KhtmlBorderRadiusTop"+D]=0}}v.style.left=H+"px";v.style.top=F+"px";if(document.selection&&document.selection.empty){document.selection.empty()}var K=window.pageXOffset||document.documentElement.scrollLeft;var J=window.pageYOffset||document.documentElement.scrollTop;g.Focus(v);if(u.type==="keydown"){g.skipMouseoverFromKey=true;setTimeout(function(){delete g.skipMouseoverFromKey},r.delay)}window.scrollTo(K,J);return m(u)},Remove:function(t,u){d.Post(["unpost",g.jax]);var v=document.getElementById("MathJax_MenuFrame");if(v){v.parentNode.removeChild(v);if(this.msieFixedPositionBug){detachEvent("onresize",g.Resize)}}if(g.jax.hover){delete g.jax.hover.nofade;j.UnHover(g.jax)}g.Unfocus(u);if(t.type==="mousedown"){g.CurrentNode().blur()}return m(t)},Find:function(t){return this.FindN(1,t,[].slice.call(arguments,1))},FindId:function(t){return this.FindN(0,t,[].slice.call(arguments,1))},FindN:function(x,u,w){for(var v=0,t=this.items.length;v<t;v++){if(this.items[v].name[x]===u){if(w.length){if(!this.items[v].submenu){return null}return this.items[v].submenu.FindN(x,w[0],w.slice(1))}return this.items[v]}}return null},IndexOf:function(t){return this.IndexOfN(1,t)},IndexOfId:function(t){return this.IndexOfN(0,t)},IndexOfN:function(w,u){for(var v=0,t=this.items.length;v<t;v++){if(this.items[v].name[w]===u){return v}}return null},Right:function(t,u){g.Right(t,u)},Left:function(t,u){g.Left(t,u)},Up:function(u,v){var t=v.lastChild;t.menuItem.Activate(u,t)},Down:function(u,v){var t=v.firstChild;t.menuItem.Activate(u,t)},Space:function(t,u){this.Remove(t,u)}},{config:r,Remove:function(t){return g.Event(t,this,"Remove")},Mouseover:function(t){return g.Event(t,this,"Mouseover")},Mouseout:function(t){return g.Event(t,this,"Mouseout")},Mousedown:function(t){return g.Event(t,this,"Mousedown")},Mouseup:function(t){return g.Event(t,this,"Mouseup")},Keydown:function(t){return g.Event(t,this,"Keydown")},Touchstart:function(t){return g.Event(t,this,"Touchstart")},Touchend:function(t){return g.Event(t,this,"Touchend")},Close:function(t){return g.Event(t,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Event:function(v,x,t,w){if(g.skipMouseover&&t==="Mouseover"&&!w){return m(v)}if(g.skipMouseoverFromKey&&t==="Mouseover"){delete g.skipMouseoverFromKey;return m(v)}if(g.skipUp){if(t.match(/Mouseup|Touchend/)){delete g.skipUp;return m(v)}if(t==="Touchstart"||(t==="Mousedown"&&!g.skipMousedown)){delete g.skipUp}}if(!v){v=window.event}var u=x.menuItem;if(u&&u[t]){return u[t](v,x)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(u){var v=n.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:u,onmousedown:this.Remove}]]);var t=v.firstChild;if(g.msieBackgroundBug){t.style.backgroundColor="white";t.style.filter="alpha(opacity=0)"}if(g.msieFixedPositionBug){v.width=v.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{t.style.position="fixed"}return v},Resize:function(){setTimeout(g.SetWH,0)},SetWH:function(){var t=document.getElementById("MathJax_MenuFrame");if(t){t=t.firstChild;t.style.width=t.style.height="1px";t.style.width=document.body.scrollWidth+"px";t.style.height=document.body.scrollHeight+"px"}},posted:false,active:null,GetNode:function(t){var u=document.getElementById(t.inputID+"-Frame");return u.isMathJax?u:u.firstChild},CurrentNode:function(){return g.GetNode(g.jax)},AllNodes:function(){var u=MathJax.Hub.getAllJax();var v=[];for(var w=0,t;t=u[w];w++){v.push(g.GetNode(t))}return v},ActiveNode:function(){return g.active},FocusNode:function(t){g.active=t;t.focus()},Focus:function(t){!g.posted?g.Activate(t):g.ActiveNode().tabIndex=-1;t.tabIndex=0;g.FocusNode(t)},Activate:function(t,u){g.UnsetTabIndex();g.posted=true},Unfocus:function(){g.ActiveNode().tabIndex=-1;g.SetTabIndex();g.FocusNode(g.CurrentNode());g.posted=false},MoveHorizontal:function(x,y,v){if(!x.shiftKey){return}var u=g.AllNodes();var t=u.length;if(t===0){return}var w=u[g.Mod(v(g.IndexOf(u,g.CurrentNode())),t)];if(w===g.CurrentNode()){return}g.menu.Remove(x,y);g.jax=MathJax.Hub.getJaxFor(w);g.FocusNode(w);g.menu.Post(null)},Right:function(t,u){g.MoveHorizontal(t,u,function(v){return v+1})},Left:function(t,u){g.MoveHorizontal(t,u,function(v){return v-1})},UnsetTabIndex:function(){var u=g.AllNodes();for(var v=0,t;t=u[v];v++){if(t.tabIndex>0){t.oldTabIndex=t.tabIndex}t.tabIndex=-1}},SetTabIndex:function(){var u=g.AllNodes();for(var v=0,t;t=u[v];v++){if(t.oldTabIndex!==undefined){t.tabIndex=t.oldTabIndex;delete t.oldTabIndex}else{t.tabIndex=f.getTabOrder(t)}}},Mod:function(t,u){return((t%u)+u)%u},IndexOf:(Array.prototype.indexOf?function(t,u,v){return t.indexOf(u,v)}:function(t,w,x){for(var v=(x||0),u=t.length;v<u;v++){if(w===t[v]){return v}}return -1}),saveCookie:function(){n.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=n.Cookie.Get("menu")}});MathJax.Menu.NAV=h;var c=g.ITEM=h.Subclass({name:"",node:null,menu:null,Attributes:function(t){return f.Insert({onmouseup:g.Mouseup,ondragstart:m,onselectstart:m,onselectend:m,ontouchstart:g.Touchstart,ontouchend:g.Touchend,className:"MathJax_MenuItem",role:this.role,menuItem:this},t)},Create:function(v){if(!this.hidden){var u=this.Attributes();var t=this.Label(u,v);n.addElement(v,"div",u,t)}},Name:function(){return s(this.name[0],this.name[1])},Mouseover:function(t,u){if(u.parentNode===g.ActiveNode().parentNode){this.Deactivate(g.ActiveNode())}this.Activate(t,u)},Mouseout:function(t,u){this.Deactivate(u)},Mouseup:function(t,u){return this.Remove(t,u)},DeactivateSubmenus:function(y){var x=document.getElementById("MathJax_MenuFrame").childNodes,u=c.GetMenuNode(y).childNodes;for(var v=0,t=u.length;v<t;v++){var w=u[v].menuItem;if(w&&w.submenu&&w.submenu.posted&&w!==y.menuItem){w.Deactivate(u[v])}}this.RemoveSubmenus(y,x)},RemoveSubmenus:function(v,u){u=u||document.getElementById("MathJax_MenuFrame").childNodes;var t=u.length-1;while(t>=0&&c.GetMenuNode(v).menuItem!==u[t].menuItem){u[t].menuItem.posted=false;u[t].parentNode.removeChild(u[t]);t--}},Touchstart:function(t,u){return this.TouchEvent(t,u,"Mousedown")},Touchend:function(t,u){return this.TouchEvent(t,u,"Mouseup")},TouchEvent:function(u,v,t){if(this!==c.lastItem){if(c.lastMenu){g.Event(u,c.lastMenu,"Mouseout")}g.Event(u,v,"Mouseover",true);c.lastItem=this;c.lastMenu=v}if(this.nativeTouch){return null}g.Event(u,v,t);return false},Remove:function(t,u){u=u.parentNode.menuItem;return u.Remove(t,u)},With:function(t){if(t){f.Insert(this,t)}return this},isRTL:function(){return g.isRTL},rtlClass:function(){return(this.isRTL()?" RTL":"")}},{GetMenuNode:function(t){return t.parentNode}});g.ENTRY=g.ITEM.Subclass({role:"menuitem",Attributes:function(t){t=f.Insert({onmouseover:g.Mouseover,onmouseout:g.Mouseout,onmousedown:g.Mousedown,onkeydown:g.Keydown,"aria-disabled":!!this.disabled},t);t=this.SUPER(arguments).Attributes.call(this,t);if(this.disabled){t.className+=" MathJax_MenuDisabled"}return t},MoveVertical:function(t,D,v){var w=c.GetMenuNode(D);var C=[];for(var y=0,B=w.menuItem.items,x;x=B[y];y++){if(!x.hidden){C.push(x)}}var A=g.IndexOf(C,this);if(A===-1){return}var z=C.length;var u=w.childNodes;do{A=g.Mod(v(A),z)}while(C[A].hidden||!u[A].role||u[A].role==="separator");this.Deactivate(D);C[A].Activate(t,u[A])},Up:function(u,t){this.MoveVertical(u,t,function(v){return v-1})},Down:function(u,t){this.MoveVertical(u,t,function(v){return v+1})},Right:function(u,t){this.MoveHorizontal(u,t,g.Right,!this.isRTL())},Left:function(u,t){this.MoveHorizontal(u,t,g.Left,this.isRTL())},MoveHorizontal:function(z,y,t,A){var w=c.GetMenuNode(y);if(w.menuItem===g.menu&&z.shiftKey){t(z,y)}if(A){return}if(w.menuItem!==g.menu){this.Deactivate(y)}var u=w.previousSibling.childNodes;var x=u.length;while(x--){var v=u[x];if(v.menuItem.submenu&&v.menuItem.submenu===w.menuItem){g.Focus(v);break}}this.RemoveSubmenus(y)},Space:function(t,u){this.Mouseup(t,u)},Activate:function(t,u){this.Deactivate(u);if(!this.disabled){u.className+=" MathJax_MenuActive"}this.DeactivateSubmenus(u);g.Focus(u)},Deactivate:function(t){t.className=t.className.replace(/ MathJax_MenuActive/,"")}});g.ITEM.COMMAND=g.ENTRY.Subclass({action:function(){},Init:function(t,v,u){if(!(t instanceof Array)){t=[t,t]}this.name=t;this.action=v;this.With(u)},Label:function(t,u){return[this.Name()]},Mouseup:function(t,u){if(!this.disabled){this.Remove(t,u);d.Post(["command",this]);this.action.call(this,t)}return m(t)}});g.ITEM.SUBMENU=g.ENTRY.Subclass({submenu:null,marker:"\u25BA",markerRTL:"\u25C4",Attributes:function(t){t=f.Insert({"aria-haspopup":"true"},t);t=this.SUPER(arguments).Attributes.call(this,t);return t},Init:function(t,v){if(!(t instanceof Array)){t=[t,t]}this.name=t;var u=1;if(!(v instanceof g.ITEM)){this.With(v),u++}this.submenu=g.apply(g,[].slice.call(arguments,u))},Label:function(t,u){this.submenu.posted=false;return[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(t,u){this.ClearTimer();t={type:t.type,clientX:t.clientX,clientY:t.clientY};this.timer=setTimeout(e(["Mouseup",this,t,u]),r.delay)},ClearTimer:function(){if(this.timer){clearTimeout(this.timer)}},Touchend:function(u,w){var v=this.submenu.posted;var t=this.SUPER(arguments).Touchend.apply(this,arguments);if(v){this.Deactivate(w);delete c.lastItem;delete c.lastMenu}return t},Mouseout:function(t,u){if(!this.submenu.posted){this.Deactivate(u)}this.ClearTimer()},Mouseover:function(t,u){this.Activate(t,u)},Mouseup:function(t,u){if(!this.disabled){if(!this.submenu.posted){this.ClearTimer();this.submenu.Post(t,u,this.ltr);g.Focus(u)}else{this.DeactivateSubmenus(u)}}return m(t)},Activate:function(t,u){if(!this.disabled){this.Deactivate(u);u.className+=" MathJax_MenuActive"}if(!this.submenu.posted){this.DeactivateSubmenus(u);if(!g.isMobile){this.Timer(t,u)}}g.Focus(u)},MoveVertical:function(v,u,t){this.ClearTimer();this.SUPER(arguments).MoveVertical.apply(this,arguments)},MoveHorizontal:function(v,x,u,w){if(!w){this.SUPER(arguments).MoveHorizontal.apply(this,arguments);return}if(this.disabled){return}if(!this.submenu.posted){this.Activate(v,x);return}var t=c.GetMenuNode(x).nextSibling.childNodes;if(t.length>0){this.submenu.items[0].Activate(v,t[0])}}});g.ITEM.RADIO=g.ENTRY.Subclass({variable:null,marker:(a?"\u25CF":"\u2713"),role:"menuitemradio",Attributes:function(u){var t=r.settings[this.variable]===this.value?"true":"false";u=f.Insert({"aria-checked":t},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Init:function(u,t,v){if(!(u instanceof Array)){u=[u,u]}this.name=u;this.variable=t;this.With(v);if(this.value==null){this.value=this.name[0]}},Label:function(u,v){var t={className:"MathJax_MenuRadioCheck"+this.rtlClass()};if(r.settings[this.variable]!==this.value){t={style:{display:"none"}}}return[["span",t,[this.marker]]," "+this.Name()]},Mouseup:function(w,x){if(!this.disabled){var y=x.parentNode.childNodes;for(var u=0,t=y.length;u<t;u++){var v=y[u].menuItem;if(v&&v.variable===this.variable){y[u].firstChild.style.display="none"}}x.firstChild.display="";r.settings[this.variable]=this.value;g.cookie[this.variable]=r.settings[this.variable];g.saveCookie();d.Post(["radio button",this])}this.Remove(w,x);if(this.action&&!this.disabled){this.action.call(g,this)}return m(w)}});g.ITEM.CHECKBOX=g.ENTRY.Subclass({variable:null,marker:"\u2713",role:"menuitemcheckbox",Attributes:function(u){var t=r.settings[this.variable]?"true":"false";u=f.Insert({"aria-checked":t},u);u=this.SUPER(arguments).Attributes.call(this,u);return u},Init:function(u,t,v){if(!(u instanceof Array)){u=[u,u]}this.name=u;this.variable=t;this.With(v)},Label:function(u,v){var t={className:"MathJax_MenuCheck"+this.rtlClass()};if(!r.settings[this.variable]){t={style:{display:"none"}}}return[["span",t,[this.marker]]," "+this.Name()]},Mouseup:function(t,u){if(!this.disabled){u.firstChild.display=(r.settings[this.variable]?"none":"");r.settings[this.variable]=!r.settings[this.variable];g.cookie[this.variable]=r.settings[this.variable];g.saveCookie();d.Post(["checkbox",this])}this.Remove(t,u);if(this.action&&!this.disabled){this.action.call(g,this)}return m(t)}});g.ITEM.LABEL=g.ENTRY.Subclass({role:"menuitem",Init:function(t,u){if(!(t instanceof Array)){t=[t,t]}this.name=t;this.With(u)},Label:function(t,u){t.className+=" MathJax_MenuLabel";return[this.Name()]},Activate:function(t,u){this.Deactivate(u);g.Focus(u)},Mouseup:function(t,u){}});g.ITEM.RULE=g.ITEM.Subclass({role:"separator",Attributes:function(t){t=f.Insert({"aria-orientation":"vertical"},t);t=this.SUPER(arguments).Attributes.call(this,t);return t},Label:function(t,u){t.className+=" MathJax_MenuRule";return null}});g.About=function(x){var u=g.About.GetFont();var z=g.About.GetFormat();var t=["MathJax.js v"+MathJax.fileversion,["br"]];t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);g.About.GetJax(t,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]);g.About.GetJax(t,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]);g.About.GetJax(t,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]);t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);g.About.GetJax(t,MathJax.Extension,["Extension","%1 Extension v%2"],true);t.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[f.Browser+" v"+f.Browser.version+(z?" \u2014 "+s(z.replace(/ /g,""),z):"")]]);g.About.div=g.Background(g.About);var w=n.addElement(g.About.div,"div",{id:"MathJax_About",tabIndex:0,onkeydown:g.About.Keydown},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],s(u.replace(/ /g,""),"using "+u),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"},tabIndex:0},t],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["span",{className:"MathJax_MenuClose",id:"MathJax_AboutClose",onclick:g.About.Remove,onkeydown:g.About.Keydown,tabIndex:0,role:"button","aria-label":s("CloseAboutDialog","Close about MathJax dialog")},[["span",{},"\u00D7"]]]]);if(x.type==="mouseup"){w.className+=" MathJax_MousePost"}w.focus();MathJax.Localization.setCSS(w);var y=(document.documentElement||{});var v=window.innerHeight||y.clientHeight||y.scrollHeight||0;if(g.prototype.msieAboutBug){w.style.width="20em";w.style.position="absolute";w.style.left=Math.floor((document.documentElement.scrollWidth-w.offsetWidth)/2)+"px";w.style.top=(Math.floor((v-w.offsetHeight)/3)+document.body.scrollTop)+"px"}else{w.style.marginLeft=Math.floor(-w.offsetWidth/2)+"px";w.style.top=Math.floor((v-w.offsetHeight)/3)+"px"}};g.About.Remove=function(t){if(g.About.div){document.body.removeChild(g.About.div);delete g.About.div}};g.About.Keydown=function(t){if(t.keyCode===b.ESCAPE||(this.id==="MathJax_AboutClose"&&(t.keyCode===b.SPACE||t.keyCode===b.RETURN))){g.About.Remove(t);g.CurrentNode().focus();m(t)}},g.About.GetJax=function(u,z,x,w){var y=[];for(var A in z){if(z.hasOwnProperty(A)&&z[A]){if((w&&z[A].version)||(z[A].isa&&z[A].isa(z))){y.push(s(x[0],x[1],(z[A].id||A),z[A].version))}}}y.sort();for(var v=0,t=y.length;v<t;v++){u.push(y[v],["br"])}return u};g.About.GetFont=function(){var t=MathJax.Hub.outputJax["jax/mml"][0]||{};var u={SVG:"web SVG",CommonHTML:"web TeX","HTML-CSS":(t.imgFonts?"image":(t.webFonts?"web":"local")+" "+t.fontInUse)}[t.id]||"generic";return u+" fonts"};g.About.GetFormat=function(){var t=MathJax.Hub.outputJax["jax/mml"][0]||{};if(t.id!=="HTML-CSS"||!t.webFonts||t.imgFonts){return}return t.allowWebFonts.replace(/otf/,"woff or otf")+" fonts"};g.Help=function(t){p.Require("[MathJax]/extensions/HelpDialog.js",function(){MathJax.Extension.Help.Dialog({type:t.type})})};g.ShowSource=function(x){if(!x){x=window.event}var w={screenX:x.screenX,screenY:x.screenY};if(!g.jax){return}if(this.format==="MathML"){var u=MathJax.ElementJax.mml;if(u&&typeof(u.mbase.prototype.toMathML)!=="undefined"){try{g.ShowSource.Text(g.jax.root.toMathML("",g.jax),x)}catch(v){if(!v.restart){throw v}e.After([this,g.ShowSource,w],v.restart)}}else{if(!p.loadingToMathML){p.loadingToMathML=true;g.ShowSource.Window(x);e.Queue(p.Require("[MathJax]/extensions/toMathML.js"),function(){delete p.loadingToMathML;if(!u.mbase.prototype.toMathML){u.mbase.prototype.toMathML=function(){}}},[this,g.ShowSource,w]);return}}}else{if(this.format==="Error"){g.ShowSource.Text(g.jax.errorText,x)}else{if(r.semanticsAnnotations[this.format]){var t=g.jax.root.getAnnotation(this.format);if(t.data[0]){g.ShowSource.Text(t.data[0].toString())}}else{if(g.jax.originalText==null){alert(s("NoOriginalForm","No original form available"));return}g.ShowSource.Text(g.jax.originalText,x)}}}};g.ShowSource.Window=function(u){if(!g.ShowSource.w){var v=[],t=r.windowSettings;for(var w in t){if(t.hasOwnProperty(w)){v.push(w+"="+t[w])}}g.ShowSource.w=window.open("","_blank",v.join(","))}return g.ShowSource.w};g.ShowSource.Text=function(y,v){var t=g.ShowSource.Window(v);delete g.ShowSource.w;y=y.replace(/^\s*/,"").replace(/\s*$/,"");y=y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var x=s("EqSource","MathJax Equation Source");if(g.isMobile){t.document.open();t.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+x+"</title></head><body style='font-size:85%'>");t.document.write("<pre>"+y+"</pre>");t.document.write("<hr><input type='button' value='"+s("Close","Close")+"' onclick='window.close()' />");t.document.write("</body></html>");t.document.close()}else{t.document.open();t.document.write("<html><head><title>"+x+"</title></head><body style='font-size:85%'>");t.document.write("<table><tr><td><pre>"+y+"</pre></td></tr></table>");t.document.write("</body></html>");t.document.close();var u=t.document.body.firstChild;setTimeout(function(){var A=(t.outerHeight-t.innerHeight)||30,z=(t.outerWidth-t.innerWidth)||30,w,D;z=Math.max(140,Math.min(Math.floor(0.5*screen.width),u.offsetWidth+z+25));A=Math.max(40,Math.min(Math.floor(0.5*screen.height),u.offsetHeight+A+25));if(g.prototype.msieHeightBug){A+=35}t.resizeTo(z,A);var C;try{C=v.screenX}catch(B){}if(v&&C!=null){w=Math.max(0,Math.min(v.screenX-Math.floor(z/2),screen.width-z-20));D=Math.max(0,Math.min(v.screenY-Math.floor(A/2),screen.height-A-20));t.moveTo(w,D)}},50)}};g.Scale=function(){var y=["CommonHTML","HTML-CSS","SVG","NativeMML","PreviewHTML"],t=y.length,x=100,v,u;for(v=0;v<t;v++){u=q[y[v]];if(u){x=u.config.scale;break}}var w=prompt(s("ScaleMath","Scale all mathematics (compared to surrounding text) by"),x+"%");if(w){if(w.match(/^\s*\d+(\.\d*)?\s*%?\s*$/)){w=parseFloat(w);if(w){if(w!==x){for(v=0;v<t;v++){u=q[y[v]];if(u){u.config.scale=w}}g.cookie.scale=f.config.scale=w;g.saveCookie();f.Queue(["Rerender",f])}}else{alert(s("NonZeroScale","The scale should not be zero"))}}else{alert(s("PercentScale","The scale should be a percentage (e.g., 120%%)"))}}};g.Zoom=function(){if(!MathJax.Extension.MathZoom){p.Require("[MathJax]/extensions/MathZoom.js")}};g.Renderer=function(){var u=f.outputJax["jax/mml"];if(u[0]!==r.settings.renderer){var x=f.Browser,w,t=g.Renderer.Messages,v;switch(r.settings.renderer){case"NativeMML":if(!r.settings.warnedMML){if(x.isChrome&&x.version.substr(0,3)!=="24."){w=t.MML.WebKit}else{if(x.isSafari&&!x.versionAtLeast("5.0")){w=t.MML.WebKit}else{if(x.isMSIE){if(!x.hasMathPlayer){w=t.MML.MSIE}}else{if(x.isEdge){w=t.MML.WebKit}else{w=t.MML[x]}}}}v="warnedMML"}break;case"SVG":if(!r.settings.warnedSVG){if(x.isMSIE&&!l){w=t.SVG.MSIE}}break}if(w){w=s(w[0],w[1]);w+="\n\n";w+=s("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)");g.cookie.renderer=u[0].id;g.saveCookie();if(!confirm(w)){g.cookie.renderer=r.settings.renderer=n.Cookie.Get("menu").renderer;g.saveCookie();return}if(v){g.cookie.warned=r.settings.warned=true}g.cookie.renderer=r.settings.renderer;g.saveCookie()}f.Queue(["setRenderer",f,r.settings.renderer,"jax/mml"],["Rerender",f])}};g.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}};g.AssistiveMML=function(v,t){var u=MathJax.Extension.AssistiveMML;if(!u){if(!t){p.Require("[MathJax]/extensions/AssistiveMML.js",["AssistiveMML",g,v,true])}return}MathJax.Hub.Queue([(r.settings.assistiveMML?"Add":"Remove")+"AssistiveMathML",u])};g.Font=function(){var t=q["HTML-CSS"];if(!t){return}document.location.reload()};g.Locale=function(){MathJax.Localization.setLocale(r.settings.locale);MathJax.Hub.Queue(["Reprocess",MathJax.Hub])};g.LoadLocale=function(){var t=prompt(s("LoadURL","Load translation data from this URL:"));if(t){if(!t.match(/\.js$/)){alert(s("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'"))}p.Require(t,function(u){if(u!=p.STATUS.OK){alert(s("BadData","Failed to load translation data from %1",t))}})}};g.MPEvents=function(v){var u=r.settings.discoverable,t=g.MPEvents.Messages;if(!l){if(r.settings.mpMouse&&!confirm(s.apply(s,t.IE8warning))){delete g.cookie.mpContext;delete r.settings.mpContext;delete g.cookie.mpMouse;delete r.settings.mpMouse;g.saveCookie();return}r.settings.mpContext=r.settings.mpMouse;g.cookie.mpContext=g.cookie.mpMouse=r.settings.mpMouse;g.saveCookie();MathJax.Hub.Queue(["Rerender",MathJax.Hub])}else{if(!u&&v.name[1]==="Menu Events"&&r.settings.mpContext){alert(s.apply(s,t.IE9warning))}}};g.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]};f.Browser.Select({MSIE:function(t){var u=(document.compatMode==="BackCompat");var v=t.versionAtLeast("8.0")&&document.documentMode>7;g.Augment({margin:20,msieBackgroundBug:((document.documentMode||0)<9),msieFixedPositionBug:(u||!v),msieAboutBug:u,msieHeightBug:((document.documentMode||0)<9)});if(l){delete r.styles["#MathJax_About"].filter;delete r.styles[".MathJax_Menu"].filter}},Firefox:function(t){g.skipMouseover=t.isMobile&&t.versionAtLeast("6.0");g.skipMousedown=t.isMobile}});g.isMobile=f.Browser.isMobile;g.noContextMenu=f.Browser.noContextMenu;g.CreateLocaleMenu=function(){if(!g.menu){return}var y=g.menu.Find("Language").submenu,v=y.items;var u=[],A=MathJax.Localization.strings;for(var z in A){if(A.hasOwnProperty(z)){u.push(z)}}u=u.sort();y.items=[];for(var w=0,t=u.length;w<t;w++){var x=A[u[w]].menuTitle;if(x){x+=" ("+u[w]+")"}else{x=u[w]}y.items.push(c.RADIO([u[w],x],"locale",{action:g.Locale}))}y.items.push(v[v.length-2],v[v.length-1])};g.CreateAnnotationMenu=function(){if(!g.menu){return}var v=g.menu.Find("Show Math As","Annotation").submenu;var u=r.semanticsAnnotations;for(var t in u){if(u.hasOwnProperty(t)){v.items.push(c.COMMAND([t,t],g.ShowSource,{hidden:true,nativeTouch:true,format:t}))}}};f.Register.StartupHook("End Config",function(){r.settings=f.config.menuSettings;if(typeof(r.settings.showRenderer)!=="undefined"){r.showRenderer=r.settings.showRenderer}if(typeof(r.settings.showFontMenu)!=="undefined"){r.showFontMenu=r.settings.showFontMenu}if(typeof(r.settings.showContext)!=="undefined"){r.showContext=r.settings.showContext}g.getCookie();g.menu=g(c.SUBMENU(["Show","Show Math As"],c.COMMAND(["MathMLcode","MathML Code"],g.ShowSource,{nativeTouch:true,format:"MathML"}),c.COMMAND(["Original","Original Form"],g.ShowSource,{nativeTouch:true}),c.SUBMENU(["Annotation","Annotation"],{disabled:true}),c.RULE(),c.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),c.CHECKBOX(["semantics","Add original form as annotation"],"semantics")),c.RULE(),c.SUBMENU(["Settings","Math Settings"],c.SUBMENU(["ZoomTrigger","Zoom Trigger"],c.RADIO(["Hover","Hover"],"zoom",{action:g.Zoom}),c.RADIO(["Click","Click"],"zoom",{action:g.Zoom}),c.RADIO(["DoubleClick","Double-Click"],"zoom",{action:g.Zoom}),c.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),c.RULE(),c.LABEL(["TriggerRequires","Trigger Requires:"]),c.CHECKBOX((f.Browser.isMac?["Option","Option"]:["Alt","Alt"]),"ALT"),c.CHECKBOX(["Command","Command"],"CMD",{hidden:!f.Browser.isMac}),c.CHECKBOX(["Control","Control"],"CTRL",{hidden:f.Browser.isMac}),c.CHECKBOX(["Shift","Shift"],"Shift")),c.SUBMENU(["ZoomFactor","Zoom Factor"],c.RADIO("125%","zscale"),c.RADIO("133%","zscale"),c.RADIO("150%","zscale"),c.RADIO("175%","zscale"),c.RADIO("200%","zscale"),c.RADIO("250%","zscale"),c.RADIO("300%","zscale"),c.RADIO("400%","zscale")),c.RULE(),c.SUBMENU(["Renderer","Math Renderer"],{hidden:!r.showRenderer},c.RADIO(["HTML-CSS","HTML-CSS"],"renderer",{action:g.Renderer}),c.RADIO(["CommonHTML","Common HTML"],"renderer",{action:g.Renderer,value:"CommonHTML"}),c.RADIO(["PreviewHTML","Preview HTML"],"renderer",{action:g.Renderer,value:"PreviewHTML"}),c.RADIO(["MathML","MathML"],"renderer",{action:g.Renderer,value:"NativeMML"}),c.RADIO(["SVG","SVG"],"renderer",{action:g.Renderer}),c.RADIO(["PlainSource","Plain Source"],"renderer",{action:g.Renderer,value:"PlainSource"}),c.RULE(),c.CHECKBOX(["FastPreview","Fast Preview"],"FastPreview"),c.CHECKBOX(["AssistiveMML","Assistive MathML"],"assistiveMML",{action:g.AssistiveMML}),c.CHECKBOX(["InTabOrder","Include in Tab Order"],"inTabOrder")),c.SUBMENU("MathPlayer",{hidden:!f.Browser.isMSIE||!r.showMathPlayer,disabled:!f.Browser.hasMathPlayer},c.LABEL(["MPHandles","Let MathPlayer Handle:"]),c.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:g.MPEvents,hidden:!l}),c.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:g.MPEvents,hidden:!l}),c.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:g.MPEvents,hidden:l})),c.SUBMENU(["FontPrefs","Font Preference"],{hidden:!r.showFontMenu},c.LABEL(["ForHTMLCSS","For HTML-CSS:"]),c.RADIO(["Auto","Auto"],"font",{action:g.Font}),c.RULE(),c.RADIO(["TeXLocal","TeX (local)"],"font",{action:g.Font}),c.RADIO(["TeXWeb","TeX (web)"],"font",{action:g.Font}),c.RADIO(["TeXImage","TeX (image)"],"font",{action:g.Font}),c.RULE(),c.RADIO(["STIXLocal","STIX (local)"],"font",{action:g.Font}),c.RADIO(["STIXWeb","STIX (web)"],"font",{action:g.Font}),c.RULE(),c.RADIO(["AsanaMathWeb","Asana Math (web)"],"font",{action:g.Font}),c.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"],"font",{action:g.Font}),c.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action:g.Font}),c.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:g.Font}),c.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:g.Font})),c.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!r.showContext},c.RADIO(["MathJax","MathJax"],"context"),c.RADIO(["Browser","Browser"],"context")),c.COMMAND(["Scale","Scale All Math ..."],g.Scale),c.RULE().With({hidden:!r.showDiscoverable,name:["","discover_rule"]}),c.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!r.showDiscoverable})),c.SUBMENU(["Locale","Language"],{hidden:!r.showLocale,ltr:true},c.RADIO("en","locale",{action:g.Locale}),c.RULE().With({hidden:!r.showLocaleURL,name:["","localURL_rule"]}),c.COMMAND(["LoadLocale","Load from URL ..."],g.LoadLocale,{hidden:!r.showLocaleURL})),c.RULE(),c.COMMAND(["About","About MathJax"],g.About),c.COMMAND(["Help","MathJax Help"],g.Help));if(g.isMobile){(function(){var u=r.settings;var t=g.menu.Find("Math Settings","Zoom Trigger").submenu;t.items[0].disabled=t.items[1].disabled=true;if(u.zoom==="Hover"||u.zoom=="Click"){u.zoom="None"}t.items=t.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){g.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}g.CreateLocaleMenu();g.CreateAnnotationMenu()});g.showRenderer=function(t){g.cookie.showRenderer=r.showRenderer=t;g.saveCookie();g.menu.Find("Math Settings","Math Renderer").hidden=!t};g.showMathPlayer=function(t){g.cookie.showMathPlayer=r.showMathPlayer=t;g.saveCookie();g.menu.Find("Math Settings","MathPlayer").hidden=!t};g.showFontMenu=function(t){g.cookie.showFontMenu=r.showFontMenu=t;g.saveCookie();g.menu.Find("Math Settings","Font Preference").hidden=!t};g.showContext=function(t){g.cookie.showContext=r.showContext=t;g.saveCookie();g.menu.Find("Math Settings","Contextual Menu").hidden=!t};g.showDiscoverable=function(t){g.cookie.showDiscoverable=r.showDiscoverable=t;g.saveCookie();g.menu.Find("Math Settings","Highlight on Hover").hidden=!t;g.menu.Find("Math Settings","discover_rule").hidden=!t};g.showLocale=function(t){g.cookie.showLocale=r.showLocale=t;g.saveCookie();g.menu.Find("Language").hidden=!t};MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",function(){if(!MathJax.OutputJax["HTML-CSS"].config.imageFont){g.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=true}});e.Queue(f.Register.StartupHook("End Config",{}),["Styles",p,r.styles],["Post",f.Startup.signal,"MathMenu Ready"],["loadComplete",p,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Website = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Website = exports.Website = function (_Block) {
		_inherits(Website, _Block);

		function Website() {
			_classCallCheck(this, Website);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		_createClass(Website, [{
			key: "attrs",
			get: function get() {
				return {
					src: new _model.Attribute(),
					width: new _model.Attribute({ default: 200 }),
					height: new _model.Attribute({ default: 200 })
				};
			}
		}, {
			key: "contains",
			get: function get() {
				return null;
			}
		}]);

		return Website;
	}(_model.Block);

	(0, _utils.defParser)(Website, "website", "widgets-website");

	Website.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "iframe", {
			src: node.attrs.src,
			width: node.attrs.width,
			height: node.attrs.height,
			content: "text/html;charset=UTF-8",
			class: "widgets-website widgets-edit",
			frameborder: "1",
			allowfullscreen: "1"
		});
	};

	Website.register("command", "insert", {
		derive: {
			params: [{ name: "URL", attr: "src", label: "Link to website, youTube, Google Maps ...", type: "url",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "src");
				} }, { name: "Width", attr: "width", label: "Width in pixels", type: "number", default: 200,
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "width");
				},
				options: { min: 50, height: 800 } }, { name: "Height", attr: "height", label: "Height in pixels", type: "number", default: 200,
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "height");
				},
				options: { min: 50, height: 800 } }]
		},
		label: "Website",
		menu: { group: "content", rank: 74, display: { type: "label", label: "Website" } }
	});

	(0, _utils.defParamsClick)(Website, "website:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-website:hover {\n\tpadding-left: 16px;\n    padding-top: 16px;\n}\n\n");

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.InlineMath = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InlineMath = exports.InlineMath = function (_Inline) {
		_inherits(InlineMath, _Inline);

		function InlineMath() {
			_classCallCheck(this, InlineMath);

			return _possibleConstructorReturn(this, _Inline.apply(this, arguments));
		}

		_createClass(InlineMath, [{
			key: "attrs",
			get: function get() {
				return {
					tex: new _model.Attribute()
				};
			}
		}, {
			key: "contains",
			get: function get() {
				return null;
			}
		}]);

		return InlineMath;
	}(_model.Inline);

	(0, _utils.defParser)(InlineMath, "span", "widgets-inlinemath");

	InlineMath.prototype.serializeDOM = function (node) {
		if (node.rendered) {
			node.rendered = node.rendered.cloneNode(true);
		} else {
			node.rendered = (0, _dom.elt)("span", { class: "widgets-inlinemath widgets-edit" }, " \\(" + node.attrs.tex + "\\) ");
			// wait until node is attached to document to render
			MathJax.Hub.Queue(["Delay", MathJax.Callback, 100], ["Typeset", MathJax.Hub, node.rendered]);
		}
		return node.rendered;
	};

	InlineMath.register("command", "insert", {
		derive: {
			params: [{ name: "Latex", attr: "tex", label: "Latex Expression", type: "text",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "tex");
				} }]
		},
		label: "InlineMath",
		menu: { group: "content", rank: 71, display: { type: "label", label: "Inline Math" } }
	});

	(0, _utils.defParamsClick)(InlineMath, "inlinemath:insert");

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-inlinemath {}\n\n");

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.Image = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Image = exports.Image = function (_Inline) {
		_inherits(Image, _Inline);

		function Image() {
			_classCallCheck(this, Image);

			return _possibleConstructorReturn(this, _Inline.apply(this, arguments));
		}

		_createClass(Image, [{
			key: "attrs",
			get: function get() {
				return {
					src: new _model.Attribute(),
					alt: new _model.Attribute(),
					title: new _model.Attribute(),
					class: new _model.Attribute({ default: "widgets-img widgets-edit" })
				};
			}
		}]);

		return Image;
	}(_model.Inline);

	(0, _utils.defParser)(Image, "img", "widgets-img");

	Image.prototype.serializeDOM = function (node, s) {
		return s.renderAs(node, "img", node.attrs);
	};

	Image.register("command", "insert", {
		derive: {
			params: [{ name: "File", attr: "src", label: "Image File", type: "file", default: "img.png",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "src");
				} }, { name: "Description", attr: "alt", label: "Description / alternative text", type: "text",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "alt");
				} }, { name: "Title", attr: "title", label: "Title", type: "text",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "title");
				} }]
		},
		label: "Image",
		menu: { group: "content", rank: 70, display: { type: "label", label: "Image" } }
	});

	(0, _utils.defParamsClick)(Image, "image:insert", ["all"]);

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-img {}\n\n");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.SpreadSheet = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SpreadSheet = exports.SpreadSheet = function (_Block) {
		_inherits(SpreadSheet, _Block);

		function SpreadSheet() {
			_classCallCheck(this, SpreadSheet);

			return _possibleConstructorReturn(this, _Block.apply(this, arguments));
		}

		_createClass(SpreadSheet, [{
			key: "attrs",
			get: function get() {
				return {
					data: new _model.Attribute()
				};
			}
		}, {
			key: "contains",
			get: function get() {
				return null;
			}
		}]);

		return SpreadSheet;
	}(_model.Block);

	(0, _utils.defParser)(SpreadSheet, "div", "widgets-spreadsheet");

	SpreadSheet.prototype.serializeDOM = function (node) {
		if (node.rendered) {
			node.rendered = node.rendered.cloneNode(true);
		} else {
			node.rendered = (0, _dom.elt)("div", { class: "widgets-spreadsheet widgets-edit" });
			// wait until node is attached to document to render
			window.setTimeout(function () {
				var data = [["", "Ford", "Volvo", "Toyota", "Honda"], ["2014", 10, 11, 12, 13], ["2015", 20, 11, 14, 13], ["2016", 30, 15, 12, 13]];

				new Handsontable(node.rendered, {
					data: data,
					minSpareRows: 1,
					rowHeaders: true,
					colHeaders: true,
					contextMenu: true
				});
			}, 100);
		}
		return node.rendered;
	};

	SpreadSheet.register("command", "insert", {
		derive: {
			params: [{ name: "Data Link", attr: "data", label: "Link to CSV (fixed for demo)", type: "file", default: "cars.csv",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "data");
				} }]
		},
		label: "SpreadSheet",
		menu: { group: "content", rank: 75, display: { type: "label", label: "Spreadsheet" } }
	});

	(0, _utils.defParamsClick)(SpreadSheet, "spreadsheet:insert", ["all"]);

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-spreadsheet {\n}\n\n");

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;
	exports.CarryForward = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _model = __webpack_require__(3);

	var _dom = __webpack_require__(14);

	var _utils = __webpack_require__(15);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getCarryOptions(names) {
		return names.map(function (w) {
			return { value: w, label: w };
		});
	}

	var CarryForward = exports.CarryForward = function (_Inline) {
		_inherits(CarryForward, _Inline);

		function CarryForward() {
			_classCallCheck(this, CarryForward);

			return _possibleConstructorReturn(this, _Inline.apply(this, arguments));
		}

		_createClass(CarryForward, [{
			key: "attrs",
			get: function get() {
				return {
					name: new _model.Attribute(),
					model: new _model.Attribute({ default: "user_response" }),
					type: new _model.Attribute({ default: "carry_forward" }),
					class: new _model.Attribute({ default: "widgets-carryforward widgets-edit" })
				};
			}
		}]);

		return CarryForward;
	}(_model.Inline);

	(0, _utils.defParser)(CarryForward, "thinkspace", "widgets-carryforward");

	CarryForward.prototype.serializeDOM = function (node) {
		return (0, _dom.elt)("thinkspace", node.attrs, (0, _dom.elt)("img", { src: "forward.png", width: 16, height: 16, title: "Carry forward " + node.attrs.name }));
	};

	CarryForward.register("command", "insert", {
		derive: {
			params: [{ name: "Name", attr: "name", label: "Element name", type: "select",
				prefill: function prefill(pm) {
					return (0, _utils.selectedNodeAttr)(pm, this, "name");
				},
				options: function options() {
					return getCarryOptions(["test1", "test2"]);
				} }]
		},
		label: "CarryForward",
		menu: { group: "content", rank: 72, display: { type: "label", label: "Carry Forward" } }
	});

	(0, _utils.defParamsClick)(CarryForward, "carryforward:insert", ["all"]);

	(0, _dom.insertCSS)("\n\n.ProseMirror .widgets-carryforward img:hover {\n\tcursor: pointer;\n}\n\n");

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.historyGroup = exports.blockGroup = exports.textblockMenu = exports.insertMenu = exports.inlineGroup = exports.DropdownSubmenu = exports.Dropdown = exports.MenuCommandGroup = exports.MenuCommand = undefined;
	exports.resolveGroup = resolveGroup;
	exports.renderGrouped = renderGrouped;

	var _dom = __webpack_require__(14);

	var _sortedinsert = __webpack_require__(32);

	var _sortedinsert2 = _interopRequireDefault(_sortedinsert);

	var _obj = __webpack_require__(11);

	var _error = __webpack_require__(7);

	var _icons = __webpack_require__(77);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// !! This module defines a number of building blocks for ProseMirror
	// menus, as consumed by the [`menubar`](#menu/menubar) and
	// [`tooltipmenu`](#menu/tooltipmenu) modules.

	// ;; #path=MenuElement #kind=interface
	// The types defined in this module aren't the only thing you can
	// display in your menu. Anything that conforms to this interface can
	// be put into a menu structure.

	// :: (pm: ProseMirror) → ?DOMNode #path=MenuElement.render
	// Render the element for display in the menu. Returning `null` can be
	// used to signal that this element shouldn't be displayed for the
	// given editor state.

	// ;; #path=MenuGroup #kind=interface
	// A menu group represents a group of things that may appear in a
	// menu. It may be either a `MenuElement`, a `MenuCommandGroup`, or an
	// array of such values. Can be reduced to an array of `MenuElement`s
	// using `resolveGroup`.

	var prefix = "ProseMirror-menu";

	function title(pm, command) {
	  if (!command.label) return null;
	  var key = command.name && pm.keyForCommand(command.name);
	  return key ? command.label + " (" + key + ")" : command.label;
	}

	// ;; Wraps a [command](#Command) so that it can be rendered in a
	// menu.

	var MenuCommand = exports.MenuCommand = function () {
	  // :: (union<Command, string>, MenuCommandSpec)

	  function MenuCommand(command, options) {
	    _classCallCheck(this, MenuCommand);

	    this.command_ = command;
	    this.options = options;
	  }

	  // :: Command
	  // Retrieve the command associated with this object.

	  _createClass(MenuCommand, [{
	    key: "command",
	    value: function command(pm) {
	      return typeof this.command_ == "string" ? pm.commands[this.command_] : this.command_;
	    }

	    // :: (ProseMirror) → DOMNode
	    // Renders the command according to its [display
	    // spec](#MenuCommandSpec.display), and adds an event handler which
	    // executes the command when the representation is clicked.

	  }, {
	    key: "render",
	    value: function render(pm) {
	      var cmd = this.command(pm),
	          disabled = false;
	      if (!cmd) return;
	      if (this.options.select != "ignore" && !cmd.select(pm)) {
	        if (this.options.select == null || this.options.select == "hide") return null;else if (this.options.select == "disable") disabled = true;
	      }

	      var disp = this.options.display;
	      if (!disp) _error.AssertionError.raise("No display style defined for menu command " + cmd.name);

	      var dom = undefined;
	      if (disp.render) {
	        dom = disp.render(cmd);
	      } else if (disp.type == "icon") {
	        dom = (0, _icons.getIcon)(cmd.name, disp);
	        if (!disabled && cmd.active(pm)) dom.classList.add(prefix + "-active");
	      } else if (disp.type == "label") {
	        dom = (0, _dom.elt)("div", null, disp.label || cmd.spec.label);
	      } else {
	        _error.AssertionError.raise("Unsupported command display style: " + disp.type);
	      }
	      dom.setAttribute("title", title(pm, cmd));
	      if (this.options.class) dom.classList.add(this.options.class);
	      if (disabled) dom.classList.add(prefix + "-disabled");
	      if (this.options.css) dom.style.cssText += this.options.css;
	      dom.addEventListener("mousedown", function (e) {
	        e.preventDefault();e.stopPropagation();
	        pm.signal("interaction");
	        cmd.exec(pm, null, dom);
	      });
	      return dom;
	    }
	  }]);

	  return MenuCommand;
	}();

	// ;; Represents a [group](#MenuCommandSpec.group) of commands, as
	// they appear in the editor's schema.

	var MenuCommandGroup = exports.MenuCommandGroup = function () {
	  // :: (string, ?MenuCommandSpec)
	  // Create a group for the given group name, optionally adding or
	  // overriding fields in the commands' [specs](#MenuCommandSpec).

	  function MenuCommandGroup(name, options) {
	    _classCallCheck(this, MenuCommandGroup);

	    this.name = name;
	    this.options = options;
	  }

	  _createClass(MenuCommandGroup, [{
	    key: "collect",
	    value: function collect(pm) {
	      var _this = this;

	      var result = [];
	      for (var name in pm.commands) {
	        var cmd = pm.commands[name],
	            spec = cmd.spec.menu;
	        if (spec && spec.group == this.name) (0, _sortedinsert2.default)(result, { cmd: cmd, rank: spec.rank == null ? 50 : spec.rank }, function (a, b) {
	          return a.rank - b.rank;
	        });
	      }
	      return result.map(function (o) {
	        var spec = o.cmd.spec.menu;
	        if (_this.options) spec = (0, _obj.copyObj)(_this.options, (0, _obj.copyObj)(spec));
	        return new MenuCommand(o.cmd, spec);
	      });
	    }

	    // :: (ProseMirror) → [MenuCommand]
	    // Get the group of matching commands in the given editor.

	  }, {
	    key: "get",
	    value: function get(pm) {
	      var groups = pm.mod.menuGroups || this.startGroups(pm);
	      return groups[this.name] || (groups[this.name] = this.collect(pm));
	    }
	  }, {
	    key: "startGroups",
	    value: function startGroups(pm) {
	      var clear = function clear() {
	        pm.mod.menuGroups = null;
	        pm.off("commandsChanging", clear);
	      };
	      pm.on("commandsChanging", clear);
	      return pm.mod.menuGroups = Object.create(null);
	    }
	  }]);

	  return MenuCommandGroup;
	}();

	// ;; A drop-down menu, displayed as a label with a downwards-pointing
	// triangle to the right of it.

	var Dropdown = exports.Dropdown = function () {
	  // :: (Object, MenuGroup)
	  // Create a dropdown wrapping the given group. Options may include
	  // the following properties:
	  //
	  // **`label`**`: string`
	  //   : The label to show on the drop-down control. When
	  //     `activeLabel` is also given, this one is used as a
	  //     fallback.
	  //
	  // **`activeLabel`**`: bool`
	  //   : Instead of showing a fixed label, enabling this causes the
	  //     element to search through its content, looking for an
	  //     [active](#CommandSpec.active) command. If one is found, its
	  //     [`activeLabel`](#MenuCommandSpec.activeLabel) property is
	  //     shown as the drop-down's label.
	  //
	  // **`title`**`: string`
	  //   : Sets the
	  //     [`title`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
	  //     attribute given to the menu control.
	  //
	  // **`class`**`: string`
	  //   : When given, adds an extra CSS class to the menu control.

	  function Dropdown(options, content) {
	    _classCallCheck(this, Dropdown);

	    this.options = options || {};
	    this.content = content;
	  }

	  // :: (ProseMirror) → DOMNode
	  // Returns a node showing the collapsed menu, which expands when clicked.

	  _createClass(Dropdown, [{
	    key: "render",
	    value: function render(pm) {
	      var _this2 = this;

	      if (resolveGroup(pm, this.content).length == 0) return;

	      var label = this.options.activeLabel && this.findActiveIn(this, pm) || this.options.label;
	      var dom = (0, _dom.elt)("div", { class: prefix + "-dropdown " + (this.options.class || ""),
	        style: this.options.css,
	        title: this.options.title }, label);
	      var open = null;
	      dom.addEventListener("mousedown", function (e) {
	        e.preventDefault();e.stopPropagation();
	        if (open && open()) open = null;else open = _this2.expand(pm, dom);
	      });
	      return dom;
	    }
	  }, {
	    key: "expand",
	    value: function expand(pm, dom) {
	      var rendered = renderDropdownItems(resolveGroup(pm, this.content), pm);
	      var box = dom.getBoundingClientRect(),
	          outer = pm.wrapper.getBoundingClientRect();
	      var menuDOM = (0, _dom.elt)("div", { class: prefix + "-dropdown-menu " + (this.options.class || ""),
	        style: "left: " + (box.left - outer.left) + "px; top: " + (box.bottom - outer.top) + "px" }, rendered);

	      var done = false;
	      function finish() {
	        if (done) return;
	        done = true;
	        pm.off("interaction", finish);
	        pm.wrapper.removeChild(menuDOM);
	        return true;
	      }
	      pm.signal("interaction");
	      pm.wrapper.appendChild(menuDOM);
	      pm.on("interaction", finish);
	      return finish;
	    }
	  }, {
	    key: "findActiveIn",
	    value: function findActiveIn(element, pm) {
	      var items = resolveGroup(pm, element.content);
	      for (var i = 0; i < items.length; i++) {
	        var cur = items[i];
	        if (cur instanceof MenuCommand) {
	          var active = cur.command(pm).active(pm);
	          if (active) return cur.options.activeLabel;
	        } else if (cur instanceof DropdownSubmenu) {
	          var found = this.findActiveIn(cur, pm);
	          if (found) return found;
	        }
	      }
	    }
	  }]);

	  return Dropdown;
	}();

	function renderDropdownItems(items, pm) {
	  var rendered = [];
	  for (var i = 0; i < items.length; i++) {
	    var inner = items[i].render(pm);
	    if (inner) rendered.push((0, _dom.elt)("div", { class: prefix + "-dropdown-item" }, inner));
	  }
	  if (!rendered.length) rendered.push((0, _dom.elt)("div", { class: prefix + "-dropdown-empty" }, "(empty)"));
	  return rendered;
	}

	// ;; Represents a submenu wrapping a group of items that start hidden
	// and expand to the right when hovered over or tapped.

	var DropdownSubmenu = exports.DropdownSubmenu = function () {
	  // :: (Object, MenuGroup)
	  // Creates a submenu for the given group of menu elements. The
	  // following options are recognized:
	  //
	  // **`label`**`: string`
	  //   : The label to show on the submenu.

	  function DropdownSubmenu(options, content) {
	    _classCallCheck(this, DropdownSubmenu);

	    this.options = options || {};
	    this.content = content;
	  }

	  // :: (ProseMirror) → DOMNode
	  // Renders the submenu.

	  _createClass(DropdownSubmenu, [{
	    key: "render",
	    value: function render(pm) {
	      var items = resolveGroup(pm, this.content);
	      if (!items.length) return;

	      var label = (0, _dom.elt)("div", { class: prefix + "-submenu-label" }, this.options.label);
	      var wrap = (0, _dom.elt)("div", { class: prefix + "-submenu-wrap" }, label, (0, _dom.elt)("div", { class: prefix + "-submenu" }, renderDropdownItems(items, pm)));
	      label.addEventListener("mousedown", function (e) {
	        e.preventDefault();e.stopPropagation();
	        wrap.classList.toggle(prefix + "-submenu-wrap-active");
	      });
	      return wrap;
	    }
	  }]);

	  return DropdownSubmenu;
	}();

	// :: (ProseMirror, MenuGroup) → [MenuElement]
	// Resolve the given `MenuGroup` into a flat array of renderable
	// elements.

	function resolveGroup(pm, content) {
	  var result = undefined,
	      isArray = Array.isArray(content);
	  for (var i = 0; i < (isArray ? content.length : 1); i++) {
	    var cur = isArray ? content[i] : content;
	    if (cur instanceof MenuCommandGroup) {
	      var elts = cur.get(pm);
	      if (!isArray || content.length == 1) return elts;else result = (result || content.slice(0, i)).concat(elts);
	    } else if (result) {
	      result.push(cur);
	    }
	  }
	  return result || (isArray ? content : [content]);
	}

	// :: (ProseMirror, [MenuGroup]) → ?DOMFragment
	// Render the given menu groups into a document fragment, placing
	// separators between them (and ensuring no superfluous separators
	// appear when some of the groups turn out to be empty).
	function renderGrouped(pm, content) {
	  var result = document.createDocumentFragment(),
	      needSep = false;
	  for (var i = 0; i < content.length; i++) {
	    var items = resolveGroup(pm, content[i]),
	        added = false;
	    for (var j = 0; j < items.length; j++) {
	      var rendered = items[j].render(pm);
	      if (rendered) {
	        if (!added && needSep) result.appendChild(separator());
	        result.appendChild((0, _dom.elt)("span", { class: prefix + "item" }, rendered));
	        added = true;
	      }
	    }
	    if (added) needSep = true;
	  }
	  return result;
	}

	function separator() {
	  return (0, _dom.elt)("span", { class: prefix + "separator" });
	}

	// ;; #path=CommandSpec #kind=interface #noAnchor
	// The `menu` module gives meaning to an additional property in
	// [command specs](#CommandSpec).

	// :: MenuCommandSpec #path=CommandSpec.menu
	// Adds the command to a menu group, so that it is picked up by
	// `MenuCommandGroup` objects with the matching
	// [name](#MenuCommandSpec.name).

	// ;; #path=MenuCommandSpec #kind=interface
	// Configures the way a command shows up in a menu, when wrapped in a
	// `MenuCommand`.

	// :: string #path=MenuCommandSpec.group
	// Identifies the group this command should be added to (for example
	// `"inline"` or `"block"`). Only meaningful when associated with a
	// `CommandSpec` (as opposed to passed directly to `MenuCommand`).

	// :: number #path=MenuCommandSpec.rank
	// Determines the command's position in its group (lower ranks come
	// first). Only meaningful in a `CommandSpec`.

	// :: Object #path=MenuCommandSpec.display
	// Determines how the command is shown in the menu. It may have either
	// a `type` property containing one of the strings shown below, or a
	// `render` property that, when called with the command as argument,
	// returns a DOM node representing the command's menu representation.
	//
	// **`"icon"`**
	//   : Show the command as an icon. The object may have `{path, width,
	//     height}` properties, where `path` is an [SVG path
	//     spec](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d),
	//     and `width` and `height` provide the viewbox in which that path
	//     exists. Alternatively, it may have a `text` property specifying
	//     a string of text that makes up the icon, with an optional
	//     `style` property giving additional CSS styling for the text.
	//
	// **`"label"`**
	//   : Render the command as a label. Mostly useful for commands
	//     wrapped in a [drop-down](#Dropdown) or similar menu. The object
	//     should have a `label` property providing the text to display.

	// :: string #path=MenuCommandSpec.activeLabel
	// When used in a `Dropdown` with `activeLabel` enabled, this should
	// provide the text shown when the command is active.

	// :: string #path=MenuCommandSpec.select
	// Controls whether the command's [`select`](#CommandSpec.select)
	// method has influence on its appearance. When set to `"hide"`, or
	// not given, the command is hidden when it is not selectable. When
	// set to `"ignore"`, the `select` method is not called. When set to
	// `"disable"`, the command is shown in disabled form when `select`
	// returns false.

	// :: string #path=MenuCommandSpec.class
	// Optionally adds a CSS class to the command's DOM representation.

	// :: string #path=MenuCommandSpec.css
	// Optionally adds a string of inline CSS to the command's DOM
	// representation.

	// :: MenuCommandGroup
	// The inline command group.
	var inlineGroup = exports.inlineGroup = new MenuCommandGroup("inline");

	// :: Dropdown
	// The default insert dropdown menu.
	var insertMenu = exports.insertMenu = new Dropdown({ label: "Insert" }, new MenuCommandGroup("insert"));

	// :: Dropdown
	// The default textblock type menu.
	var textblockMenu = exports.textblockMenu = new Dropdown({ label: "Type..", displayActive: true, class: "ProseMirror-textblock-dropdown" }, [new MenuCommandGroup("textblock"), new DropdownSubmenu({ label: "Heading" }, new MenuCommandGroup("textblockHeading"))]);

	// :: MenuCommandGroup
	// The block command group.
	var blockGroup = exports.blockGroup = new MenuCommandGroup("block");

	// :: MenuCommandGroup
	// The history command group.
	var historyGroup = exports.historyGroup = new MenuCommandGroup("history");

	(0, _dom.insertCSS)("\n\n.ProseMirror-textblock-dropdown {\n  min-width: 3em;\n}\n\n." + prefix + " {\n  margin: 0 -4px;\n  line-height: 1;\n}\n\n.ProseMirror-tooltip ." + prefix + " {\n  width: -webkit-fit-content;\n  width: fit-content;\n  white-space: pre;\n}\n\n." + prefix + "item {\n  margin-right: 3px;\n  display: inline-block;\n}\n\n." + prefix + "separator {\n  border-right: 1px solid #ddd;\n  margin-right: 3px;\n}\n\n." + prefix + "-dropdown, ." + prefix + "-dropdown-menu {\n  font-size: 90%;\n}\n\n." + prefix + "-dropdown {\n  padding: 1px 14px 1px 4px;\n  display: inline-block;\n  vertical-align: 1px;\n  position: relative;\n  cursor: pointer;\n}\n\n." + prefix + "-dropdown:after {\n  content: \"\";\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid currentColor;\n  opacity: .6;\n  position: absolute;\n  right: 2px;\n  top: calc(50% - 2px);\n}\n\n." + prefix + "-dropdown-menu, ." + prefix + "-submenu {\n  position: absolute;\n  background: white;\n  color: #666;\n  border: 1px solid #aaa;\n  padding: 2px;\n}\n\n." + prefix + "-dropdown-menu {\n  z-index: 15;\n  min-width: 6em;\n}\n\n." + prefix + "-dropdown-item {\n  cursor: pointer;\n  padding: 2px 8px 2px 4px;\n}\n\n." + prefix + "-dropdown-item:hover {\n  background: #f2f2f2;\n}\n\n." + prefix + "-dropdown-empty {\n  opacity: 0.4;\n}\n\n." + prefix + "-submenu-wrap {\n  position: relative;\n  margin-right: -4px;\n}\n\n." + prefix + "-submenu-label:after {\n  content: \"\";\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid transparent;\n  border-left: 4px solid currentColor;\n  opacity: .6;\n  position: absolute;\n  right: 4px;\n  top: calc(50% - 4px);\n}\n\n." + prefix + "-submenu {\n  display: none;\n  min-width: 4em;\n  left: 100%;\n  top: -3px;\n}\n\n." + prefix + "-active {\n  background: #eee;\n  border-radius: 4px;\n}\n\n." + prefix + "-active {\n  background: #eee;\n  border-radius: 4px;\n}\n\n." + prefix + "-disabled {\n  opacity: .3;\n}\n\n." + prefix + "-submenu-wrap:hover ." + prefix + "-submenu, ." + prefix + "-submenu-wrap-active ." + prefix + "-submenu {\n  display: block;\n}\n");

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getIcon = getIcon;

	var _dom = __webpack_require__(14);

	var svgCollection = null;
	var svgBuilt = Object.create(null);

	var SVG = "http://www.w3.org/2000/svg";
	var XLINK = "http://www.w3.org/1999/xlink";

	var prefix = "ProseMirror-icon";

	function getIcon(name, data) {
	  var node = document.createElement("div");
	  node.className = prefix;
	  if (data.path) {
	    if (!svgBuilt[name]) buildSVG(name, data);
	    var svg = node.appendChild(document.createElementNS(SVG, "svg"));
	    svg.style.width = data.width / data.height + "em";
	    var use = svg.appendChild(document.createElementNS(SVG, "use"));
	    use.setAttributeNS(XLINK, "href", "#pm-icon-" + name);
	  } else {
	    node.appendChild(document.createElement("span")).textContent = data.text;
	    if (data.css) node.firstChild.style.cssText = data.css;
	  }
	  return node;
	}

	function buildSVG(name, data) {
	  if (!svgCollection) {
	    svgCollection = document.createElementNS(SVG, "svg");
	    svgCollection.style.display = "none";
	    document.body.insertBefore(svgCollection, document.body.firstChild);
	  }
	  var sym = document.createElementNS(SVG, "symbol");
	  sym.id = "pm-icon-" + name;
	  sym.setAttribute("viewBox", "0 0 " + data.width + " " + data.height);
	  var path = sym.appendChild(document.createElementNS(SVG, "path"));
	  path.setAttribute("d", data.path);
	  svgCollection.appendChild(sym);
	  svgBuilt[name] = true;
	}

	(0, _dom.insertCSS)("\n." + prefix + " {\n  display: inline-block;\n  line-height: .8;\n  vertical-align: -2px; /* Compensate for padding */\n  padding: 2px 8px;\n  cursor: pointer;\n}\n\n." + prefix + " svg {\n  fill: currentColor;\n  height: 1em;\n}\n\n." + prefix + " span {\n  vertical-align: text-top;\n}");

/***/ }
/******/ ])
});
;