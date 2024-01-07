import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Store } from '../service/store.service';
import * as i0 from "@angular/core";
export class PermissionStore extends Store {
    constructor() {
        super({});
    }
    setStore(data) {
        if (data) {
            this.setState(Object.assign(Object.assign({}, this.state), data));
        }
    }
    getStore(type = 'P') {
        if (type === 'P')
            return of(this.state);
        else
            return of(this.state);
    }
    flat(array) {
        let result = [];
        if (array) {
            array.forEach(item => {
                result.push(item);
                if (item && Array.isArray(item)) {
                    result = result.concat(this.flat(item));
                }
            });
        }
        return result;
    }
}
PermissionStore.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PermissionStore.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.17", ngImport: i0, type: PermissionStore, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BpY3MtY29yZS9yYmFjLXBvbGljeWdyb3Vwcy9zcmMvbGliL3BpY3MtcmJhYy1wb2xpY3lncm91cHMvQGNvcmUvcGVybWlzc2lvbnMvcGVybWlzc2lvbi5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUdqRCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxLQUFVO0lBQzdDO1FBQ0UsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFTO1FBQ2hCLElBQUcsSUFBSSxFQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsaUNBQU0sSUFBSSxDQUFDLEtBQUssR0FBSyxJQUFJLEVBQUcsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsT0FBZSxHQUFHO1FBQ3pCLElBQUksSUFBSSxLQUFLLEdBQUc7WUFBRSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ25DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sSUFBSSxDQUFDLEtBQVk7UUFDdkIsSUFBSSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3ZCLElBQUcsS0FBSyxFQUFDO1lBQ1AsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUN6QztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs2R0EzQlUsZUFBZTtpSEFBZixlQUFlOzRGQUFmLGVBQWU7a0JBRDNCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi4vc2VydmljZS9zdG9yZS5zZXJ2aWNlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25TdG9yZSBleHRlbmRzIFN0b3JlPGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoe30pO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RvcmUoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICBpZihkYXRhKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIC4uLmRhdGEgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTdG9yZSh0eXBlOiBzdHJpbmcgPSAnUCcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdQJykgcmV0dXJuIG9mKHRoaXMuc3RhdGUpO1xyXG4gICAgZWxzZSByZXR1cm4gb2YodGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZsYXQoYXJyYXk6IGFueVtdKSB7XHJcbiAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgaWYoYXJyYXkpe1xyXG4gICAgICBhcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpdGVtICYmIEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcclxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5mbGF0KGl0ZW0pKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19