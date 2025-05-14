package studentManager;

import java.util.ArrayList;
import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        ArrayList<Student> list = new ArrayList<>();
        Scanner sc = new Scanner(System.in);

        while (true) {
            System.out.println("----欢迎来到学生管理系统----");
            System.out.println("1.添加学生");
            System.out.println("2.删除学生");
            System.out.println("3.修改学生");
            System.out.println("4.查看学生");
            System.out.println("5.退出");
            System.out.println("6.请输入您的选择");

            int choice = sc.nextInt();
            switch (choice) {
                case 1:
                    addStudent(list);
                    break;
                case 2:
                    deleteStudentByid(list);
                    break;
                case 3:
                    updateStudentInfoById(list);
                    break;
                case 4:
                    queryStudentInfos(list);
                    break;
                case 5:
                    System.out.println("退出");
                    System.exit(0);
                    break;
                case 6:
                    System.out.println("请输入您的选择");
                    break;

            }
        }
    }

    private static void addStudent(ArrayList<Student> list) {
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入学生学号：");

        String id ="";

        while (true) {
            id = sc.next();

            int index = getIndex(id,list);

            if (index == -1) {
                //学号在集合中不存在，可以使用！
                break;
            } else {
                System.out.println("您输入的学号已被占用，请重新输入！");
            }
        }

        System.out.println("请输入学生姓名：");
        String name = sc.next();
        System.out.println("请输入学生年龄：");
        int age = sc.nextInt();
        System.out.println("请输入学生生日：");
        String birthday = sc.next();

        Student stu = new Student(id, name, age, birthday);
        list.add(stu);
        System.out.println("添加成功！");
    }

    /*
       根据学号修改集合中的学生信息
     */
    private static void updateStudentInfoById(ArrayList<Student> list) {
        //1，键盘录入要修改的学生学号
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入要修改的学生学号");
        String updateId = sc.next();
        //2.调用getIndex 方法查找学号对应的索引
        int index = getIndex(updateId, list);
        //3.如果学号不存在，给出错误提示
        if (index == -1) {
            System.out.println("查无此人，修改失败");
        } else {
            //4.如果学号存在，录入新的学生信息，完成修改
            System.out.println("请输入信息学生姓名：");
            String name = sc.next();
            System.out.println("请输入信息学生年龄：");
            int age = sc.nextInt();
            System.out.println("请输入信息学生生日：");
            String birthday = sc.next();

            //将新录入的学生信息，封装为学生对象
            Student stu = new Student(updateId, name, age, birthday);
            list.set(index, stu);
            System.out.println("修改成功");
        }

    }

    /*
    根据学号删除集合中的学生
     */
    private static void deleteStudentByid(ArrayList<Student> list) {
        //1，键盘录入要删除的学生学号
        Scanner sc = new Scanner(System.in);
        System.out.println("请输入您要删除的学生学号：");
        String id = sc.next();
        //2.调用getIndex方法，查找学号再集合中的索引
        int index = getIndex(id, list);
        //3.判断方法的返回值是否是-1
        if (index == -1) {
            //3.1 是-1，说明学号不存在，给出错误提示
            System.out.println("查无此人，删除失败！");
        } else {
            //3.2 不是-1.说明学号存在，根据索引做删除
            list.remove(index);
            System.out.println("删除成功！");
        }
    }

    /*
    此方法用于查看学生
     */
    private static void queryStudentInfos(ArrayList<Student> list) {
        if (list.size() == 0) {
            System.out.println("查无信息，请添加后重试！");
        } else {
            for (int i = 0; i < list.size(); i++) {
                Student student = list.get(i);
                System.out.println(student.getId() + "---" + student.getName() + "---" + student.getAge() + "---" + student.getBirthday());
            }
        }
    }

    /*
        此方法根据学号，去集合中查找对应的索引
     */
    private static int getIndex(String id, ArrayList<Student> list) {
        //1.遍历集合，获取到每一个学生对象
        for (int i = 0; i < list.size(); i++) {
            Student stu = list.get(i);
            //stu.getId():从集合中取出学生
            //Id：要查找的学号
            //2.对比
            if (stu.getId().equals(id)) {
                //3.找到了，返回正确的索引
                return i;
            }
        }
        //4.没找到，返回-1
        return -1;
    }
}
