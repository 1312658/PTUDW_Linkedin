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

        // move down edit education
        $scope.editEducationTopShow = function () {
            $('html, body').animate({scrollTop: $('#id-education').offset().top}, 'slow');
        };

        // move down edit curren work
        $scope.editWorkTopShow = function () {
            $('html, body').animate({scrollTop: $('#id-editWorkTopShow').offset().top}, 'slow');
        };

        var m_index;
        $scope.editeditExperience = function (index) {

            m_index = index;
            $scope.txt_editCompanyName  = $scope.experience[index].companyName;
            $scope.txt_editTitle  = $scope.experience[index].title;
            $scope.txt_editStartPeriod  =$scope.experience[index].startPeriod;
            $scope.txt_editendPeriod  =$scope.experience[index].endPeriod;
            $scope.txt_editduration  =$scope.experience[index].duration;
            $scope.txt_editDescription =$scope.experience[index].description;

            if(index ==0) {
                $('#editExperience-0').popModal({
                    html: $('#reEditExperience-0'),
                    placement: 'right'
                });
            }
            if(index ==1)
            {
                $('#editExperience-1').popModal({
                    html : $('#reEditExperience-1'),
                    placement : 'right'
                });
            }
            if(index ==2)
            {
                $('#editExperience-2').popModal({
                    html : $('#reEditExperience-2'),
                    placement : 'right'
                });
            }
            if(index ==3)
            {
                $('#editExperience-3').popModal({
                    html : $('#reEditExperience-3'),
                    placement : 'right'
                });
            }
            if(index ==4)
            {
                $('#editExperience-4').popModal({
                    html : $('#reEditExperience-4'),
                    placement : 'right'
                });
            }if(index ==5)
            {
                $('#editExperience-5').popModal({
                    html : $('#reEditExperience-5'),
                    placement : 'right'
                });
            }if(index ==6)
            {
                $('#editExperience-6').popModal({
                    html : $('#reEditExperience-6'),
                    placement : 'right'
                });
            }
            if(index ==7)
            {
                $('#editExperience-7').popModal({
                    html : $('#reEditExperience-7'),
                    placement : 'right'
                });
            }
            if(index ==8)
            {
                $('#editExperience-8').popModal({
                    html : $('#reEditExperience-8'),
                    placement : 'right'
                });
            }
            if(index ==9)
            {
                $('#editExperience-9').popModal({
                    html : $('#reEditExperience-9'),
                    placement : 'right'
                });
            }
            if(index ==10)
            {
                $('#editExperience-10').popModal({
                    html : $('#reEditExperience-10'),
                    placement : 'right'
                });
            }if(index ==11)
            {
                $('#editExperience-11').popModal({
                    html : $('#reEditExperience-11'),
                    placement : 'right'
                });
            }if(index ==12)
            {
                $('#editExperience-12').popModal({
                    html : $('#reEditExperience-12'),
                    placement : 'right'
                });
            }
        }

        $scope.buldingSaveExperience = function() {
            $scope.experience[m_index].companyName = $scope.txt_editCompanyName ;
            $scope.experience[m_index].title = $scope.txt_editTitle ;
            $scope.experience[m_index].startPeriod  =$scope.txt_editStartPeriod;
            $scope.experience[m_index].endPeriod =$scope.txt_editendPeriod ;
            $scope.experience[m_index].duration =$scope.txt_editduration ;
            $scope.experience[m_index].description =$scope.txt_editDescription;
        }

        $http.get('https://api.myjson.com/bins/2o960').success(function (data) {
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