(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~scrumboard-scrumboard-module~todo-todo-module"], {
    /***/
    "212X":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@swimlane/ngx-dnd/__ivy_ngcc__/fesm2015/swimlane-ngx-dnd.js ***!
      \**********************************************************************************/

    /*! exports provided: ContainerComponent, DragHandleDirective, DraggableDirective, DrakeStoreService, DroppableDirective, ItemComponent, NgxDnDModule */

    /***/
    function X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContainerComponent", function () {
        return ContainerComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DragHandleDirective", function () {
        return DragHandleDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DraggableDirective", function () {
        return DraggableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrakeStoreService", function () {
        return DrakeStoreService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DroppableDirective", function () {
        return DroppableDirective;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
        return ItemComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NgxDnDModule", function () {
        return NgxDnDModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _swimlane_dragula__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/dragula */
      "Hdb2");
      /* harmony import */


      var _swimlane_dragula__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_swimlane_dragula__WEBPACK_IMPORTED_MODULE_3__); // see https://github.com/dherges/ng-packagr/issues/217


      function ContainerComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-dnd-item", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", item_r3)("dropZone", ctx_r2.dropZone)("dropZones", ctx_r2.dropZones)("copy", ctx_r2.copy)("moves", ctx_r2.moves)("removeOnSpill", ctx_r2.removeOnSpill)("droppableItemClass", ctx_r2.droppableItemClass);
        }
      }

      function ContainerComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContainerComponent_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.model);
        }
      }

      function ContainerComponent_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0, 0, ["*ngIf", "!model"]);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "gu-empty": a0
        };
      };

      var _c1 = ["*"];

      function ItemComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-dnd-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx_r0.model)("template", ctx_r0.container.template)("dropZone", ctx_r0.dropZone)("dropZones", ctx_r0.dropZones)("removeOnSpill", ctx_r0.removeOnSpill)("droppableItemClass", ctx_r0.droppableItemClass)("copy", ctx_r0.copy);
        }
      }

      function ItemComponent_ng_container_2_1_ng_template_0_Template(rf, ctx) {}

      function ItemComponent_ng_container_2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemComponent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.container.template)("ngTemplateOutletContext", ctx_r4.data);
        }
      }

      function ItemComponent_ng_container_2_ng_container_2_ngx_dnd_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-dnd-container", 3);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", ctx_r7.model.children)("template", ctx_r7.container.template)("dropZone", ctx_r7.dropZone)("dropZones", ctx_r7.dropZones)("removeOnSpill", ctx_r7.removeOnSpill)("droppableItemClass", ctx_r7.droppableItemClass)("copy", ctx_r7.copy);
        }
      }

      function ItemComponent_ng_container_2_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemComponent_ng_container_2_ng_container_2_ngx_dnd_container_3_Template, 1, 7, "ngx-dnd-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.model.label, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.model.children);
        }
      }

      function ItemComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemComponent_ng_container_2_1_Template, 1, 2, undefined, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemComponent_ng_container_2_ng_container_2_Template, 4, 2, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.container.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.container.template);
        }
      }

      function ItemComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
        }
      }

      function ItemComponent_ng_container_4_1_ng_template_0_Template(rf, ctx) {}

      function ItemComponent_ng_container_4_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemComponent_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template", 5);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r8.container.template)("ngTemplateOutletContext", ctx_r8.data);
        }
      }

      function ItemComponent_ng_container_4_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.model, " ");
        }
      }

      function ItemComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemComponent_ng_container_4_1_Template, 1, 2, undefined, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemComponent_ng_container_4_div_2_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.container.template);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.container.template);
        }
      }

      var dragula = _swimlane_dragula__WEBPACK_IMPORTED_MODULE_3__;
      /**
       * Central service that handles all events
       *
       * @export
       */

      var DrakeStoreService = /*#__PURE__*/function () {
        function DrakeStoreService() {
          _classCallCheck(this, DrakeStoreService);

          this.droppableMap = new WeakMap();
          this.draggableMap = new WeakMap();
          this.dragulaOptions = this.createDrakeOptions();
          this.drake = dragula([], this.dragulaOptions);
          this.registerEvents();
        }

        _createClass(DrakeStoreService, [{
          key: "register",
          value: function register(droppable) {
            this.droppableMap.set(droppable.container, droppable);
            this.drake.containers.push(droppable.container);
          }
        }, {
          key: "remove",
          value: function remove(droppable) {
            this.droppableMap["delete"](droppable.container);
            var idx = this.drake.containers.indexOf(droppable.container);

            if (idx > -1) {
              this.drake.containers.splice(idx, 1);
            }
          }
        }, {
          key: "registerDraggable",
          value: function registerDraggable(draggable) {
            this.draggableMap.set(draggable.element, draggable);
          }
        }, {
          key: "removeDraggable",
          value: function removeDraggable(draggable) {
            this.draggableMap["delete"](draggable.element);
          }
        }, {
          key: "createDrakeOptions",
          value: function createDrakeOptions() {
            var _this = this;

            var accepts = function accepts(el, target
            /*, source: any, sibling: any */
            ) {
              if (el.contains(target)) {
                return false;
              }

              var elementComponent = _this.draggableMap.get(el);

              var targetComponent = _this.droppableMap.get(target);

              if (elementComponent && targetComponent) {
                return elementComponent.dropZones.includes(targetComponent.dropZone);
              }

              return true;
            };

            var copy = function copy(_, source) {
              var sourceComponent = _this.droppableMap.get(source);

              if (sourceComponent) {
                return sourceComponent.copy;
              }

              return false;
            };

            var moves = function moves(el, source, handle, sibling) {
              var elementComponent = _this.draggableMap.get(el);

              if (elementComponent) {
                return elementComponent.moves(source, handle, sibling);
              }

              return true;
            };

            var direction = function direction(el, target, source) {
              var targetComponent = _this.droppableMap.get(target);

              return targetComponent.direction || 'vertical';
            };

            return {
              accepts: accepts,
              copy: copy,
              moves: moves,
              revertOnSpill: true,
              direction: direction
            };
          }
        }, {
          key: "registerEvents",
          value: function registerEvents() {
            var _this2 = this;

            var dragElm;
            var draggedItem;
            this.drake.on('drag', function (el, source) {
              draggedItem = undefined;
              dragElm = el;

              if (!el || !source) {
                return;
              }

              if (_this2.draggableMap.has(el)) {
                var elementComponent = _this2.draggableMap.get(el);

                draggedItem = elementComponent.model;
                elementComponent.drag.emit({
                  type: 'drag',
                  el: el,
                  source: source,
                  value: draggedItem
                });
              }

              if (_this2.droppableMap.has(source)) {
                var sourceComponent = _this2.droppableMap.get(source);

                _this2.dragulaOptions.removeOnSpill = sourceComponent.removeOnSpill;
                sourceComponent.drag.emit({
                  type: 'drag',
                  el: el,
                  source: source,
                  sourceComponent: sourceComponent,
                  value: draggedItem
                });
              }
            });
            this.drake.on('drop', function (el, target, source) {
              var targetComponent = _this2.droppableMap.get(target);

              if (!targetComponent) {
                // not a target, abort
                return;
              }

              var dropElmModel = draggedItem;
              var dropIndex = Array.prototype.indexOf.call(target.children, el);

              if (dropIndex < 0) {
                // dropIndex is bad... cancel
                _this2.drake.cancel(true);

                return;
              }

              var sourceComponent = _this2.droppableMap.get(source);

              if (sourceComponent) {
                var sourceModel = sourceComponent.model;
                var targetModel = targetComponent.model;
                var hasDragModel = !!(sourceModel && draggedItem);
                var dragIndex = hasDragModel ? sourceModel.indexOf(draggedItem) : -1;

                if (hasDragModel && dragIndex < 0) {
                  // dragIndex is bad... cancel
                  _this2.drake.cancel(true);

                  return;
                }

                if (targetModel) {
                  var reorder = dragIndex > -1 && sourceModel && target === source;
                  var copy = !sourceModel || dragElm !== el;

                  if (reorder) {
                    sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
                  } else {
                    if (el.parentNode === target) {
                      target.removeChild(el);
                    }

                    if (copy) {
                      dropElmModel = JSON.parse(JSON.stringify(dropElmModel));
                    } else {
                      if (el.parentNode !== source) {
                        // add element back, let angular remove it
                        _this2.drake.cancel(true);
                      }

                      sourceModel.splice(dragIndex, 1);
                    }

                    targetModel.splice(dropIndex, 0, dropElmModel);
                  }
                }
              }

              targetComponent.drop.emit({
                type: 'drop',
                el: el,
                source: source,
                value: dropElmModel,
                dropIndex: dropIndex
              });
            });
            this.drake.on('remove', function (el, container, source) {
              if (_this2.droppableMap.has(source)) {
                var sourceComponent = _this2.droppableMap.get(source);

                var sourceModel = sourceComponent.model;
                var dragIndex = draggedItem && sourceModel ? sourceModel.indexOf(draggedItem) : -1;

                if (dragIndex > -1) {
                  if (el.parentNode !== source) {
                    // add element back, let angular remove it
                    source.appendChild(el);
                  }

                  sourceModel.splice(dragIndex, 1);
                }

                sourceComponent.remove.emit({
                  type: 'remove',
                  el: el,
                  container: container,
                  source: source,
                  value: draggedItem
                });
              }
            });
            this.drake.on('cancel', function (el, container, source) {
              if (_this2.droppableMap.has(container)) {
                var containerComponent = _this2.droppableMap.get(container);

                containerComponent.cancel.emit({
                  type: 'cancel',
                  el: el,
                  container: container,
                  source: source,
                  value: draggedItem
                });
              }
            });
            this.drake.on('over', function (el, container, source) {
              if (_this2.droppableMap.has(container)) {
                var containerComponent = _this2.droppableMap.get(container);

                containerComponent.over.emit({
                  type: 'over',
                  el: el,
                  container: container,
                  source: source,
                  value: draggedItem
                });
              }
            });
            this.drake.on('out', function (el, container, source) {
              if (_this2.droppableMap.has(container)) {
                var containerComponent = _this2.droppableMap.get(container);

                containerComponent.out.emit({
                  type: 'out',
                  el: el,
                  container: container,
                  source: source,
                  value: draggedItem
                });
              }
            });
          }
        }]);

        return DrakeStoreService;
      }();

      DrakeStoreService.ɵfac = function DrakeStoreService_Factory(t) {
        return new (t || DrakeStoreService)();
      };

      DrakeStoreService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function DrakeStoreService_Factory() {
          return new DrakeStoreService();
        },
        token: DrakeStoreService,
        providedIn: "root"
      });
      DrakeStoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DrakeStoreService);
      var i = 10000;

      function getNextId() {
        return i++;
      }
      /**
       * Makes the container droppable and children draggable.
       *
       * @export
       */


      var DroppableDirective = /*#__PURE__*/function () {
        function DroppableDirective(el, renderer, drakesService) {
          _classCallCheck(this, DroppableDirective);

          this.el = el;
          this.renderer = renderer;
          this.drakesService = drakesService;
          this.copy = false;
          this.removeOnSpill = false;
          this.direction = 'vertical';
          this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.over = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(DroppableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.defaultZone = "@@DefaultDropZone-".concat(getNextId(), "@@");
            this.drakesService.register(this);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this3 = this;

            this.over.subscribe(function () {
              _this3.renderer.addClass(_this3.container, 'gu-over');
            });
            this.out.subscribe(function () {
              _this3.renderer.removeClass(_this3.container, 'gu-over');
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.drakesService.remove(this);
          }
        }, {
          key: "container",
          get: function get() {
            return this.el.nativeElement;
          }
        }, {
          key: "dropZone",
          get: function get() {
            return this._dropZone || this.ngxDroppable || this.defaultZone;
          },
          set: function set(val) {
            this._dropZone = val;
          }
        }]);

        return DroppableDirective;
      }();

      DroppableDirective.ɵfac = function DroppableDirective_Factory(t) {
        return new (t || DroppableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DrakeStoreService));
      };

      DroppableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DroppableDirective,
        selectors: [["", "ngxDroppable", ""]],
        inputs: {
          copy: "copy",
          removeOnSpill: "removeOnSpill",
          direction: "direction",
          dropZone: "dropZone",
          model: "model",
          ngxDroppable: "ngxDroppable"
        },
        outputs: {
          drop: "drop",
          drag: "drag",
          over: "over",
          out: "out",
          remove: "remove",
          cancel: "cancel"
        }
      });

      DroppableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }, {
          type: DrakeStoreService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DroppableDirective.prototype, "model", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DroppableDirective.prototype, "copy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DroppableDirective.prototype, "removeOnSpill", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DroppableDirective.prototype, "ngxDroppable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], DroppableDirective.prototype, "direction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "drop", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "over", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "out", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "remove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DroppableDirective.prototype, "cancel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String])], DroppableDirective.prototype, "dropZone", null);
      DroppableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], DrakeStoreService])], DroppableDirective);
      /**
       * Adds properties and events to draggable elements
       *
       * @export
       */

      var DraggableDirective = /*#__PURE__*/function () {
        function DraggableDirective(el, drakesService, droppableDirective) {
          _classCallCheck(this, DraggableDirective);

          this.el = el;
          this.drakesService = drakesService;
          this.droppableDirective = droppableDirective;
          this._moves = true;
          /*
          ContentChildren doesn't get children created with NgTemplateOutlet
          See https://github.com/angular/angular/issues/14842
          Implemented via updateElements method
                 @ContentChildren(DragHandleDirective, {descendants: true})
          handlesList: QueryList<DragHandleDirective>; */

          this.handles = [];
          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.dragDelay = 200; // milliseconds

          this.dragDelayed = true;
        }

        _createClass(DraggableDirective, [{
          key: "onMove",
          // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
          value: function onMove(e) {
            if (!this._moves || this.dragDelayed) {
              e.stopPropagation();
              clearTimeout(this.touchTimeout);
            }
          }
        }, {
          key: "onDown",
          value: function onDown() {
            var _this4 = this;

            if (this._moves) {
              this.touchTimeout = setTimeout(function () {
                _this4.dragDelayed = false;
              }, this.dragDelay);
            }
          }
        }, {
          key: "onUp",
          value: function onUp() {
            if (this._moves) {
              clearTimeout(this.touchTimeout);
              this.dragDelayed = true;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.update();
          }
        }, {
          key: "update",
          value: function update() {
            this._parentDropzones = [this.droppableDirective.dropZone];
            this.drakesService.registerDraggable(this);
            this.updateElements();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.drakesService.removeDraggable(this);
          }
        }, {
          key: "updateElements",
          value: function updateElements() {
            var nativeElement = this.el.nativeElement;
            var handles = nativeElement.querySelectorAll('[ngxdraghandle]');
            this.handles = Array.from(handles).filter(function (h) {
              return findFirstDraggableParent(h) === nativeElement;
            });

            function findFirstDraggableParent(c) {
              while (c.parentNode) {
                c = c.parentNode;

                if (c.hasAttribute && c.hasAttribute('ngxdraggable')) {
                  return c;
                }
              }
            }
          }
        }, {
          key: "canMove",
          value: function canMove(source, handle, sibling) {
            if (typeof this._moves === 'boolean') return this._moves;
            if (typeof this._moves === 'function') return this._moves(this.model, source, handle, sibling);
            return true;
          }
        }, {
          key: "moves",
          value: function moves(source, handle, sibling) {
            if (!this.canMove(source, handle, sibling)) return false;
            return this.hasHandle ? this.handles.some(function (h) {
              return handelFor(handle, h);
            }) : true;

            function handelFor(c, p) {
              if (c === p) return true;

              while ((c = c.parentNode) && c !== p) {
                ;
              } // tslint:disable-line


              return !!c;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            this.updateElements();
          }
        }, {
          key: "dropZones",
          get: function get() {
            return this._dropZones || this.ngxDraggable || this._parentDropzones;
          },
          set: function set(val) {
            this._dropZones = val;
          }
        }, {
          key: "hasHandle",
          get: function get() {
            return !!this.handles.length;
          }
        }, {
          key: "element",
          get: function get() {
            return this.el.nativeElement;
          }
        }]);

        return DraggableDirective;
      }();

      DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
        return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DrakeStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DroppableDirective));
      };

      DraggableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DraggableDirective,
        selectors: [["", "ngxDraggable", ""]],
        hostBindings: function DraggableDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("touchmove", function DraggableDirective_touchmove_HostBindingHandler($event) {
              return ctx.onMove($event);
            })("touchstart", function DraggableDirective_touchstart_HostBindingHandler() {
              return ctx.onDown();
            })("touchend", function DraggableDirective_touchend_HostBindingHandler() {
              return ctx.onUp();
            });
          }
        },
        inputs: {
          _moves: ["moves", "_moves"],
          dropZones: "dropZones",
          ngxDraggable: "ngxDraggable",
          model: "model"
        },
        outputs: {
          drag: "drag"
        }
      });

      DraggableDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: DrakeStoreService
        }, {
          type: DroppableDirective
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], DraggableDirective.prototype, "ngxDraggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DraggableDirective.prototype, "model", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], DraggableDirective.prototype, "dropZones", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('moves'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DraggableDirective.prototype, "_moves", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], DraggableDirective.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchmove', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Event]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DraggableDirective.prototype, "onMove", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchstart'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DraggableDirective.prototype, "onDown", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], DraggableDirective.prototype, "onUp", null);
      DraggableDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], DrakeStoreService, DroppableDirective])], DraggableDirective);
      /**
       * Adds properties and events to drag handle elements
       *
       * @export
       */

      var DragHandleDirective = function DragHandleDirective() {
        _classCallCheck(this, DragHandleDirective);
      };

      DragHandleDirective.ɵfac = function DragHandleDirective_Factory(t) {
        return new (t || DragHandleDirective)();
      };

      DragHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DragHandleDirective,
        selectors: [["", "ngxDragHandle", ""]]
      });
      var i$1 = 0;

      function getNextId$1() {
        return i$1++;
      }
      /**
       * Component that allows nested ngxDroppable and ngxDraggables
       *
       * @export
       */


      var ContainerComponent = /*#__PURE__*/function () {
        function ContainerComponent() {
          _classCallCheck(this, ContainerComponent);

          this.copy = false;
          this.removeOnSpill = false;
          this.dropZone = "@@DefaultDropZone-".concat(getNextId$1(), "@@");
          this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.over = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.out = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(ContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._defaultZones = [this.dropZone];
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this5 = this;

            this.droppable.drag.subscribe(function (v) {
              return _this5.drag.emit(v);
            });
            this.droppable.drop.subscribe(function (v) {
              return _this5.drop.emit(v);
            });
            this.droppable.over.subscribe(function (v) {
              return _this5.over.emit(v);
            });
            this.droppable.out.subscribe(function (v) {
              return _this5.out.emit(v);
            });
            this.droppable.remove.subscribe(function (v) {
              return _this5.remove.emit(v);
            });
            this.droppable.cancel.subscribe(function (v) {
              return _this5.cancel.emit(v);
            });
          }
        }, {
          key: "dropZones",
          get: function get() {
            return this._dropZones || this._defaultZones;
          },
          set: function set(val) {
            this._dropZones = val;
          } // @Input() classes: any = {};
          // @Input() dragulaOptions: any;

        }, {
          key: "templateInput",
          set: function set(template) {
            this.template = template;
          }
        }, {
          key: "templateChild",
          set: function set(template) {
            this.template = template;
          }
        }]);

        return ContainerComponent;
      }();

      ContainerComponent.ɵfac = function ContainerComponent_Factory(t) {
        return new (t || ContainerComponent)();
      };

      ContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ContainerComponent,
        selectors: [["ngx-dnd-container"]],
        contentQueries: function ContainerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateChild = _t.first);
          }
        },
        viewQuery: function ContainerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](DroppableDirective, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.droppable = _t.first);
          }
        },
        inputs: {
          copy: "copy",
          removeOnSpill: "removeOnSpill",
          dropZone: "dropZone",
          dropZones: "dropZones",
          templateInput: ["template", "templateInput"],
          model: "model",
          droppableItemClass: "droppableItemClass",
          moves: "moves"
        },
        outputs: {
          drop: "drop",
          drag: "drag",
          over: "over",
          out: "out",
          remove: "remove",
          cancel: "cancel"
        },
        ngContentSelectors: _c1,
        decls: 3,
        vars: 9,
        consts: [["ngxDroppable", "", 1, "ngx-dnd-container", 3, "dropZone", "model", "copy", "ngClass", "removeOnSpill"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngxDraggable", "", 3, "model", "dropZone", "dropZones", "copy", "moves", "removeOnSpill", "droppableItemClass"]],
        template: function ContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ContainerComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ContainerComponent_ng_content_2_Template, 1, 0, "ng-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dropZone", ctx.dropZone)("model", ctx.model)("copy", ctx.copy)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, !(ctx.model == null ? null : ctx.model.length)))("removeOnSpill", ctx.removeOnSpill);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.model);
          }
        },
        directives: function directives() {
          return [DroppableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ItemComponent, DraggableDirective];
        },
        styles: [".ngx-dnd-container{background-color:rgba(255,255,255,.2);border:2px solid red;margin:10px;padding:10px}.ngx-dnd-container.gu-empty{border:2px dotted red}.ngx-dnd-container:nth-child(odd){background-color:rgba(0,0,0,.2)}.ngx-dnd-container .ex-moved{background-color:#e74c3c}.ngx-dnd-container .ex-over{background-color:rgba(255,255,255,.3)}.ngx-dnd-container .handle{padding:0 5px;margin-right:5px;background-color:rgba(0,0,0,.4);cursor:move}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.clearfix::after{content:\" \";display:block;height:0;clear:both}"],
        encapsulation: 2
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "model", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "copy", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "removeOnSpill", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "droppableItemClass", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "dropZone", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ContainerComponent.prototype, "dropZones", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], ContainerComponent.prototype, "moves", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('template'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])], ContainerComponent.prototype, "templateInput", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])], ContainerComponent.prototype, "templateChild", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(DroppableDirective, {
        "static": true
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ContainerComponent.prototype, "droppable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "drop", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "over", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "out", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "remove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], ContainerComponent.prototype, "cancel", void 0);
      /**
       * Component that allows nested ngxDroppable and ngxDraggables
       * Should only be use inside a ngx-dnd-container
       * Outside a ngx-dnd-container use ngxDroppable
       *
       * @export
       */

      var ItemComponent = /*#__PURE__*/function () {
        function ItemComponent(container, draggableDirective) {
          _classCallCheck(this, ItemComponent);

          this.container = container;
          this.draggableDirective = draggableDirective;
          this._copy = false;
          this._removeOnSpill = false;
        }

        _createClass(ItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.data = {
              model: this.model,
              type: this.type,
              dropZone: this.dropZone,
              template: this.container.template
            };
          }
        }, {
          key: "dropZone",
          get: function get() {
            return this._dropZone || this.container.dropZone;
          },
          set: function set(val) {
            this._dropZone = val;
          }
        }, {
          key: "dropZones",
          get: function get() {
            return this._dropZones || this.container.dropZones;
          },
          set: function set(val) {
            this._dropZones = val;
          }
        }, {
          key: "droppableItemClass",
          get: function get() {
            return this._droppableItemClass || this.container.droppableItemClass;
          },
          set: function set(val) {
            this._droppableItemClass = val;
          }
        }, {
          key: "removeOnSpill",
          get: function get() {
            return typeof this._removeOnSpill === 'boolean' ? this._removeOnSpill : this.container.removeOnSpill;
          },
          set: function set(val) {
            this._removeOnSpill = val;
          }
        }, {
          key: "copy",
          get: function get() {
            return typeof this._copy === 'boolean' ? this._copy : this.container.copy;
          },
          set: function set(val) {
            this._copy = val;
          }
        }, {
          key: "hasHandle",
          get: function get() {
            return this.draggableDirective.hasHandle;
          }
        }, {
          key: "moveDisabled",
          get: function get() {
            return !this.draggableDirective.canMove();
          }
        }, {
          key: "classString",
          get: function get() {
            var itemClass = typeof this.droppableItemClass === 'function' ? this.droppableItemClass(this.model) : this.droppableItemClass;
            var classes = ['ngx-dnd-item', itemClass || ''];

            if (this.moveDisabled) {
              classes.push('move-disabled');
            }

            if (this.hasHandle) {
              classes.push('has-handle');
            }

            return classes.join(' ');
          }
        }, {
          key: "type",
          get: function get() {
            if (Array.isArray(this.model)) {
              return 'array';
            }

            return typeof this.model;
          }
        }]);

        return ItemComponent;
      }();

      ItemComponent.ɵfac = function ItemComponent_Factory(t) {
        return new (t || ItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ContainerComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](DraggableDirective));
      };

      ItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ItemComponent,
        selectors: [["ngx-dnd-item"]],
        hostVars: 2,
        hostBindings: function ItemComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.classString);
          }
        },
        inputs: {
          dropZone: "dropZone",
          dropZones: "dropZones",
          droppableItemClass: "droppableItemClass",
          removeOnSpill: "removeOnSpill",
          copy: "copy",
          model: "model"
        },
        decls: 5,
        vars: 4,
        consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "model", "template", "dropZone", "dropZones", "removeOnSpill", "droppableItemClass", "copy"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-dnd-content"], [3, "model", "template", "dropZone", "dropZones", "removeOnSpill", "droppableItemClass", "copy", 4, "ngIf"], ["class", "ngx-dnd-content", 4, "ngIf"]],
        template: function ItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ItemComponent_ng_container_1_Template, 2, 7, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ItemComponent_ng_container_2_Template, 3, 2, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ItemComponent_ng_container_3_Template, 1, 0, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ItemComponent_ng_container_4_Template, 3, 2, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "array");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "object");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "undefined");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], ContainerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"]],
        styles: [".ngx-dnd-box,.ngx-dnd-item{margin:10px;padding:10px;background-color:rgba(0,0,0,.2);transition:opacity .4s ease-in-out;border:1px solid #add8e6;display:block}.ngx-dnd-box.has-handle [ngxDragHandle],.ngx-dnd-box.has-handle [ngxdraghandle],.ngx-dnd-box:not(.has-handle):not(.move-disabled),.ngx-dnd-item.has-handle [ngxDragHandle],.ngx-dnd-item.has-handle [ngxdraghandle],.ngx-dnd-item:not(.has-handle):not(.move-disabled){cursor:move;cursor:grab;cursor:-webkit-grab}.ngx-dnd-box .ngx-dnd-content,.ngx-dnd-item .ngx-dnd-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-dnd-box:hover,.ngx-dnd-item:hover{border:1px solid #00f}.ngx-dnd-box{height:40px;width:40px;line-height:20px;text-align:center;float:left}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2}"],
        encapsulation: 2
      });

      ItemComponent.ctorParameters = function () {
        return [{
          type: ContainerComponent
        }, {
          type: DraggableDirective
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ItemComponent.prototype, "model", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ItemComponent.prototype, "dropZone", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ItemComponent.prototype, "dropZones", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ItemComponent.prototype, "droppableItemClass", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ItemComponent.prototype, "removeOnSpill", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], ItemComponent.prototype, "copy", null);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ItemComponent.prototype, "classString", null);
      ItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ContainerComponent, DraggableDirective])], ItemComponent);
      var NgxDnDModule_1;
      var components = [ContainerComponent, ItemComponent];
      var directives = [DraggableDirective, DroppableDirective, DragHandleDirective];

      var NgxDnDModule = NgxDnDModule_1 = /*#__PURE__*/function () {
        function NgxDnDModule() {
          _classCallCheck(this, NgxDnDModule);
        }

        _createClass(NgxDnDModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: NgxDnDModule_1,
              providers: [DrakeStoreService]
            };
          }
        }]);

        return NgxDnDModule;
      }();

      NgxDnDModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NgxDnDModule
      });
      NgxDnDModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function NgxDnDModule_Factory(t) {
          return new (t || NgxDnDModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrakeStoreService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DroppableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngxDroppable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
          }, {
            type: DrakeStoreService
          }];
        }, {
          copy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removeOnSpill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          direction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          over: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          out: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dropZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          ngxDroppable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DraggableDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngxDraggable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: DrakeStoreService
          }, {
            type: DroppableDirective
          }];
        }, {
          _moves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['moves']
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dropZones: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          // From: https://github.com/bevacqua/dragula/issues/289#issuecomment-277143172
          onMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['touchmove', ['$event']]
          }],
          onDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['touchstart']
          }],
          onUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['touchend']
          }],
          ngxDraggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragHandleDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngxDragHandle]'
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngx-dnd-container',
            template: "<div\n  ngxDroppable\n  [dropZone]=\"dropZone\"\n  [model]=\"model\"\n  [copy]=\"copy\"\n  [ngClass]=\"{ 'gu-empty': !model?.length }\"\n  [removeOnSpill]=\"removeOnSpill\"\n  class='ngx-dnd-container'>\n  <ng-container *ngIf=\"model\">\n    <ng-container *ngFor=\"let item of model\">\n      <ngx-dnd-item\n        ngxDraggable\n        [model]=\"item\"\n        [dropZone]=\"dropZone\"\n        [dropZones]=\"dropZones\"\n        [copy]=\"copy\"\n        [moves]=\"moves\"\n        [removeOnSpill]=\"removeOnSpill\"\n        [droppableItemClass]=\"droppableItemClass\">\n      </ngx-dnd-item>\n    </ng-container>\n  </ng-container>\n  <ng-content *ngIf=\"!model\"></ng-content>\n</div>\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".ngx-dnd-container{background-color:rgba(255,255,255,.2);border:2px solid red;margin:10px;padding:10px}.ngx-dnd-container.gu-empty{border:2px dotted red}.ngx-dnd-container:nth-child(odd){background-color:rgba(0,0,0,.2)}.ngx-dnd-container .ex-moved{background-color:#e74c3c}.ngx-dnd-container .ex-over{background-color:rgba(255,255,255,.3)}.ngx-dnd-container .handle{padding:0 5px;margin-right:5px;background-color:rgba(0,0,0,.4);cursor:move}.no-select{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.clearfix::after{content:\" \";display:block;height:0;clear:both}"]
          }]
        }], function () {
          return [];
        }, {
          copy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removeOnSpill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dropZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          drop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          over: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          out: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          remove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dropZones: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          templateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['template']
          }],
          templateChild: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], {
              "static": true
            }]
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          droppableItemClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          moves: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          droppable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [DroppableDirective, {
              "static": true
            }]
          }]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ngx-dnd-item',
            template: "<ng-container [ngSwitch]=\"type\">\n\n  <ng-container *ngSwitchCase=\"'array'\">\n    <ngx-dnd-container\n      [model]=\"model\"\n      [template]=\"container.template\"\n      [dropZone]=\"dropZone\"\n      [dropZones]=\"dropZones\"\n      [removeOnSpill]=\"removeOnSpill\"\n      [droppableItemClass]=\"droppableItemClass\"\n      [copy]=\"copy\">\n    </ngx-dnd-container>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'object'\">\n    <ng-template\n      *ngIf=\"container.template\"\n      [ngTemplateOutlet]=\"container.template\"\n      [ngTemplateOutletContext]=\"data\">\n    </ng-template>\n    <ng-container *ngIf=\"!container.template\">\n      <div\n        class=\"ngx-dnd-content\">\n        {{model.label}}\n      </div>\n      <ngx-dnd-container\n        *ngIf=\"model.children\"\n        [model]=\"model.children\"\n        [template]=\"container.template\"\n        [dropZone]=\"dropZone\"\n        [dropZones]=\"dropZones\"\n        [removeOnSpill]=\"removeOnSpill\"\n        [droppableItemClass]=\"droppableItemClass\"\n        [copy]=\"copy\">\n      </ngx-dnd-container>\n    </ng-container>\n  </ng-container>\n\n  <ng-container *ngSwitchCase=\"'undefined'\">\n  </ng-container>\n\n  <ng-container *ngSwitchDefault>\n    <ng-template\n      *ngIf=\"container.template\"\n      [ngTemplateOutlet]=\"container.template\"\n      [ngTemplateOutletContext]=\"data\">\n    </ng-template>\n    <div\n      *ngIf=\"!container.template\"\n      class=\"ngx-dnd-content\">\n      {{model}}\n    </div>\n  </ng-container>\n\n</ng-container>\n\n\n\n\n\n\n\n",
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [".ngx-dnd-box,.ngx-dnd-item{margin:10px;padding:10px;background-color:rgba(0,0,0,.2);transition:opacity .4s ease-in-out;border:1px solid #add8e6;display:block}.ngx-dnd-box.has-handle [ngxDragHandle],.ngx-dnd-box.has-handle [ngxdraghandle],.ngx-dnd-box:not(.has-handle):not(.move-disabled),.ngx-dnd-item.has-handle [ngxDragHandle],.ngx-dnd-item.has-handle [ngxdraghandle],.ngx-dnd-item:not(.has-handle):not(.move-disabled){cursor:move;cursor:grab;cursor:-webkit-grab}.ngx-dnd-box .ngx-dnd-content,.ngx-dnd-item .ngx-dnd-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-dnd-box:hover,.ngx-dnd-item:hover{border:1px solid #00f}.ngx-dnd-box{height:40px;width:40px;line-height:20px;text-align:center;float:left}.gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2}"]
          }]
        }], function () {
          return [{
            type: ContainerComponent
          }, {
            type: DraggableDirective
          }];
        }, {
          dropZone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          dropZones: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          droppableItemClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          removeOnSpill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          copy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          classString: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
            args: ['class']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxDnDModule, {
          declarations: function declarations() {
            return [ContainerComponent, ItemComponent, DraggableDirective, DroppableDirective, DragHandleDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [ContainerComponent, ItemComponent, DraggableDirective, DroppableDirective, DragHandleDirective];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxDnDModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [].concat(components, directives),
            exports: [].concat(components, directives)
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=swimlane-ngx-dnd.js.map

      /***/

    },

    /***/
    "8/JR":
    /*!****************************************!*\
      !*** ./node_modules/contra/emitter.js ***!
      \****************************************/

    /*! no static exports found */

    /***/
    function JR(module, exports, __webpack_require__) {
      "use strict";

      var atoa = __webpack_require__(
      /*! atoa */
      "8T9/");

      var debounce = __webpack_require__(
      /*! ./debounce */
      "Ibf7");

      module.exports = function emitter(thing, options) {
        var opts = options || {};
        var evt = {};

        if (thing === undefined) {
          thing = {};
        }

        thing.on = function (type, fn) {
          if (!evt[type]) {
            evt[type] = [fn];
          } else {
            evt[type].push(fn);
          }

          return thing;
        };

        thing.once = function (type, fn) {
          fn._once = true; // thing.off(fn) still works!

          thing.on(type, fn);
          return thing;
        };

        thing.off = function (type, fn) {
          var c = arguments.length;

          if (c === 1) {
            delete evt[type];
          } else if (c === 0) {
            evt = {};
          } else {
            var et = evt[type];

            if (!et) {
              return thing;
            }

            et.splice(et.indexOf(fn), 1);
          }

          return thing;
        };

        thing.emit = function () {
          var args = atoa(arguments);
          return thing.emitterSnapshot(args.shift()).apply(this, args);
        };

        thing.emitterSnapshot = function (type) {
          var et = (evt[type] || []).slice(0);
          return function () {
            var args = atoa(arguments);
            var ctx = this || thing;

            if (type === 'error' && opts["throws"] !== false && !et.length) {
              throw args.length === 1 ? args[0] : args;
            }

            et.forEach(function emitter(listen) {
              if (opts.async) {
                debounce(listen, args, ctx);
              } else {
                listen.apply(ctx, args);
              }

              if (listen._once) {
                thing.off(type, listen);
              }
            });
            return thing;
          };
        };

        return thing;
      };
      /***/

    },

    /***/
    "8T9/":
    /*!***********************************!*\
      !*** ./node_modules/atoa/atoa.js ***!
      \***********************************/

    /*! no static exports found */

    /***/
    function T9(module, exports) {
      module.exports = function atoa(a, n) {
        return Array.prototype.slice.call(a, n);
      };
      /***/

    },

    /***/
    "Gjsa":
    /*!*********************************************!*\
      !*** ./node_modules/ticky/ticky-browser.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function Gjsa(module, exports) {
      var si = typeof setImmediate === 'function',
          tick;

      if (si) {
        tick = function tick(fn) {
          setImmediate(fn);
        };
      } else {
        tick = function tick(fn) {
          setTimeout(fn, 0);
        };
      }

      module.exports = tick;
      /***/
    },

    /***/
    "Hdb2":
    /*!***************************************************!*\
      !*** ./node_modules/@swimlane/dragula/dragula.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function Hdb2(module, exports, __webpack_require__) {
      "use strict";

      var emitter = __webpack_require__(
      /*! contra/emitter */
      "8/JR");

      var crossvent = __webpack_require__(
      /*! crossvent */
      "PzH3");

      var classes = __webpack_require__(
      /*! ./classes */
      "tDoN");

      var doc = document;
      var documentElement = doc.documentElement;

      function dragula(initialContainers, options) {
        var len = arguments.length;

        if (len === 1 && Array.isArray(initialContainers) === false) {
          options = initialContainers;
          initialContainers = [];
        }

        var _mirror; // mirror image


        var _source; // source container


        var _item; // item being dragged


        var _offsetX; // reference x


        var _offsetY; // reference y


        var _moveX; // reference move x


        var _moveY; // reference move y


        var _initialSibling; // reference sibling when grabbed


        var _currentSibling; // reference sibling now


        var _copy; // item used for copying


        var _renderTimer; // timer for setTimeout renderMirrorImage


        var _lastDropTarget = null; // last container item was over

        var _grabbed; // holds mousedown context until first mousemove


        var o = options || {};

        if (o.moves === void 0) {
          o.moves = always;
        }

        if (o.accepts === void 0) {
          o.accepts = always;
        }

        if (o.invalid === void 0) {
          o.invalid = invalidTarget;
        }

        if (o.containers === void 0) {
          o.containers = initialContainers || [];
        }

        if (o.isContainer === void 0) {
          o.isContainer = never;
        }

        if (o.copy === void 0) {
          o.copy = false;
        }

        if (o.copySortSource === void 0) {
          o.copySortSource = false;
        }

        if (o.revertOnSpill === void 0) {
          o.revertOnSpill = false;
        }

        if (o.removeOnSpill === void 0) {
          o.removeOnSpill = false;
        }

        if (o.direction === void 0) {
          o.direction = 'vertical';
        }

        if (o.ignoreInputTextSelection === void 0) {
          o.ignoreInputTextSelection = true;
        }

        if (o.mirrorContainer === void 0) {
          o.mirrorContainer = doc.body;
        }

        var drake = emitter({
          containers: o.containers,
          start: manualStart,
          end: end,
          cancel: cancel,
          remove: remove,
          destroy: destroy,
          canMove: canMove,
          dragging: false
        });

        if (o.removeOnSpill === true) {
          drake.on('over', spillOver).on('out', spillOut);
        }

        events();
        return drake;

        function isContainer(el) {
          return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
        }

        function events(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousedown', grab);
          touchy(documentElement, op, 'mouseup', release);
        }

        function eventualMovements(remove) {
          var op = remove ? 'remove' : 'add';
          touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
        }

        function movements(remove) {
          var op = remove ? 'remove' : 'add';
          crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8

          crossvent[op](documentElement, 'click', preventGrabbed);
        }

        function destroy() {
          events(true);
          release({});
        }

        function preventGrabbed(e) {
          if (_grabbed) {
            e.preventDefault();
          }
        }

        function grab(e) {
          _moveX = e.clientX;
          _moveY = e.clientY;
          var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;

          if (ignore) {
            return; // we only care about honest-to-god left clicks and touch events
          }

          var item = e.target;
          var context = canStart(item);

          if (!context) {
            return;
          }

          _grabbed = context;
          eventualMovements();

          if (e.type === 'mousedown') {
            if (isInput(item)) {
              // see also: https://github.com/bevacqua/dragula/issues/208
              item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
            } else {
              e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
            }
          }
        }

        function startBecauseMouseMoved(e) {
          if (!_grabbed) {
            return;
          }

          if (whichMouseButton(e) === 0) {
            release({});
            return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
          } // truthy check fixes #239, equality fixes #207


          if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
            return;
          }

          if (o.ignoreInputTextSelection) {
            var clientX = getCoord('clientX', e);
            var clientY = getCoord('clientY', e);
            var elementBehindCursor = doc.elementFromPoint(clientX, clientY);

            if (isInput(elementBehindCursor)) {
              return;
            }
          }

          var grabbed = _grabbed; // call to end() unsets _grabbed

          eventualMovements(true);
          movements();
          end();
          start(grabbed);
          var offset = getOffset(_item);
          _offsetX = getCoord('pageX', e) - offset.left;
          _offsetY = getCoord('pageY', e) - offset.top;
          classes.add(_copy || _item, 'gu-transit');
          renderMirrorImage();
          drag(e);
        }

        function canStart(item) {
          if (drake.dragging && _mirror) {
            return;
          }

          if (isContainer(item)) {
            return; // don't drag container itself
          }

          var handle = item;

          while (getParent(item) && isContainer(getParent(item)) === false) {
            if (o.invalid(item, handle)) {
              return;
            }

            item = getParent(item); // drag target should be a top element

            if (!item) {
              return;
            }
          }

          var source = getParent(item);

          if (!source) {
            return;
          }

          if (o.invalid(item, handle)) {
            return;
          }

          var movable = o.moves(item, source, handle, nextEl(item));

          if (!movable) {
            return;
          }

          return {
            item: item,
            source: source
          };
        }

        function canMove(item) {
          return !!canStart(item);
        }

        function manualStart(item) {
          var context = canStart(item);

          if (context) {
            start(context);
          }
        }

        function start(context) {
          if (isCopy(context.item, context.source)) {
            _copy = context.item.cloneNode(true);
            drake.emit('cloned', _copy, context.item, 'copy');
          }

          _source = context.source;
          _item = context.item;
          _initialSibling = _currentSibling = nextEl(context.item);
          drake.dragging = true;
          drake.emit('drag', _item, _source);
        }

        function invalidTarget() {
          return false;
        }

        function end() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          drop(item, getParent(item));
        }

        function ungrab() {
          _grabbed = false;
          eventualMovements(true);
          movements(true);
        }

        function release(e) {
          ungrab();

          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var clientX = getCoord('clientX', e);
          var clientY = getCoord('clientY', e);
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);

          if (dropTarget && (_copy && o.copySortSource || !_copy || dropTarget !== _source)) {
            drop(item, dropTarget);
          } else if (o.removeOnSpill) {
            remove();
          } else {
            cancel();
          }
        }

        function drop(item, target) {
          var parent = getParent(item);

          if (_copy && o.copySortSource && target === _source) {
            parent.removeChild(_item);
          }

          if (isInitialPlacement(target) && item.parent === target) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, target, _source, _currentSibling);
          }

          cleanup();
        }

        function remove() {
          if (!drake.dragging) {
            return;
          }

          var item = _copy || _item;
          var parent = getParent(item);

          if (parent) {
            parent.removeChild(item);
          }

          drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
          cleanup();
        }

        function cancel(revert) {
          if (!drake.dragging) {
            return;
          }

          var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
          var item = _copy || _item;
          var parent = getParent(item);
          var initial = isInitialPlacement(parent);

          if (initial === false && reverts) {
            if (_copy) {
              if (parent) {
                parent.removeChild(_copy);
              }
            } else {
              _source.insertBefore(item, _initialSibling);
            }
          }

          if (initial || reverts) {
            drake.emit('cancel', item, _source, _source);
          } else {
            drake.emit('drop', item, parent, _source, _currentSibling);
          }

          cleanup();
        }

        function cleanup() {
          var item = _copy || _item;
          ungrab();
          removeMirrorImage();

          if (item) {
            classes.rm(item, 'gu-transit');
          }

          if (_renderTimer) {
            clearTimeout(_renderTimer);
          }

          drake.dragging = false;

          if (_lastDropTarget) {
            drake.emit('out', item, _lastDropTarget, _source);
          }

          drake.emit('dragend', item);
          _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
        }

        function isInitialPlacement(target, s) {
          var sibling;

          if (s !== void 0) {
            sibling = s;
          } else if (_mirror) {
            sibling = _currentSibling;
          } else {
            sibling = nextEl(_copy || _item);
          }

          return target === _source && sibling === _initialSibling;
        }

        function findDropTarget(elementBehindCursor, clientX, clientY) {
          var target = elementBehindCursor;

          while (target && !accepted()) {
            target = getParent(target);
          }

          return target;

          function accepted() {
            var droppable = isContainer(target);

            if (droppable === false) {
              return false;
            }

            var immediate = getImmediateChild(target, elementBehindCursor);
            var reference = getReference(target, immediate, clientX, clientY);
            var initial = isInitialPlacement(target, reference);

            if (initial) {
              return true; // should always be able to drop it right back where it was
            }

            return o.accepts(_item, target, _source, reference);
          }
        }

        function drag(e) {
          if (!_mirror) {
            return;
          }

          e.preventDefault();
          var clientX = getCoord('clientX', e);
          var clientY = getCoord('clientY', e);
          var x = clientX - _offsetX;
          var y = clientY - _offsetY;
          _mirror.style.left = x + 'px';
          _mirror.style.top = y + 'px';
          var item = _copy || _item;
          var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
          var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
          var changed = dropTarget !== null && dropTarget !== _lastDropTarget;

          if (changed || dropTarget === null) {
            out();
            _lastDropTarget = dropTarget;
            over();
          }

          var parent = getParent(item);

          if (dropTarget === _source && _copy && !o.copySortSource) {
            if (parent) {
              parent.removeChild(item);
            }

            return;
          }

          var reference;
          var immediate = getImmediateChild(dropTarget, elementBehindCursor);

          if (immediate !== null) {
            reference = getReference(dropTarget, immediate, clientX, clientY);
          } else if (o.revertOnSpill === true && !_copy) {
            reference = _initialSibling;
            dropTarget = _source;
          } else {
            if (_copy && parent) {
              parent.removeChild(item);
            }

            return;
          }

          if (reference === null && changed || reference !== item && reference !== nextEl(item)) {
            _currentSibling = reference;
            dropTarget.insertBefore(item, reference);
            drake.emit('shadow', item, dropTarget, _source);
          }

          function moved(type) {
            drake.emit(type, item, _lastDropTarget, _source);
          }

          function over() {
            if (changed) {
              moved('over');
            }
          }

          function out() {
            if (_lastDropTarget) {
              moved('out');
            }
          }
        }

        function spillOver(el) {
          classes.rm(el, 'gu-hide');
        }

        function spillOut(el) {
          if (drake.dragging) {
            classes.add(el, 'gu-hide');
          }
        }

        function renderMirrorImage() {
          if (_mirror) {
            return;
          }

          var rect = _item.getBoundingClientRect();

          _mirror = _item.cloneNode(true);
          _mirror.style.width = getRectWidth(rect) + 'px';
          _mirror.style.height = getRectHeight(rect) + 'px';
          classes.rm(_mirror, 'gu-transit');
          classes.add(_mirror, 'gu-mirror');
          o.mirrorContainer.appendChild(_mirror);
          touchy(documentElement, 'add', 'mousemove', drag);
          classes.add(o.mirrorContainer, 'gu-unselectable');
          drake.emit('cloned', _mirror, _item, 'mirror');
        }

        function removeMirrorImage() {
          if (_mirror) {
            classes.rm(o.mirrorContainer, 'gu-unselectable');
            touchy(documentElement, 'remove', 'mousemove', drag);
            getParent(_mirror).removeChild(_mirror);
            _mirror = null;
          }
        }

        function getImmediateChild(dropTarget, target) {
          var immediate = target;

          while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
            immediate = getParent(immediate);
          }

          if (immediate === documentElement) {
            return null;
          }

          return immediate;
        }

        function getReference(dropTarget, target, x, y) {
          var direction = typeof o.direction === 'function' ? o.direction(_item, dropTarget, _source) : o.direction;
          var horizontal = direction === 'horizontal';
          var mixed = direction === 'mixed';
          return target === dropTarget || mixed ? outside() : inside();

          function outside() {
            // slower, but able to figure out any position
            var len = dropTarget.children.length;
            var i;
            var el;
            var rect;

            for (i = 0; i < len; i++) {
              el = dropTarget.children[i];
              rect = el.getBoundingClientRect();

              if (horizontal && rect.left + rect.width / 2 > x) {
                return el;
              }

              if (!mixed && !horizontal && rect.top + rect.height / 2 > y) {
                return el;
              }

              if (mixed && rect.left + rect.width > x && rect.top + rect.height > y) {
                return el;
              }
            }

            return null;
          }

          function inside() {
            // faster, but only available if dropped inside a child element
            var rect = target.getBoundingClientRect();

            if (horizontal) {
              return resolve(x > rect.left + getRectWidth(rect) / 2);
            }

            return resolve(y > rect.top + getRectHeight(rect) / 2);
          }

          function resolve(after) {
            return after ? nextEl(target) : target;
          }
        }

        function isCopy(item, container) {
          return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
        }
      }

      function touchy(el, op, type, fn) {
        var touch = {
          mouseup: 'touchend',
          mousedown: 'touchstart',
          mousemove: 'touchmove'
        };
        var pointers = {
          mouseup: 'pointerup',
          mousedown: 'pointerdown',
          mousemove: 'pointermove'
        };
        var microsoft = {
          mouseup: 'MSPointerUp',
          mousedown: 'MSPointerDown',
          mousemove: 'MSPointerMove'
        };

        if (global.navigator.pointerEnabled) {
          crossvent[op](el, pointers[type], fn);
        } else if (global.navigator.msPointerEnabled) {
          crossvent[op](el, microsoft[type], fn);
        } else {
          crossvent[op](el, touch[type], fn);
          crossvent[op](el, type, fn);
        }
      }

      function whichMouseButton(e) {
        if (e.touches !== void 0) {
          return e.touches.length;
        }

        if (e.which !== void 0 && e.which !== 0) {
          return e.which;
        } // see https://github.com/bevacqua/dragula/issues/261


        if (e.buttons !== void 0) {
          return e.buttons;
        }

        var button = e.button;

        if (button !== void 0) {
          // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
          return button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
      }

      function getOffset(el) {
        var rect = el.getBoundingClientRect();
        return {
          left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
          top: rect.top + getScroll('scrollTop', 'pageYOffset')
        };
      }

      function getScroll(scrollProp, offsetProp) {
        if (typeof global[offsetProp] !== 'undefined') {
          return global[offsetProp];
        }

        if (documentElement.clientHeight) {
          return documentElement[scrollProp];
        }

        return doc.body[scrollProp];
      }

      function getElementBehindPoint(point, x, y) {
        var p = point || {};
        var state = p.className;
        var el;
        p.className += ' gu-hide';
        el = doc.elementFromPoint(x, y);
        p.className = state;
        return el;
      }

      function never() {
        return false;
      }

      function always() {
        return true;
      }

      function getRectWidth(rect) {
        return rect.width || rect.right - rect.left;
      }

      function getRectHeight(rect) {
        return rect.height || rect.bottom - rect.top;
      }

      function getParent(el) {
        return el.parentNode === doc ? null : el.parentNode;
      }

      function isInput(el) {
        return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el);
      }

      function isEditable(el) {
        if (!el) {
          return false;
        } // no parents were editable


        if (el.contentEditable === 'false') {
          return false;
        } // stop the lookup


        if (el.contentEditable === 'true') {
          return true;
        } // found a contentEditable element in the chain


        return isEditable(getParent(el)); // contentEditable is set to 'inherit'
      }

      function nextEl(el) {
        return el.nextElementSibling || manually();

        function manually() {
          var sibling = el;

          do {
            sibling = sibling.nextSibling;
          } while (sibling && sibling.nodeType !== 1);

          return sibling;
        }
      }

      function getEventHost(e) {
        // on touchend event, we have to use `e.changedTouches`
        // see http://stackoverflow.com/questions/7192563/touchend-event-properties
        // see https://github.com/bevacqua/dragula/issues/34
        if (e.targetTouches && e.targetTouches.length) {
          return e.targetTouches[0];
        }

        if (e.changedTouches && e.changedTouches.length) {
          return e.changedTouches[0];
        }

        return e;
      }

      function getCoord(coord, e) {
        var host = getEventHost(e);
        var missMap = {
          pageX: 'clientX',
          // IE8
          pageY: 'clientY' // IE8

        };

        if (coord in missMap && !(coord in host) && missMap[coord] in host) {
          coord = missMap[coord];
        }

        return host[coord];
      }

      module.exports = dragula;
      /***/
    },

    /***/
    "Ibf7":
    /*!*****************************************!*\
      !*** ./node_modules/contra/debounce.js ***!
      \*****************************************/

    /*! no static exports found */

    /***/
    function Ibf7(module, exports, __webpack_require__) {
      "use strict";

      var ticky = __webpack_require__(
      /*! ticky */
      "Gjsa");

      module.exports = function debounce(fn, args, ctx) {
        if (!fn) {
          return;
        }

        ticky(function run() {
          fn.apply(ctx || null, args || []);
        });
      };
      /***/

    },

    /***/
    "PzH3":
    /*!*************************************************!*\
      !*** ./node_modules/crossvent/src/crossvent.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function PzH3(module, exports, __webpack_require__) {
      "use strict";

      var customEvent = __webpack_require__(
      /*! custom-event */
      "bBst");

      var eventmap = __webpack_require__(
      /*! ./eventmap */
      "Ys8N");

      var doc = global.document;
      var addEvent = addEventEasy;
      var removeEvent = removeEventEasy;
      var hardCache = [];

      if (!global.addEventListener) {
        addEvent = addEventHard;
        removeEvent = removeEventHard;
      }

      module.exports = {
        add: addEvent,
        remove: removeEvent,
        fabricate: fabricateEvent
      };

      function addEventEasy(el, type, fn, capturing) {
        return el.addEventListener(type, fn, capturing);
      }

      function addEventHard(el, type, fn) {
        return el.attachEvent('on' + type, wrap(el, type, fn));
      }

      function removeEventEasy(el, type, fn, capturing) {
        return el.removeEventListener(type, fn, capturing);
      }

      function removeEventHard(el, type, fn) {
        var listener = unwrap(el, type, fn);

        if (listener) {
          return el.detachEvent('on' + type, listener);
        }
      }

      function fabricateEvent(el, type, model) {
        var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();

        if (el.dispatchEvent) {
          el.dispatchEvent(e);
        } else {
          el.fireEvent('on' + type, e);
        }

        function makeClassicEvent() {
          var e;

          if (doc.createEvent) {
            e = doc.createEvent('Event');
            e.initEvent(type, true, true);
          } else if (doc.createEventObject) {
            e = doc.createEventObject();
          }

          return e;
        }

        function makeCustomEvent() {
          return new customEvent(type, {
            detail: model
          });
        }
      }

      function wrapperFactory(el, type, fn) {
        return function wrapper(originalEvent) {
          var e = originalEvent || global.event;
          e.target = e.target || e.srcElement;

          e.preventDefault = e.preventDefault || function preventDefault() {
            e.returnValue = false;
          };

          e.stopPropagation = e.stopPropagation || function stopPropagation() {
            e.cancelBubble = true;
          };

          e.which = e.which || e.keyCode;
          fn.call(el, e);
        };
      }

      function wrap(el, type, fn) {
        var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
        hardCache.push({
          wrapper: wrapper,
          element: el,
          type: type,
          fn: fn
        });
        return wrapper;
      }

      function unwrap(el, type, fn) {
        var i = find(el, type, fn);

        if (i) {
          var wrapper = hardCache[i].wrapper;
          hardCache.splice(i, 1); // free up a tad of memory

          return wrapper;
        }
      }

      function find(el, type, fn) {
        var i, item;

        for (i = 0; i < hardCache.length; i++) {
          item = hardCache[i];

          if (item.element === el && item.type === type && item.fn === fn) {
            return i;
          }
        }
      }
      /***/

    },

    /***/
    "Ys8N":
    /*!************************************************!*\
      !*** ./node_modules/crossvent/src/eventmap.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function Ys8N(module, exports, __webpack_require__) {
      "use strict";

      var eventmap = [];
      var eventname = '';
      var ron = /^on/;

      for (eventname in global) {
        if (ron.test(eventname)) {
          eventmap.push(eventname.slice(2));
        }
      }

      module.exports = eventmap;
      /***/
    },

    /***/
    "bBst":
    /*!********************************************!*\
      !*** ./node_modules/custom-event/index.js ***!
      \********************************************/

    /*! no static exports found */

    /***/
    function bBst(module, exports) {
      var NativeCustomEvent = global.CustomEvent;

      function useNative() {
        try {
          var p = new NativeCustomEvent('cat', {
            detail: {
              foo: 'bar'
            }
          });
          return 'cat' === p.type && 'bar' === p.detail.foo;
        } catch (e) {}

        return false;
      }
      /**
       * Cross-browser `CustomEvent` constructor.
       *
       * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
       *
       * @public
       */


      module.exports = useNative() ? NativeCustomEvent : // IE >= 9
      'function' === typeof document.createEvent ? function CustomEvent(type, params) {
        var e = document.createEvent('CustomEvent');

        if (params) {
          e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
        } else {
          e.initCustomEvent(type, false, false, void 0);
        }

        return e;
      } : // IE <= 8
      function CustomEvent(type, params) {
        var e = document.createEventObject();
        e.type = type;

        if (params) {
          e.bubbles = Boolean(params.bubbles);
          e.cancelable = Boolean(params.cancelable);
          e.detail = params.detail;
        } else {
          e.bubbles = false;
          e.cancelable = false;
          e.detail = void 0;
        }

        return e;
      };
      /***/
    },

    /***/
    "tDoN":
    /*!***************************************************!*\
      !*** ./node_modules/@swimlane/dragula/classes.js ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function tDoN(module, exports, __webpack_require__) {
      "use strict";

      var cache = {};
      var start = '(?:^|\\s)';
      var end = '(?:\\s|$)';

      function lookupClass(className) {
        var cached = cache[className];

        if (cached) {
          cached.lastIndex = 0;
        } else {
          cache[className] = cached = new RegExp(start + className + end, 'g');
        }

        return cached;
      }

      function addClass(el, className) {
        var current = el.className;

        if (!current.length) {
          el.className = className;
        } else if (!lookupClass(className).test(current)) {
          el.className += ' ' + className;
        }
      }

      function rmClass(el, className) {
        el.className = el.className.replace(lookupClass(className), ' ').trim();
      }

      module.exports = {
        add: addClass,
        rm: rmClass
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~scrumboard-scrumboard-module~todo-todo-module-es5.js.map