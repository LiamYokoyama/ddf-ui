import { __assign, __rest } from "tslib";
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
import React from 'react';
import TextField from '../../../react-component/text-field/index';
import MaskedTextField from '../inputs/masked-text-field';
import { latitudeDMSMask, longitudeDMSMask } from './masks';
import { buildDmsString, parseDmsCoordinate } from '../utils/dms-utils';
var Coordinate = function (props) {
    var placeholder = props.placeholder, value = props.value, onChange = props.onChange, children = props.children, otherProps = __rest(props, ["placeholder", "value", "onChange", "children"]);
    return (React.createElement("div", { className: "flex flex-row items-center w-full flex-nowrap" },
        React.createElement(TextField, __assign({ placeholder: placeholder, value: value, onChange: onChange }, otherProps)),
        children));
};
var MaskedCoordinate = function (props) {
    var placeholder = props.placeholder, mask = props.mask, value = props.value, onChange = props.onChange, children = props.children, otherProps = __rest(props, ["placeholder", "mask", "value", "onChange", "children"]);
    return (React.createElement("div", { className: "flex flex-row items-center w-full flex-nowrap" },
        React.createElement(MaskedTextField, __assign({ placeholder: placeholder, mask: mask, value: value, onChange: onChange }, otherProps)),
        children));
};
var DmsLatitude = function (props) {
    return (React.createElement(MaskedCoordinate, __assign({ placeholder: "dd\u00B0mm'ss.sss\"", mask: latitudeDMSMask, placeholderChar: "_" }, props, { onBlur: function (event) {
            props.onChange(buildDmsString(parseDmsCoordinate(props.value)), event.type);
        } })));
};
var DmsLongitude = function (props) {
    return (React.createElement(MaskedCoordinate, __assign({ placeholder: "ddd\u00B0mm'ss.sss\"", mask: longitudeDMSMask, placeholderChar: "_" }, props, { onBlur: function (event) {
            props.onChange(buildDmsString(parseDmsCoordinate(props.value)), event.type);
        } })));
};
var DdLatitude = function (props) {
    return (React.createElement(Coordinate, __assign({ placeholder: "latitude", type: "number", step: "any", min: -90, max: 90, addon: "\u00B0" }, props)));
};
var DdLongitude = function (props) {
    return (React.createElement(Coordinate, __assign({ placeholder: "longitude", type: "number", step: "any", min: -180, max: 180, addon: "\u00B0" }, props)));
};
var UsngCoordinate = function (props) {
    return (React.createElement("div", { className: "coordinate" },
        React.createElement(TextField, __assign({ label: "Grid" }, props))));
};
export { DmsLatitude, DmsLongitude, DdLatitude, DdLongitude, UsngCoordinate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50L2xvY2F0aW9uLW5ldy9nZW8tY29tcG9uZW50cy9jb29yZGluYXRlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFFekIsT0FBTyxTQUFTLE1BQU0sMkNBQTJDLENBQUE7QUFDakUsT0FBTyxlQUFlLE1BQU0sNkJBQTZCLENBQUE7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUE7QUFFdkUsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFVO0lBQ3BCLElBQUEsV0FBVyxHQUErQyxLQUFLLFlBQXBELEVBQUUsS0FBSyxHQUF3QyxLQUFLLE1BQTdDLEVBQUUsUUFBUSxHQUE4QixLQUFLLFNBQW5DLEVBQUUsUUFBUSxHQUFvQixLQUFLLFNBQXpCLEVBQUssVUFBVSxVQUFLLEtBQUssRUFBakUsZ0RBQXlELENBQUYsQ0FBVTtJQUN2RSxPQUFPLENBQ0wsNkJBQUssU0FBUyxFQUFDLCtDQUErQztRQUM1RCxvQkFBQyxTQUFTLGFBQ1IsV0FBVyxFQUFFLFdBQVcsRUFDeEIsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxJQUNkLFVBQVUsRUFDZDtRQUNELFFBQVEsQ0FDTCxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBVTtJQUMxQixJQUFBLFdBQVcsR0FBcUQsS0FBSyxZQUExRCxFQUFFLElBQUksR0FBK0MsS0FBSyxLQUFwRCxFQUFFLEtBQUssR0FBd0MsS0FBSyxNQUE3QyxFQUFFLFFBQVEsR0FBOEIsS0FBSyxTQUFuQyxFQUFFLFFBQVEsR0FBb0IsS0FBSyxTQUF6QixFQUFLLFVBQVUsVUFBSyxLQUFLLEVBQXZFLHdEQUErRCxDQUFGLENBQVU7SUFDN0UsT0FBTyxDQUNMLDZCQUFLLFNBQVMsRUFBQywrQ0FBK0M7UUFDNUQsb0JBQUMsZUFBZSxhQUNkLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLElBQUksRUFBRSxJQUFJLEVBQ1YsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxJQUNkLFVBQVUsRUFDZDtRQUNELFFBQVEsQ0FDTCxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxVQUFDLEtBQVU7SUFDN0IsT0FBTyxDQUNMLG9CQUFDLGdCQUFnQixhQUNmLFdBQVcsRUFBQyxxQkFBb0IsRUFDaEMsSUFBSSxFQUFFLGVBQWUsRUFDckIsZUFBZSxFQUFDLEdBQUcsSUFDZixLQUFLLElBQ1QsTUFBTSxFQUFFLFVBQUMsS0FBVTtZQUNqQixLQUFLLENBQUMsUUFBUSxDQUNaLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDL0MsS0FBSyxDQUFDLElBQUksQ0FDWCxDQUFBO1FBQ0gsQ0FBQyxJQUNELENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELElBQU0sWUFBWSxHQUFHLFVBQUMsS0FBVTtJQUM5QixPQUFPLENBQ0wsb0JBQUMsZ0JBQWdCLGFBQ2YsV0FBVyxFQUFDLHNCQUFxQixFQUNqQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQ3RCLGVBQWUsRUFBQyxHQUFHLElBQ2YsS0FBSyxJQUNULE1BQU0sRUFBRSxVQUFDLEtBQVU7WUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDWixjQUFjLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQy9DLEtBQUssQ0FBQyxJQUFJLENBQ1gsQ0FBQTtRQUNILENBQUMsSUFDRCxDQUNILENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxJQUFNLFVBQVUsR0FBRyxVQUFDLEtBQVU7SUFDNUIsT0FBTyxDQUNMLG9CQUFDLFVBQVUsYUFDVCxXQUFXLEVBQUMsVUFBVSxFQUN0QixJQUFJLEVBQUMsUUFBUSxFQUNiLElBQUksRUFBQyxLQUFLLEVBQ1YsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUNSLEdBQUcsRUFBRSxFQUFFLEVBQ1AsS0FBSyxFQUFDLFFBQUcsSUFDTCxLQUFLLEVBQ1QsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxLQUFVO0lBQzdCLE9BQU8sQ0FDTCxvQkFBQyxVQUFVLGFBQ1QsV0FBVyxFQUFDLFdBQVcsRUFDdkIsSUFBSSxFQUFDLFFBQVEsRUFDYixJQUFJLEVBQUMsS0FBSyxFQUNWLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFDVCxHQUFHLEVBQUUsR0FBRyxFQUNSLEtBQUssRUFBQyxRQUFHLElBQ0wsS0FBSyxFQUNULENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBVTtJQUNoQyxPQUFPLENBQ0wsNkJBQUssU0FBUyxFQUFDLFlBQVk7UUFDekIsb0JBQUMsU0FBUyxhQUFDLEtBQUssRUFBQyxNQUFNLElBQUssS0FBSyxFQUFJLENBQ2pDLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgQ29kaWNlIEZvdW5kYXRpb25cbiAqXG4gKiBUaGlzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxuICogTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dFxuICogZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLiBBIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogaXMgZGlzdHJpYnV0ZWQgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0gYW5kIGNhbiBiZSBmb3VuZCBhdFxuICogPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLmh0bWw+LlxuICpcbiAqKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICcuLi8uLi8uLi9yZWFjdC1jb21wb25lbnQvdGV4dC1maWVsZC9pbmRleCdcbmltcG9ydCBNYXNrZWRUZXh0RmllbGQgZnJvbSAnLi4vaW5wdXRzL21hc2tlZC10ZXh0LWZpZWxkJ1xuaW1wb3J0IHsgbGF0aXR1ZGVETVNNYXNrLCBsb25naXR1ZGVETVNNYXNrIH0gZnJvbSAnLi9tYXNrcydcbmltcG9ydCB7IGJ1aWxkRG1zU3RyaW5nLCBwYXJzZURtc0Nvb3JkaW5hdGUgfSBmcm9tICcuLi91dGlscy9kbXMtdXRpbHMnXG5cbmNvbnN0IENvb3JkaW5hdGUgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7IHBsYWNlaG9sZGVyLCB2YWx1ZSwgb25DaGFuZ2UsIGNoaWxkcmVuLCAuLi5vdGhlclByb3BzIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgdy1mdWxsIGZsZXgtbm93cmFwXCI+XG4gICAgICA8VGV4dEZpZWxkXG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIHsuLi5vdGhlclByb3BzfVxuICAgICAgLz5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNYXNrZWRDb29yZGluYXRlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgeyBwbGFjZWhvbGRlciwgbWFzaywgdmFsdWUsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHctZnVsbCBmbGV4LW5vd3JhcFwiPlxuICAgICAgPE1hc2tlZFRleHRGaWVsZFxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIG1hc2s9e21hc2t9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAgIC8+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRG1zTGF0aXR1ZGUgPSAocHJvcHM6IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxNYXNrZWRDb29yZGluYXRlXG4gICAgICBwbGFjZWhvbGRlcj1cImRkwrBtbSdzcy5zc3MmcXVvdDtcIlxuICAgICAgbWFzaz17bGF0aXR1ZGVETVNNYXNrfVxuICAgICAgcGxhY2Vob2xkZXJDaGFyPVwiX1wiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBvbkJsdXI9eyhldmVudDogYW55KSA9PiB7XG4gICAgICAgIHByb3BzLm9uQ2hhbmdlKFxuICAgICAgICAgIGJ1aWxkRG1zU3RyaW5nKHBhcnNlRG1zQ29vcmRpbmF0ZShwcm9wcy52YWx1ZSkpLFxuICAgICAgICAgIGV2ZW50LnR5cGVcbiAgICAgICAgKVxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmNvbnN0IERtc0xvbmdpdHVkZSA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPE1hc2tlZENvb3JkaW5hdGVcbiAgICAgIHBsYWNlaG9sZGVyPVwiZGRkwrBtbSdzcy5zc3MmcXVvdDtcIlxuICAgICAgbWFzaz17bG9uZ2l0dWRlRE1TTWFza31cbiAgICAgIHBsYWNlaG9sZGVyQ2hhcj1cIl9cIlxuICAgICAgey4uLnByb3BzfVxuICAgICAgb25CbHVyPXsoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBwcm9wcy5vbkNoYW5nZShcbiAgICAgICAgICBidWlsZERtc1N0cmluZyhwYXJzZURtc0Nvb3JkaW5hdGUocHJvcHMudmFsdWUpKSxcbiAgICAgICAgICBldmVudC50eXBlXG4gICAgICAgIClcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBEZExhdGl0dWRlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q29vcmRpbmF0ZVxuICAgICAgcGxhY2Vob2xkZXI9XCJsYXRpdHVkZVwiXG4gICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgIHN0ZXA9XCJhbnlcIlxuICAgICAgbWluPXstOTB9XG4gICAgICBtYXg9ezkwfVxuICAgICAgYWRkb249XCLCsFwiXG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBEZExvbmdpdHVkZSA9IChwcm9wczogYW55KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENvb3JkaW5hdGVcbiAgICAgIHBsYWNlaG9sZGVyPVwibG9uZ2l0dWRlXCJcbiAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgc3RlcD1cImFueVwiXG4gICAgICBtaW49ey0xODB9XG4gICAgICBtYXg9ezE4MH1cbiAgICAgIGFkZG9uPVwiwrBcIlxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cblxuY29uc3QgVXNuZ0Nvb3JkaW5hdGUgPSAocHJvcHM6IGFueSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29vcmRpbmF0ZVwiPlxuICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIkdyaWRcIiB7Li4ucHJvcHN9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHsgRG1zTGF0aXR1ZGUsIERtc0xvbmdpdHVkZSwgRGRMYXRpdHVkZSwgRGRMb25naXR1ZGUsIFVzbmdDb29yZGluYXRlIH1cbiJdfQ==