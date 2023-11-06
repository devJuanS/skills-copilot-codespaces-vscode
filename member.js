function skillsMember() {
    return {
        restrict: 'E',
        controller: 'SkillsMemberController',
        scope: {
            member: 'm'
        }
    };
}