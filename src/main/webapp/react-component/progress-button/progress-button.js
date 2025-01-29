import { __assign } from "tslib";
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
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
var ProgressButton = function (props) {
    var children = props.children, style = props.style, disabled = props.disabled, loading = props.loading, variant = props.variant, color = props.color, size = props.size, progressVariant = props.progressVariant, onClick = props.onClick, buttonProps = props.buttonProps, linearProgressProps = props.linearProgressProps, circularProgressProps = props.circularProgressProps, className = props.className, dataId = props.dataId;
    var Loading = function () {
        return progressVariant === 'circular' ? (React.createElement(CircularProgress, __assign({ size: 24, className: "absolute" }, circularProgressProps))) : (React.createElement(LinearProgress, __assign({ className: "absolute w-full h-full opacity-25" }, linearProgressProps)));
    };
    return (React.createElement(Button, __assign({ "data-id": dataId, style: style, variant: variant || 'contained', color: color || 'primary', size: size, className: "relative ".concat(className), disabled: loading || disabled, onClick: onClick }, buttonProps),
        children,
        loading && React.createElement(Loading, null)));
};
export default ProgressButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9wcm9ncmVzcy1idXR0b24vcHJvZ3Jlc3MtYnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sY0FFTixNQUFNLDhCQUE4QixDQUFBO0FBQ3JDLE9BQU8sTUFBdUIsTUFBTSxzQkFBc0IsQ0FBQTtBQUMxRCxPQUFPLGdCQUVOLE1BQU0sZ0NBQWdDLENBQUE7QUFtQnZDLElBQU0sY0FBYyxHQUFHLFVBQUMsS0FBWTtJQUVoQyxJQUFBLFFBQVEsR0FjTixLQUFLLFNBZEMsRUFDUixLQUFLLEdBYUgsS0FBSyxNQWJGLEVBQ0wsUUFBUSxHQVlOLEtBQUssU0FaQyxFQUNSLE9BQU8sR0FXTCxLQUFLLFFBWEEsRUFDUCxPQUFPLEdBVUwsS0FBSyxRQVZBLEVBQ1AsS0FBSyxHQVNILEtBQUssTUFURixFQUNMLElBQUksR0FRRixLQUFLLEtBUkgsRUFDSixlQUFlLEdBT2IsS0FBSyxnQkFQUSxFQUNmLE9BQU8sR0FNTCxLQUFLLFFBTkEsRUFDUCxXQUFXLEdBS1QsS0FBSyxZQUxJLEVBQ1gsbUJBQW1CLEdBSWpCLEtBQUssb0JBSlksRUFDbkIscUJBQXFCLEdBR25CLEtBQUssc0JBSGMsRUFDckIsU0FBUyxHQUVQLEtBQUssVUFGRSxFQUNULE1BQU0sR0FDSixLQUFLLE9BREQsQ0FDQztJQUVULElBQU0sT0FBTyxHQUFHO1FBQ2QsT0FBTyxlQUFlLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUN0QyxvQkFBQyxnQkFBZ0IsYUFDZixJQUFJLEVBQUUsRUFBRSxFQUNSLFNBQVMsRUFBQyxVQUFVLElBQ2hCLHFCQUFxQixFQUN6QixDQUNILENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsY0FBYyxhQUNiLFNBQVMsRUFBQyxtQ0FBbUMsSUFDekMsbUJBQW1CLEVBQ3ZCLENBQ0gsQ0FBQTtJQUNILENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDTCxvQkFBQyxNQUFNLHdCQUNJLE1BQU0sRUFDZixLQUFLLEVBQUUsS0FBSyxFQUNaLE9BQU8sRUFBRSxPQUFPLElBQUksV0FBVyxFQUMvQixLQUFLLEVBQUUsS0FBSyxJQUFJLFNBQVMsRUFDekIsSUFBSSxFQUFFLElBQUksRUFDVixTQUFTLEVBQUUsbUJBQVksU0FBUyxDQUFFLEVBQ2xDLFFBQVEsRUFBRSxPQUFPLElBQUksUUFBUSxFQUM3QixPQUFPLEVBQUUsT0FBTyxJQUNaLFdBQVc7UUFFZCxRQUFRO1FBQ1IsT0FBTyxJQUFJLG9CQUFDLE9BQU8sT0FBRyxDQUNoQixDQUNWLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLGNBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MsIHtcbiAgTGluZWFyUHJvZ3Jlc3NQcm9wcyxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5lYXJQcm9ncmVzcydcbmltcG9ydCBCdXR0b24sIHsgQnV0dG9uUHJvcHMgfSBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzLCB7XG4gIENpcmN1bGFyUHJvZ3Jlc3NQcm9wcyxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbC9DaXJjdWxhclByb2dyZXNzJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllc1xuICBkaXNhYmxlZD86IGJvb2xlYW5cbiAgbG9hZGluZz86IGJvb2xlYW5cbiAgdmFyaWFudD86IEJ1dHRvblByb3BzWyd2YXJpYW50J11cbiAgY29sb3I/OiBCdXR0b25Qcm9wc1snY29sb3InXVxuICBzaXplPzogQnV0dG9uUHJvcHNbJ3NpemUnXVxuICBwcm9ncmVzc1ZhcmlhbnQ/OiAnY2lyY3VsYXInIHwgJ2xpbmVhcidcbiAgb25DbGljaz86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PlxuICBidXR0b25Qcm9wcz86IEJ1dHRvblByb3BzXG4gIGxpbmVhclByb2dyZXNzUHJvcHM/OiBMaW5lYXJQcm9ncmVzc1Byb3BzXG4gIGNpcmN1bGFyUHJvZ3Jlc3NQcm9wcz86IENpcmN1bGFyUHJvZ3Jlc3NQcm9wc1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgZGF0YUlkPzogc3RyaW5nXG59XG5cbmNvbnN0IFByb2dyZXNzQnV0dG9uID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgc3R5bGUsXG4gICAgZGlzYWJsZWQsXG4gICAgbG9hZGluZyxcbiAgICB2YXJpYW50LFxuICAgIGNvbG9yLFxuICAgIHNpemUsXG4gICAgcHJvZ3Jlc3NWYXJpYW50LFxuICAgIG9uQ2xpY2ssXG4gICAgYnV0dG9uUHJvcHMsXG4gICAgbGluZWFyUHJvZ3Jlc3NQcm9wcyxcbiAgICBjaXJjdWxhclByb2dyZXNzUHJvcHMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGRhdGFJZCxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvZ3Jlc3NWYXJpYW50ID09PSAnY2lyY3VsYXInID8gKFxuICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlXCJcbiAgICAgICAgey4uLmNpcmN1bGFyUHJvZ3Jlc3NQcm9wc31cbiAgICAgIC8+XG4gICAgKSA6IChcbiAgICAgIDxMaW5lYXJQcm9ncmVzc1xuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIG9wYWNpdHktMjVcIlxuICAgICAgICB7Li4ubGluZWFyUHJvZ3Jlc3NQcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uXG4gICAgICBkYXRhLWlkPXtkYXRhSWR9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB2YXJpYW50PXt2YXJpYW50IHx8ICdjb250YWluZWQnfVxuICAgICAgY29sb3I9e2NvbG9yIHx8ICdwcmltYXJ5J31cbiAgICAgIHNpemU9e3NpemV9XG4gICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSAke2NsYXNzTmFtZX1gfVxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmcgfHwgZGlzYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgey4uLmJ1dHRvblByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkaW5nIC8+fVxuICAgIDwvQnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQnV0dG9uXG4iXX0=