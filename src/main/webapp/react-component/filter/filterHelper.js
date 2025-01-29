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
import { BasicDataTypePropertyName } from '../../component/filter-builder/reserved.properties';
import { StartupDataStore } from '../../js/model/Startup/startup';
var toAttribute = function (attribute, group) {
    var _a;
    return {
        label: attribute.alias || attribute.id,
        value: attribute.id,
        description: (((_a = StartupDataStore.Configuration.config) === null || _a === void 0 ? void 0 : _a.attributeDescriptions) || {})[attribute.id],
        group: group,
    };
};
export var getGroupedFilteredAttributes = function () {
    var allAttributes = StartupDataStore.MetacardDefinitions.getSortedAttributes().reduce(function (attributes, attr) {
        attributes[attr.id] = attr;
        return attributes;
    }, {});
    var validCommonAttributes = StartupDataStore.Configuration.getCommonAttributes().reduce(function (attributes, id) {
        var attribute = allAttributes[id];
        if (attribute) {
            attributes.push(toAttribute(attribute, 'Commonly Used Attributes'));
        }
        return attributes;
    }, []);
    var basicDataTypeAttributeDefinition = StartupDataStore.MetacardDefinitions.getAttributeDefinition(BasicDataTypePropertyName);
    var groupedFilteredAttributes = validCommonAttributes
        .concat([
        toAttribute(basicDataTypeAttributeDefinition, 'Special Attributes'),
    ])
        .concat(getFilteredAttributeList('All Attributes'));
    var groups = validCommonAttributes.length > 0
        ? ['Commonly Used Attributes', 'Special Attributes', 'All Attributes']
        : ['Special Attributes', 'All Attributes'];
    return {
        groups: groups,
        attributes: groupedFilteredAttributes,
    };
};
export var getFilteredAttributeList = function (group) {
    return StartupDataStore.MetacardDefinitions.getSortedAttributes()
        .filter(function (_a) {
        var id = _a.id;
        return id === 'anyText' ||
            id === 'anyGeo' ||
            id === BasicDataTypePropertyName ||
            (!StartupDataStore.MetacardDefinitions.isHiddenAttribute(id) &&
                id !== 'thumbnail');
    })
        .map(function (attr) { return toAttribute(attr, group); });
};
export var getAttributeType = function (attribute) {
    var _a;
    var type = (_a = StartupDataStore.MetacardDefinitions.getAttributeMap()[attribute]) === null || _a === void 0 ? void 0 : _a.type;
    if (type === 'GEOMETRY')
        return 'LOCATION';
    if (isIntegerType(type))
        return 'INTEGER';
    if (isFloatType(type))
        return 'FLOAT';
    return type;
};
var isIntegerType = function (type) {
    return type === 'INTEGER' || type === 'SHORT' || type === 'LONG';
};
var isFloatType = function (type) {
    return type === 'FLOAT' || type === 'DOUBLE';
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVySGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9maWx0ZXIvZmlsdGVySGVscGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0osT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUE7QUFDOUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUE7QUFZakUsSUFBTSxXQUFXLEdBQUcsVUFDbEIsU0FBa0MsRUFDbEMsS0FBYzs7SUFFZCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEVBQUU7UUFDdEMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSxDQUFDLENBQUEsTUFBQSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSwwQ0FDL0MscUJBQXFCLEtBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxLQUFLLE9BQUE7S0FDTixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLElBQU0sNEJBQTRCLEdBQUc7SUFJMUMsSUFBTSxhQUFhLEdBQ2pCLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixFQUFFLENBQUMsTUFBTSxDQUMvRCxVQUFDLFVBQVUsRUFBRSxJQUFJO1FBQ2YsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDMUIsT0FBTyxVQUFVLENBQUE7SUFDbkIsQ0FBQyxFQUNELEVBQXNCLENBQ3ZCLENBQUE7SUFDSCxJQUFNLHFCQUFxQixHQUN6QixnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxNQUFNLENBQ3pELFVBQUMsVUFBdUIsRUFBRSxFQUFVO1FBQ2xDLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNuQyxJQUFJLFNBQVMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDLENBQUE7U0FDcEU7UUFDRCxPQUFPLFVBQVUsQ0FBQTtJQUNuQixDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUE7SUFFSCxJQUFNLGdDQUFnQyxHQUNwQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FDekQseUJBQXlCLENBQ0MsQ0FBQTtJQUU5QixJQUFNLHlCQUF5QixHQUFHLHFCQUFxQjtTQUNwRCxNQUFNLENBQUM7UUFDTixXQUFXLENBQUMsZ0NBQWdDLEVBQUUsb0JBQW9CLENBQUM7S0FDcEUsQ0FBQztTQUNELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUE7SUFDckQsSUFBTSxNQUFNLEdBQ1YscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUM7UUFDdEUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtJQUM5QyxPQUFPO1FBQ0wsTUFBTSxRQUFBO1FBQ04sVUFBVSxFQUFFLHlCQUF5QjtLQUN0QyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBQ0QsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBQUcsVUFBQyxLQUFjO0lBQ3JELE9BQU8sZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLEVBQUU7U0FDOUQsTUFBTSxDQUNMLFVBQUMsRUFBVztZQUFULEVBQUUsUUFBQTtRQUNILE9BQUEsRUFBRSxLQUFLLFNBQVM7WUFDaEIsRUFBRSxLQUFLLFFBQVE7WUFDZixFQUFFLEtBQUsseUJBQXlCO1lBQ2hDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUM7Z0JBQzFELEVBQUUsS0FBSyxXQUFXLENBQUM7SUFKckIsQ0FJcUIsQ0FDeEI7U0FDQSxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUE7QUFDNUMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxTQUFpQjs7SUFDaEQsSUFBTSxJQUFJLEdBQ1IsTUFBQSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUMsMENBQUUsSUFBSSxDQUFBO0lBQ3pFLElBQUksSUFBSSxLQUFLLFVBQVU7UUFBRSxPQUFPLFVBQVUsQ0FBQTtJQUMxQyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLFNBQVMsQ0FBQTtJQUN6QyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFBRSxPQUFPLE9BQU8sQ0FBQTtJQUNyQyxPQUFPLElBQUksQ0FBQTtBQUNiLENBQUMsQ0FBQTtBQUNELElBQU0sYUFBYSxHQUFHLFVBQUMsSUFBWTtJQUNqQyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFBO0FBQ2xFLENBQUMsQ0FBQTtBQUNELElBQU0sV0FBVyxHQUFHLFVBQUMsSUFBWTtJQUMvQixPQUFPLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLFFBQVEsQ0FBQTtBQUM5QyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgQ29kaWNlIEZvdW5kYXRpb25cbiAqXG4gKiBUaGlzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxuICogTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dFxuICogZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLiBBIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogaXMgZGlzdHJpYnV0ZWQgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0gYW5kIGNhbiBiZSBmb3VuZCBhdFxuICogPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLmh0bWw+LlxuICpcbiAqKi9cbmltcG9ydCB7IEJhc2ljRGF0YVR5cGVQcm9wZXJ0eU5hbWUgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvZmlsdGVyLWJ1aWxkZXIvcmVzZXJ2ZWQucHJvcGVydGllcydcbmltcG9ydCB7IFN0YXJ0dXBEYXRhU3RvcmUgfSBmcm9tICcuLi8uLi9qcy9tb2RlbC9TdGFydHVwL3N0YXJ0dXAnXG5pbXBvcnQge1xuICBBdHRyaWJ1dGVEZWZpbml0aW9uVHlwZSxcbiAgQXR0cmlidXRlTWFwVHlwZSxcbiAgQXR0cmlidXRlVHlwZXMsXG59IGZyb20gJy4uLy4uL2pzL21vZGVsL1N0YXJ0dXAvc3RhcnR1cC50eXBlcydcbmV4cG9ydCB0eXBlIEF0dHJpYnV0ZSA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgZ3JvdXA/OiBzdHJpbmdcbn1cbmNvbnN0IHRvQXR0cmlidXRlID0gKFxuICBhdHRyaWJ1dGU6IEF0dHJpYnV0ZURlZmluaXRpb25UeXBlLFxuICBncm91cD86IHN0cmluZ1xuKTogQXR0cmlidXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBsYWJlbDogYXR0cmlidXRlLmFsaWFzIHx8IGF0dHJpYnV0ZS5pZCxcbiAgICB2YWx1ZTogYXR0cmlidXRlLmlkLFxuICAgIGRlc2NyaXB0aW9uOiAoU3RhcnR1cERhdGFTdG9yZS5Db25maWd1cmF0aW9uLmNvbmZpZ1xuICAgICAgPy5hdHRyaWJ1dGVEZXNjcmlwdGlvbnMgfHwge30pW2F0dHJpYnV0ZS5pZF0sXG4gICAgZ3JvdXAsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBnZXRHcm91cGVkRmlsdGVyZWRBdHRyaWJ1dGVzID0gKCk6IHtcbiAgZ3JvdXBzOiBzdHJpbmdbXVxuICBhdHRyaWJ1dGVzOiBBdHRyaWJ1dGVbXVxufSA9PiB7XG4gIGNvbnN0IGFsbEF0dHJpYnV0ZXMgPVxuICAgIFN0YXJ0dXBEYXRhU3RvcmUuTWV0YWNhcmREZWZpbml0aW9ucy5nZXRTb3J0ZWRBdHRyaWJ1dGVzKCkucmVkdWNlKFxuICAgICAgKGF0dHJpYnV0ZXMsIGF0dHIpID0+IHtcbiAgICAgICAgYXR0cmlidXRlc1thdHRyLmlkXSA9IGF0dHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICAgIH0sXG4gICAgICB7fSBhcyBBdHRyaWJ1dGVNYXBUeXBlXG4gICAgKVxuICBjb25zdCB2YWxpZENvbW1vbkF0dHJpYnV0ZXMgPVxuICAgIFN0YXJ0dXBEYXRhU3RvcmUuQ29uZmlndXJhdGlvbi5nZXRDb21tb25BdHRyaWJ1dGVzKCkucmVkdWNlKFxuICAgICAgKGF0dHJpYnV0ZXM6IEF0dHJpYnV0ZVtdLCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGFsbEF0dHJpYnV0ZXNbaWRdXG4gICAgICAgIGlmIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2godG9BdHRyaWJ1dGUoYXR0cmlidXRlLCAnQ29tbW9ubHkgVXNlZCBBdHRyaWJ1dGVzJykpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcblxuICBjb25zdCBiYXNpY0RhdGFUeXBlQXR0cmlidXRlRGVmaW5pdGlvbiA9XG4gICAgU3RhcnR1cERhdGFTdG9yZS5NZXRhY2FyZERlZmluaXRpb25zLmdldEF0dHJpYnV0ZURlZmluaXRpb24oXG4gICAgICBCYXNpY0RhdGFUeXBlUHJvcGVydHlOYW1lXG4gICAgKSBhcyBBdHRyaWJ1dGVEZWZpbml0aW9uVHlwZVxuXG4gIGNvbnN0IGdyb3VwZWRGaWx0ZXJlZEF0dHJpYnV0ZXMgPSB2YWxpZENvbW1vbkF0dHJpYnV0ZXNcbiAgICAuY29uY2F0KFtcbiAgICAgIHRvQXR0cmlidXRlKGJhc2ljRGF0YVR5cGVBdHRyaWJ1dGVEZWZpbml0aW9uLCAnU3BlY2lhbCBBdHRyaWJ1dGVzJyksXG4gICAgXSlcbiAgICAuY29uY2F0KGdldEZpbHRlcmVkQXR0cmlidXRlTGlzdCgnQWxsIEF0dHJpYnV0ZXMnKSlcbiAgY29uc3QgZ3JvdXBzID1cbiAgICB2YWxpZENvbW1vbkF0dHJpYnV0ZXMubGVuZ3RoID4gMFxuICAgICAgPyBbJ0NvbW1vbmx5IFVzZWQgQXR0cmlidXRlcycsICdTcGVjaWFsIEF0dHJpYnV0ZXMnLCAnQWxsIEF0dHJpYnV0ZXMnXVxuICAgICAgOiBbJ1NwZWNpYWwgQXR0cmlidXRlcycsICdBbGwgQXR0cmlidXRlcyddXG4gIHJldHVybiB7XG4gICAgZ3JvdXBzLFxuICAgIGF0dHJpYnV0ZXM6IGdyb3VwZWRGaWx0ZXJlZEF0dHJpYnV0ZXMsXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBnZXRGaWx0ZXJlZEF0dHJpYnV0ZUxpc3QgPSAoZ3JvdXA/OiBzdHJpbmcpOiBBdHRyaWJ1dGVbXSA9PiB7XG4gIHJldHVybiBTdGFydHVwRGF0YVN0b3JlLk1ldGFjYXJkRGVmaW5pdGlvbnMuZ2V0U29ydGVkQXR0cmlidXRlcygpXG4gICAgLmZpbHRlcihcbiAgICAgICh7IGlkIH06IGFueSkgPT5cbiAgICAgICAgaWQgPT09ICdhbnlUZXh0JyB8fFxuICAgICAgICBpZCA9PT0gJ2FueUdlbycgfHxcbiAgICAgICAgaWQgPT09IEJhc2ljRGF0YVR5cGVQcm9wZXJ0eU5hbWUgfHxcbiAgICAgICAgKCFTdGFydHVwRGF0YVN0b3JlLk1ldGFjYXJkRGVmaW5pdGlvbnMuaXNIaWRkZW5BdHRyaWJ1dGUoaWQpICYmXG4gICAgICAgICAgaWQgIT09ICd0aHVtYm5haWwnKVxuICAgIClcbiAgICAubWFwKChhdHRyKSA9PiB0b0F0dHJpYnV0ZShhdHRyLCBncm91cCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRBdHRyaWJ1dGVUeXBlID0gKGF0dHJpYnV0ZTogc3RyaW5nKTogQXR0cmlidXRlVHlwZXMgPT4ge1xuICBjb25zdCB0eXBlID1cbiAgICBTdGFydHVwRGF0YVN0b3JlLk1ldGFjYXJkRGVmaW5pdGlvbnMuZ2V0QXR0cmlidXRlTWFwKClbYXR0cmlidXRlXT8udHlwZVxuICBpZiAodHlwZSA9PT0gJ0dFT01FVFJZJykgcmV0dXJuICdMT0NBVElPTidcbiAgaWYgKGlzSW50ZWdlclR5cGUodHlwZSkpIHJldHVybiAnSU5URUdFUidcbiAgaWYgKGlzRmxvYXRUeXBlKHR5cGUpKSByZXR1cm4gJ0ZMT0FUJ1xuICByZXR1cm4gdHlwZVxufVxuY29uc3QgaXNJbnRlZ2VyVHlwZSA9ICh0eXBlOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIHR5cGUgPT09ICdJTlRFR0VSJyB8fCB0eXBlID09PSAnU0hPUlQnIHx8IHR5cGUgPT09ICdMT05HJ1xufVxuY29uc3QgaXNGbG9hdFR5cGUgPSAodHlwZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiB0eXBlID09PSAnRkxPQVQnIHx8IHR5cGUgPT09ICdET1VCTEUnXG59XG4iXX0=