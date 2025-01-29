/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
import { expect } from 'chai';
import wrapNum from './wrap-num';
describe('wrap-num', function () {
    it('overflow +1/-1', function () {
        expect(wrapNum(181, -180, 180)).to.equal(-179);
        expect(wrapNum(-181, -180, 180)).to.equal(179);
    });
    it('overflow +/-a lot', function () {
        expect(wrapNum(64.25 + 180 * 7, -180, 180)).to.equal(-180 + 64.25);
        expect(wrapNum(-64.25 - 180 * 7, -180, 180)).to.equal(180 - 64.25);
    });
    it('no overflow mid', function () {
        expect(wrapNum(-179, -180, 180)).to.equal(-179);
        expect(wrapNum(179, -180, 180)).to.equal(179);
        expect(wrapNum(0, -180, 180)).to.equal(0);
        expect(wrapNum(5, -180, 180)).to.equal(5);
        expect(wrapNum(-15, -180, 180)).to.equal(-15);
    });
    it('max should map to min', function () {
        expect(wrapNum(180, -180, 180)).to.equal(-180);
    });
    it('min should remain min', function () {
        expect(wrapNum(-180, -180, 180)).to.equal(-180);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JhcC1udW0uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL3dlYmFwcC9yZWFjdC1jb21wb25lbnQvdXRpbHMvd3JhcC1udW0vd3JhcC1udW0uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBRUosT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLE1BQU0sQ0FBQTtBQUM3QixPQUFPLE9BQU8sTUFBTSxZQUFZLENBQUE7QUFFaEMsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUNuQixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFDbkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDaEQsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsbUJBQW1CLEVBQUU7UUFDdEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFDbEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUE7SUFDcEUsQ0FBQyxDQUFDLENBQUE7SUFDRixFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQy9DLENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2hELENBQUMsQ0FBQyxDQUFBO0lBQ0YsRUFBRSxDQUFDLHVCQUF1QixFQUFFO1FBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDakQsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuXG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tICdjaGFpJ1xuaW1wb3J0IHdyYXBOdW0gZnJvbSAnLi93cmFwLW51bSdcblxuZGVzY3JpYmUoJ3dyYXAtbnVtJywgKCkgPT4ge1xuICBpdCgnb3ZlcmZsb3cgKzEvLTEnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHdyYXBOdW0oMTgxLCAtMTgwLCAxODApKS50by5lcXVhbCgtMTc5KVxuICAgIGV4cGVjdCh3cmFwTnVtKC0xODEsIC0xODAsIDE4MCkpLnRvLmVxdWFsKDE3OSlcbiAgfSlcbiAgaXQoJ292ZXJmbG93ICsvLWEgbG90JywgKCkgPT4ge1xuICAgIGV4cGVjdCh3cmFwTnVtKDY0LjI1ICsgMTgwICogNywgLTE4MCwgMTgwKSkudG8uZXF1YWwoLTE4MCArIDY0LjI1KVxuICAgIGV4cGVjdCh3cmFwTnVtKC02NC4yNSAtIDE4MCAqIDcsIC0xODAsIDE4MCkpLnRvLmVxdWFsKDE4MCAtIDY0LjI1KVxuICB9KVxuICBpdCgnbm8gb3ZlcmZsb3cgbWlkJywgKCkgPT4ge1xuICAgIGV4cGVjdCh3cmFwTnVtKC0xNzksIC0xODAsIDE4MCkpLnRvLmVxdWFsKC0xNzkpXG4gICAgZXhwZWN0KHdyYXBOdW0oMTc5LCAtMTgwLCAxODApKS50by5lcXVhbCgxNzkpXG4gICAgZXhwZWN0KHdyYXBOdW0oMCwgLTE4MCwgMTgwKSkudG8uZXF1YWwoMClcbiAgICBleHBlY3Qod3JhcE51bSg1LCAtMTgwLCAxODApKS50by5lcXVhbCg1KVxuICAgIGV4cGVjdCh3cmFwTnVtKC0xNSwgLTE4MCwgMTgwKSkudG8uZXF1YWwoLTE1KVxuICB9KVxuICBpdCgnbWF4IHNob3VsZCBtYXAgdG8gbWluJywgKCkgPT4ge1xuICAgIGV4cGVjdCh3cmFwTnVtKDE4MCwgLTE4MCwgMTgwKSkudG8uZXF1YWwoLTE4MClcbiAgfSlcbiAgaXQoJ21pbiBzaG91bGQgcmVtYWluIG1pbicsICgpID0+IHtcbiAgICBleHBlY3Qod3JhcE51bSgtMTgwLCAtMTgwLCAxODApKS50by5lcXVhbCgtMTgwKVxuICB9KVxufSlcbiJdfQ==