/**
 * Created by Dell on 5/1/2016.
 */
//Initialize
var linkedInApp = angular.module('linkedInApp', ['ngSanitize']);
linkedInApp.controller('content-controller', ['$scope','$http',
    function ($scope, $http) {
        window.sc = $scope;
        $scope.dummyUrl = "https://google.com";

        // edit name
        $scope.buldingTextRename = function() {
            $scope.txt_name1 = $scope.name[0];
            $scope.txt_name2 = $scope.name[1];
        }
        
        $scope.buldingSaveRename = function() {
            $scope.name[0] = $scope.txt_name1;
            $scope.name[1] = $scope.txt_name2;
        }
        // edit curren work
        $scope.buldingTextReCurrenWork = function () {
            $scope.txt_currenWork = $scope.possition;
        }
        $scope.buldingSaveCurrenWork = function() {
            $scope.possition = $scope.txt_currenWork;
        }

        // edit summary
        $scope.buldingTextReSummary = function () {
            $scope.txt_summary = $scope.summary;
        }
        $scope.buldingSaveSummary = function() {
            $scope.summary = $scope.txt_summary;
        }
        // add cause care
        $scope.buldingAddCauseCare = function () {
            $scope.caredCauses.push($scope.txt_CauseCare);
        }

        // remove cause care
        $scope.buldingRemoveCauseCare = function (index) {
            $scope.caredCauses.splice(index, 1);
        }
        // add support
        $scope.buldingAddSupport =  function () {
            $scope.supportedOrganizations.push($scope.txt_Support);
        }
        // remove support
        $scope.buldingRemoveSupport = function (index) {
            $scope.supportedOrganizations.splice(index, 1);
        }

        // edit experience
        $scope.buldingTextExperience = function () {
            $scope.txt_editEx = $scope.experience.title;
        }
        
        // edit education
        $scope.buldingTextEducation = function () {
            $scope.txt_nameSchool = $scope.education.name;
            $scope.txt_addressSchool = $scope.education.title;
            $scope.txt_startCourses = $scope.education.startPeriod;
            $scope.txt_endCourses = $scope.education.endPeriod;
        }
        $scope.buldingSaveEducation = function() {
            $scope.education.name = $scope.txt_nameSchool;
            $scope.education.title = $scope.txt_addressSchool;
            $scope.education.startPeriod = $scope.txt_startCourses;
            $scope.education.endPeriod = $scope.txt_endCourses;
        }
        // add project
        $scope.buldingAddProject =  function () {
            $scope.project.push({name: $scope.txt_NameProject, describe: $scope.txt_Describe});
        }
        // remove project
        $scope.buldingRemoveProject = function (index) {
            $scope.project.splice(index, 1);
        }

        // add skkill
        $scope.buldingAddSkill = function () {
            $scope.skills.push({name: $scope.txt_NameSkill, endorsers: $scope.txt_PointSkill});
        }

        // add Experience
        $scope.buldingAddExperience = function () {
            $scope.experience.push({companyName: $scope.txt_CompanyName, title: $scope.txt_Title, startPeriod: $scope.txt_StartPeriod, endPeriod: $scope.txt_endPeriod, duration: $scope.txt_duration, description: $scope.txt_description});
        }

        // remove Experience
        $scope.buldingRemoveExperience = function (index) {
            $scope.experience.splice(index, 1);
        }

        // edit work
        $scope.buldingTextWork = function () {
            $scope.txt_Location = $scope.work.location;
            $scope.txt_industry = $scope.work.industry;
        }
        $scope.buldingSaveWork = function() {
            $scope.work.location = $scope.txt_Location;
            $scope.work.industry = $scope.txt_industry;
        }
        // show dialog experience
        $scope.showDialog = function()
        {
                $('#editExperience').popModal({
                    html : $('#reEditExperience'),
                    placement : 'right',
                    showCloseBut : true,
                    onDocumentClickClose : true,
                    onDocumentClickClosePrevent : '',
                    overflowContent : false,
                    inline : true,
                    asMenu : false,
                    beforeLoadingContent : 'Please, wait...',
                    onCancelBut : function() {},
                    onLoad : function() {},
                    onClose : function() {}
                });
        }
        

        $http.get('./database/myjson.json').success(function (data) {
            //Read model from json data
            $scope.cover = data.cover;
            $scope.avatar = data.avatar;
            $scope.name = data.name;
            $scope.possition = data.possition;
            $scope.work = data.work;
            $scope.isInfluencer = data.isInfluencer;
            $scope.followers = data.followers;
            $scope.profileURL = data.profileURL;

            $scope.postsUrl = data.postsUrl;
            $scope.posts = data.posts;

            $scope.summary = data.summary;

            $scope.experience = data.experience;

            $scope.caredCauses = data.caredCauses;

            $scope.supportedOrganizations = data.supportedOrganizations;

            $scope.skills = data.skills;
            $scope.otherSkills = data.otherSkills;

            $scope.education = data.education;
            $scope.project = data.project;
        });
    }]);