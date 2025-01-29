import { StartupDataStore } from '../../js/model/Startup/startup';
export var fuzzyResultCount = function (resultCount) {
    if (!StartupDataStore.Configuration.getIsFuzzyResultsEnabled()) {
        return resultCount;
    }
    if (resultCount < 10)
        return '< 10';
    else if (resultCount < 100)
        return '< 100';
    else if (resultCount < 1000)
        return '< 1000';
    else if (resultCount < 10000)
        return '< 10,000';
    else if (resultCount < 100000)
        return '< 100,000';
    else if (resultCount < 1000000)
        return '< 1,000,000';
    else if (resultCount < 10000000)
        return '< 10,000,000';
    else
        return '>= 10,000,000';
};
export var fuzzyHits = function (resultCount) {
    return "".concat(fuzzyResultCount(resultCount), " hits");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnV6enktcmVzdWx0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnQvcmVzdWx0LXNlbGVjdG9yL2Z1enp5LXJlc3VsdHMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFBO0FBRWpFLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLFVBQUMsV0FBbUI7SUFDbEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSxFQUFFO1FBQzlELE9BQU8sV0FBVyxDQUFBO0tBQ25CO0lBRUQsSUFBSSxXQUFXLEdBQUcsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFBO1NBQzlCLElBQUksV0FBVyxHQUFHLEdBQUc7UUFBRSxPQUFPLE9BQU8sQ0FBQTtTQUNyQyxJQUFJLFdBQVcsR0FBRyxJQUFJO1FBQUUsT0FBTyxRQUFRLENBQUE7U0FDdkMsSUFBSSxXQUFXLEdBQUcsS0FBSztRQUFFLE9BQU8sVUFBVSxDQUFBO1NBQzFDLElBQUksV0FBVyxHQUFHLE1BQU07UUFBRSxPQUFPLFdBQVcsQ0FBQTtTQUM1QyxJQUFJLFdBQVcsR0FBRyxPQUFPO1FBQUUsT0FBTyxhQUFhLENBQUE7U0FDL0MsSUFBSSxXQUFXLEdBQUcsUUFBUTtRQUFFLE9BQU8sY0FBYyxDQUFBOztRQUNqRCxPQUFPLGVBQWUsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUFFRCxNQUFNLENBQUMsSUFBTSxTQUFTLEdBQUcsVUFBQyxXQUFtQjtJQUMzQyxPQUFPLFVBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFVBQU8sQ0FBQTtBQUNoRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFydHVwRGF0YVN0b3JlIH0gZnJvbSAnLi4vLi4vanMvbW9kZWwvU3RhcnR1cC9zdGFydHVwJ1xuXG5leHBvcnQgY29uc3QgZnV6enlSZXN1bHRDb3VudCA9IChyZXN1bHRDb3VudDogbnVtYmVyKSA9PiB7XG4gIGlmICghU3RhcnR1cERhdGFTdG9yZS5Db25maWd1cmF0aW9uLmdldElzRnV6enlSZXN1bHRzRW5hYmxlZCgpKSB7XG4gICAgcmV0dXJuIHJlc3VsdENvdW50XG4gIH1cblxuICBpZiAocmVzdWx0Q291bnQgPCAxMCkgcmV0dXJuICc8IDEwJ1xuICBlbHNlIGlmIChyZXN1bHRDb3VudCA8IDEwMCkgcmV0dXJuICc8IDEwMCdcbiAgZWxzZSBpZiAocmVzdWx0Q291bnQgPCAxMDAwKSByZXR1cm4gJzwgMTAwMCdcbiAgZWxzZSBpZiAocmVzdWx0Q291bnQgPCAxMDAwMCkgcmV0dXJuICc8IDEwLDAwMCdcbiAgZWxzZSBpZiAocmVzdWx0Q291bnQgPCAxMDAwMDApIHJldHVybiAnPCAxMDAsMDAwJ1xuICBlbHNlIGlmIChyZXN1bHRDb3VudCA8IDEwMDAwMDApIHJldHVybiAnPCAxLDAwMCwwMDAnXG4gIGVsc2UgaWYgKHJlc3VsdENvdW50IDwgMTAwMDAwMDApIHJldHVybiAnPCAxMCwwMDAsMDAwJ1xuICBlbHNlIHJldHVybiAnPj0gMTAsMDAwLDAwMCdcbn1cblxuZXhwb3J0IGNvbnN0IGZ1enp5SGl0cyA9IChyZXN1bHRDb3VudDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBgJHtmdXp6eVJlc3VsdENvdW50KHJlc3VsdENvdW50KX0gaGl0c2Bcbn1cbiJdfQ==