import { __makeTemplateObject } from "tslib";
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
import * as React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { FormattedMessage } from 'react-intl';
var Root = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  width: 100%;\n  height: auto;\n  font-size: ", ";\n  text-align: center;\n  padding: ", " 0px;\n"], ["\n  display: block;\n  width: 100%;\n  height: auto;\n  font-size: ", ";\n  text-align: center;\n  padding: ", " 0px;\n"])), function (props) { return props.theme.largeFontSize; }, function (props) { return props.theme.largeSpacing; });
export default hot(module)(function (_a) {
    var amountDown = _a.amountDown;
    return (React.createElement(Root, null, amountDown == 0 ? (React.createElement(FormattedMessage, { id: "sources.available", defaultMessage: "All sources are currently up" })) : (React.createElement(FormattedMessage, { id: "sources.unavailable", defaultMessage: "{amountDown} {amountDown, plural, one {source is} other {sources are}} currently down", values: { amountDown: amountDown } }))));
});
var templateObject_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlcy1zdW1tYXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9zb3VyY2VzLXN1bW1hcnkvc291cmNlcy1zdW1tYXJ5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sTUFBTSxNQUFNLG1CQUFtQixDQUFBO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxZQUFZLENBQUE7QUFFN0MsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsNExBQUEscUVBSVIsRUFBb0MsdUNBRXRDLEVBQW1DLFNBQy9DLEtBSGMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBekIsQ0FBeUIsRUFFdEMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBeEIsQ0FBd0IsQ0FDL0MsQ0FBQTtBQU1ELGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQUMsRUFBcUI7UUFBbkIsVUFBVSxnQkFBQTtJQUN0QyxPQUFPLENBQ0wsb0JBQUMsSUFBSSxRQUNGLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pCLG9CQUFDLGdCQUFnQixJQUNmLEVBQUUsRUFBQyxtQkFBbUIsRUFDdEIsY0FBYyxFQUFDLDhCQUE4QixHQUM3QyxDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsZ0JBQWdCLElBQ2YsRUFBRSxFQUFDLHFCQUFxQixFQUN4QixjQUFjLEVBQUMsdUZBQXVGLEVBQ3RHLE1BQU0sRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLEdBQ3RCLENBQ0gsQ0FDSSxDQUNSLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJ1xuXG5jb25zdCBSb290ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmxhcmdlRm9udFNpemV9O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5sYXJnZVNwYWNpbmd9IDBweDtcbmBcblxudHlwZSBQcm9wcyA9IHtcbiAgYW1vdW50RG93bjogbnVtYmVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKCh7IGFtb3VudERvd24gfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um9vdD5cbiAgICAgIHthbW91bnREb3duID09IDAgPyAoXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgaWQ9XCJzb3VyY2VzLmF2YWlsYWJsZVwiXG4gICAgICAgICAgZGVmYXVsdE1lc3NhZ2U9XCJBbGwgc291cmNlcyBhcmUgY3VycmVudGx5IHVwXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxGb3JtYXR0ZWRNZXNzYWdlXG4gICAgICAgICAgaWQ9XCJzb3VyY2VzLnVuYXZhaWxhYmxlXCJcbiAgICAgICAgICBkZWZhdWx0TWVzc2FnZT1cInthbW91bnREb3dufSB7YW1vdW50RG93biwgcGx1cmFsLCBvbmUge3NvdXJjZSBpc30gb3RoZXIge3NvdXJjZXMgYXJlfX0gY3VycmVudGx5IGRvd25cIlxuICAgICAgICAgIHZhbHVlcz17eyBhbW91bnREb3duIH19XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvUm9vdD5cbiAgKVxufSlcbiJdfQ==