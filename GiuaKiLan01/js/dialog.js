
angular.module('dialog_LinkedIn', [])

    .controller('dialog', function($scope) {
        $scope.txt_name1 = "" ;
        $scope.phepTinh = false;

        $scope.tinh = function()
        {
            if ($scope.checkInput() == false) {
                $scope.ketqua = 0;
                return;
            }

            $scope.thongBao = "Không có thông báo!!";
            var so1 = Number($scope.So1);
            var so2 = Number($scope.So2);
            var kq;

            var phepTinh = $scope.phepTinh;
            if(phepTinh == "Cong")
            {
                kq = so1 + so2;
                $scope.ketqua = kq;
            }
            else if(phepTinh == "Tru")
            {
                kq = so1 - so2;
                $scope.ketqua = kq;
            }

            else if(phepTinh == "Nhan")
            {
                kq = so1 * so2;
                $scope.ketqua = kq;
            }
            else if(phepTinh == "Chia")
            {
                kq = so1 / so2;
                $scope.ketqua = kq;
            }
        }

        $scope.reset = function()
        {
            $scope.So1 = null;
            $scope.So2 = null;
            $scope.thongBao = "";
            $scope.ketqua = "";
            $scope.phepTinh = false;
        }

        $scope.checkInput = function()
        {
            var a = $scope.So1;
            var b = $scope.So2;

            if (a == null || b == null) {
                $scope.thongBao = "Không có thông báo!!";
                return false;
            }

            else if (a == "" || b == "") {
                $scope.thongBao = "Chưa nhập đủ cả 2 số!!";
                return false;
            }

            else if ($scope.phepTinh == false) {
                $scope.thongBao = "Chưa chọn một phép tính!";
                return false;
            }


            else if (!Number(a))
            {
                if (a != 0) {
                    $scope.thongBao = "Đầu vào không phải là số!";
                    return false;
                }
            }

            if (!Number(b)) {
                if (b != 0) {
                    $scope.thongBao = "Đầu vào không phải là số!";
                    return false;
                }
                else
                {
                    if ($scope.phepTinh == "Chia") {
                        $scope.thongBao = "Không thể chia cho 0!";
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            }

            else {
                return true;
            }
        }
    });



