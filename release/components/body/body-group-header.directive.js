var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableGroupHeaderTemplateDirective } from './body-group-header-template.directive';
var DatatableGroupHeaderDirective = /** @class */ (function () {
    function DatatableGroupHeaderDirective() {
        /**
         * Row height is required when virtual scroll is enabled.
         */
        this.rowHeight = 0;
        /**
         * Track toggling of group visibility
         */
        this.toggle = new EventEmitter();
    }
    /**
     * Toggle the expansion of a group
     */
    DatatableGroupHeaderDirective.prototype.toggleExpandGroup = function (group) {
        this.toggle.emit({
            type: 'group',
            value: group
        });
    };
    /**
     * Expand all groups
     */
    DatatableGroupHeaderDirective.prototype.expandAllGroups = function () {
        this.toggle.emit({
            type: 'all',
            value: true
        });
    };
    /**
     * Collapse all groups
     */
    DatatableGroupHeaderDirective.prototype.collapseAllGroups = function () {
        this.toggle.emit({
            type: 'all',
            value: false
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], DatatableGroupHeaderDirective.prototype, "rowHeight", void 0);
    __decorate([
        Input(),
        ContentChild(DatatableGroupHeaderTemplateDirective, {
            read: TemplateRef,
            static: true
        }),
        __metadata("design:type", TemplateRef)
    ], DatatableGroupHeaderDirective.prototype, "template", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], DatatableGroupHeaderDirective.prototype, "toggle", void 0);
    DatatableGroupHeaderDirective = __decorate([
        Directive({ selector: 'ngx-datatable-group-header' })
    ], DatatableGroupHeaderDirective);
    return DatatableGroupHeaderDirective;
}());
export { DatatableGroupHeaderDirective };
//# sourceMappingURL=body-group-header.directive.js.map