import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getAlert() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(AlertType.Warning, message, keepAfterRouteChange);
    }
    alert(type, message, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: type, message: message });
    }
    clear() {
        // clear alerts
        this.subject.next({});
    }
}
AlertService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AlertService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: AlertService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
export var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
export class Alert {
}
export class UserGroupDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRolePageDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserRoleDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class UserDto {
    constructor(data) {
        Object.assign(this, data);
    }
}
export class AccessManagementConfig {
}
AccessManagementConfig.EndPoint = {
    Organization: {
        getOrganizationList: '/org/organization/all',
        getOrganization: '/platform/page-designer/page/organization/{orgId}?returnUserPage=false&excludeNoActiveVersionPages=true'
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBvbGljeWdyb3Vwcy9zcmMvbGliL3BpY3MtcmJhYy1wb2xpY3lncm91cHMvQGNvcmUvc2VydmljZS9hbGVydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLGlCQUFpQixDQUFDO0FBQzFELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyx1QkFBdUIsQ0FBQzs7O0FBRzdCLE1BQU0sT0FBTyxZQUFZO0lBSXZCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBUyxDQUFDO1FBQy9CLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUduQyxrRkFBa0Y7UUFDbEYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDN0Isc0NBQXNDO29CQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2lCQUNuQztxQkFBTTtvQkFDTCx1QkFBdUI7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDZDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ25ELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWUsRUFBRSxvQkFBb0IsR0FBRyxLQUFLO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQWUsRUFBRSxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUNsRSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxLQUFLO1FBQ0gsZUFBZTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7OzBHQS9DVSxZQUFZOzhHQUFaLFlBQVk7NEZBQVosWUFBWTtrQkFEMUIsVUFBVTs7QUFzRFQsTUFBTSxDQUFOLElBQVksU0FLWDtBQUxELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUE7SUFDSiwrQ0FBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLFNBQVMsS0FBVCxTQUFTLFFBS3BCO0FBQ0QsTUFBTSxPQUFPLEtBQUs7Q0FHakI7QUFnQkQsTUFBTSxPQUFPLFlBQVk7SUFJdkIsWUFBWSxJQUE0QjtRQUN0QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sZUFBZTtJQU8xQixZQUFZLElBQStCO1FBQ3pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxXQUFXO0lBVXRCLFlBQVksSUFBMkI7UUFDckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLE9BQU87SUFVbEIsWUFBWSxJQUF1QjtRQUNqQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sc0JBQXNCOztBQUNuQiwrQkFBUSxHQUFHO0lBQ3ZCLFlBQVksRUFBRTtRQUNaLG1CQUFtQixFQUFFLHVCQUF1QjtRQUM1QyxlQUFlLEVBQUUseUdBQXlHO0tBQzNIO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuICBleHBvcnQgY2xhc3MgQWxlcnRTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PEFsZXJ0PigpO1xyXG4gICAgcHJpdmF0ZSBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZXMgb24gcm91dGUgY2hhbmdlIHVubGVzcyAna2VlcEFmdGVyUm91dGVDaGFuZ2UnIGZsYWcgaXMgdHJ1ZVxyXG4gICAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0KSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJSb3V0ZUNoYW5nZSkge1xyXG4gICAgICAgICAgICAvLyBvbmx5IGtlZXAgZm9yIGEgc2luZ2xlIHJvdXRlIGNoYW5nZVxyXG4gICAgICAgICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlc1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGVydCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Y2Nlc3MobWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuYWxlcnQoQWxlcnRUeXBlLlN1Y2Nlc3MsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuRXJyb3IsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmFsZXJ0KEFsZXJ0VHlwZS5JbmZvLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5hbGVydChBbGVydFR5cGUuV2FybmluZywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGFsZXJ0KHR5cGU6IEFsZXJ0VHlwZSwgbWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMua2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZTtcclxuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQoPEFsZXJ0PnsgdHlwZTogdHlwZSwgbWVzc2FnZTogbWVzc2FnZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgLy8gY2xlYXIgYWxlcnRzXHJcbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KDxhbnk+e30pO1xyXG4gICAgfVxyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIER5bmFtaWNPYmplY3Qge1xyXG4gICAgW2tleTogc3RyaW5nXTogYW55O1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGVudW0gQWxlcnRUeXBlIHtcclxuICAgIFN1Y2Nlc3MsXHJcbiAgICBFcnJvcixcclxuICAgIEluZm8sXHJcbiAgICBXYXJuaW5nXHJcbiAgfVxyXG4gIGV4cG9ydCBjbGFzcyBBbGVydCB7XHJcbiAgICB0eXBlITogQWxlcnRUeXBlO1xyXG4gICAgbWVzc2FnZSE6IHN0cmluZztcclxuICB9XHJcbiAgZXhwb3J0IGludGVyZmFjZSBJbnNpZ2h0cyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBzZXJpZXM6IFNlcmllc1tdO1xyXG4gIH1cclxuICBleHBvcnQgaW50ZXJmYWNlIFNlcmllcyB7XHJcbiAgICB2YWx1ZTogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgbW9udGg6IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHZhbHVlOiBudW1iZXI7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgVXNlckdyb3VwRHRvIHtcclxuICAgIGlkPzogbnVtYmVyO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJHcm91cER0bz4pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyUm9sZVBhZ2VEdG8ge1xyXG4gICAgaWQ/OiBudW1iZXI7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAgcm91dGU/OiBzdHJpbmc7XHJcbiAgICBpY29uPzogc3RyaW5nIHwgbnVsbDtcclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG4gICAgaXNtZW51PzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGRhdGE/OiBQYXJ0aWFsPFVzZXJSb2xlUGFnZUR0bz4pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCBjbGFzcyBVc2VyUm9sZUR0byB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcmlvcml0eT86IG51bWJlcjtcclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG4gICAgZGVmYXVsdHBhZ2U/OiBVc2VyUm9sZVBhZ2VEdG87XHJcbiAgICBkZWZhdWx0cGFnZWlkPzogbnVtYmVyO1xyXG4gICAgcGFyZW50aWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgcGFyZW50PzogVXNlclJvbGVEdG8gfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlclJvbGVEdG8+KSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgY2xhc3MgVXNlckR0byB7XHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZyB8IG51bGw7XHJcbiAgICBwcmlvcml0eT86IG51bWJlcjtcclxuICAgIG9yZGVyPzogbnVtYmVyO1xyXG4gICAgZGVmYXVsdHBhZ2U/OiBVc2VyUm9sZVBhZ2VEdG87XHJcbiAgICBkZWZhdWx0cGFnZWlkPzogbnVtYmVyO1xyXG4gICAgcGFyZW50aWQ/OiBudW1iZXIgfCBudWxsO1xyXG4gICAgcGFyZW50PzogVXNlclJvbGVEdG8gfCBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoZGF0YT86IFBhcnRpYWw8VXNlckR0bz4pIHtcclxuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXhwb3J0IGNsYXNzIEFjY2Vzc01hbmFnZW1lbnRDb25maWcge1xyXG4gICAgcHVibGljIHN0YXRpYyBFbmRQb2ludCA9IHtcclxuICAgICAgT3JnYW5pemF0aW9uOiB7XHJcbiAgICAgICAgZ2V0T3JnYW5pemF0aW9uTGlzdDogJy9vcmcvb3JnYW5pemF0aW9uL2FsbCcsXHJcbiAgICAgICAgZ2V0T3JnYW5pemF0aW9uOiAnL3BsYXRmb3JtL3BhZ2UtZGVzaWduZXIvcGFnZS9vcmdhbml6YXRpb24ve29yZ0lkfT9yZXR1cm5Vc2VyUGFnZT1mYWxzZSZleGNsdWRlTm9BY3RpdmVWZXJzaW9uUGFnZXM9dHJ1ZSdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==