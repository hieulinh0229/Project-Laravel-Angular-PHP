<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Phản hồi góp ý của khách hàng </title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

    <!-- Styles -->
    <style>
        html, body {
            background-color: #fff;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200;
            height: 100vh;
            margin: 0;
        }


        p {
            font-size: 18px;
            color:red;
        }
        .links > a {
            color: #636b6f;
            padding: 0 25px;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: .1rem;
            text-decoration: none;
            text-transform: uppercase;
        }

        .m-b-md {
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
        <h1>Thank you feedback</h1>
        <h2>Ban quản trị phản hồi với góp ý của bạn như sau</h2>
        <p>Tiêu đề:</p>
        <a>{{$tieude}}</a>
        <p>Nội dung:</p>
        <a>{{$noidung}}</a>

        <p>Chúc bạn một ngày mới thành công</p>
</body>
</html>
