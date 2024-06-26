interface StudentType {
    student_id:number;
    student_name:string;
}

interface TeacherType {
    teacher_id:number;
    teacher_name:string;
}

type InterSected_type = TeacherType & StudentType  // Intersection used with type keyword.

// interface keyword can't be used while intersection. it is only used in objects

let x:InterSected_type={
    student_id:123,
    student_name:"Naveed Khalid",
    teacher_id:234,
    teacher_name:"Zia Khan",
}

console.log(x);
