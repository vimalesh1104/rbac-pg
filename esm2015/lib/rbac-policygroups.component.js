import { Component, Input } from '@angular/core';
import { RBACINFO } from './pics-rbac-policygroups/@core/urls/rbac-url.config';
import * as i0 from "@angular/core";
import * as i1 from "./pics-rbac-policygroups/@core/permissions/permission.store";
import * as i2 from "./pics-rbac-policygroups/@core/service/data-store.service";
import * as i3 from "./pics-rbac-policygroups/policygroups/policygroups.component";
export class RbacPolicygroupsComponent {
    constructor(permissionStore, _storeservice) {
        this.permissionStore = permissionStore;
        this._storeservice = _storeservice;
        this.RBACORG = new RBACINFO();
    }
    ngOnInit() {
        this.groupEvent.subscribe(val => {
            this.RBACORG = val.RBACORG;
            this.PERMISSION = val.PERMISSION;
            this._storeservice.setData('RBACORG', this.RBACORG);
            this.permissionStore.setStore(this.PERMISSION);
            this._storeservice.setData('HTTPSERVICE', val.httpService);
        });
    }
}
RbacPolicygroupsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPolicygroupsComponent, deps: [{ token: i1.PermissionStore }, { token: i2.DataStoreService }], target: i0.ɵɵFactoryTarget.Component });
RbacPolicygroupsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.17", type: RbacPolicygroupsComponent, selector: "rbac-policygroups", inputs: { RBACORG: "RBACORG", PERMISSION: "PERMISSION", groupEvent: "groupEvent" }, ngImport: i0, template: `
     <policygroups></policygroups>
  `, isInline: true, components: [{ type: i3.PolicygroupsComponent, selector: "policygroups" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: RbacPolicygroupsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'rbac-policygroups',
                    template: `
     <policygroups></policygroups>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.PermissionStore }, { type: i2.DataStoreService }]; }, propDecorators: { RBACORG: [{
                type: Input
            }], PERMISSION: [{
                type: Input
            }], groupEvent: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmJhYy1wb2xpY3lncm91cHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGljcy1jb3JlL3JiYWMtcG9saWN5Z3JvdXBzL3NyYy9saWIvcmJhYy1wb2xpY3lncm91cHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBSXpELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxxREFBcUQsQ0FBQzs7Ozs7QUFVL0UsTUFBTSxPQUFPLHlCQUF5QjtJQUtwQyxZQUNVLGVBQWdDLEVBQ2hDLGFBQStCO1FBRC9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFOekIsWUFBTyxHQUFjLElBQUksUUFBUSxFQUFFLENBQUM7SUFRcEQsQ0FBQztJQUNELFFBQVE7UUFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzt1SEFsQlUseUJBQXlCOzJHQUF6Qix5QkFBeUIsNklBTjFCOztHQUVUOzRGQUlVLHlCQUF5QjtrQkFSckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUU7O0dBRVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQ1A7aUJBQ0Y7cUlBRWlCLE9BQU87c0JBQXRCLEtBQUs7Z0JBQ1UsVUFBVTtzQkFBekIsS0FBSztnQkFDVSxVQUFVO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGVybWlzc2lvblN0b3JlIH0gZnJvbSAnLi9waWNzLXJiYWMtcG9saWN5Z3JvdXBzL0Bjb3JlL3Blcm1pc3Npb25zL3Blcm1pc3Npb24uc3RvcmUnO1xyXG5pbXBvcnQgeyBEYXRhU3RvcmVTZXJ2aWNlIH0gZnJvbSAnLi9waWNzLXJiYWMtcG9saWN5Z3JvdXBzL0Bjb3JlL3NlcnZpY2UvZGF0YS1zdG9yZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUkJBQ0lORk8gfSBmcm9tICcuL3BpY3MtcmJhYy1wb2xpY3lncm91cHMvQGNvcmUvdXJscy9yYmFjLXVybC5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYmFjLXBvbGljeWdyb3VwcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICA8cG9saWN5Z3JvdXBzPjwvcG9saWN5Z3JvdXBzPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmJhY1BvbGljeWdyb3Vwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgcHVibGljIFJCQUNPUkc/OiBSQkFDSU5GTyA9IG5ldyBSQkFDSU5GTygpO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBQRVJNSVNTSU9OPzogYW55O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBncm91cEV2ZW50ITogT2JzZXJ2YWJsZTxhbnk+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcGVybWlzc2lvblN0b3JlOiBQZXJtaXNzaW9uU3RvcmUsXHJcbiAgICBwcml2YXRlIF9zdG9yZXNlcnZpY2U6IERhdGFTdG9yZVNlcnZpY2VcclxuICApIHtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAgdGhpcy5ncm91cEV2ZW50LnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICB0aGlzLlJCQUNPUkcgPSB2YWwuUkJBQ09SRztcclxuICAgICAgdGhpcy5QRVJNSVNTSU9OID0gdmFsLlBFUk1JU1NJT047XHJcbiAgICAgIHRoaXMuX3N0b3Jlc2VydmljZS5zZXREYXRhKCdSQkFDT1JHJywgdGhpcy5SQkFDT1JHKTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uU3RvcmUuc2V0U3RvcmUodGhpcy5QRVJNSVNTSU9OKTtcclxuICAgICAgdGhpcy5fc3RvcmVzZXJ2aWNlLnNldERhdGEoJ0hUVFBTRVJWSUNFJyx2YWwuaHR0cFNlcnZpY2UpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG59XHJcbiJdfQ==