type StudyMember = {
    studyMemberId : number,
    studyMemberName : string,
    studyMemberRole : string,
    studyMemberGithubId ?: string
}

const studyMembers: StudyMember[] = [
    {
    studyMemberId : 1,
    studyMemberName : "레드",
    studyMemberRole : "leader",
    studyMemberGithubId : "firstMemberGithubId"
    },
    {
    studyMemberId : 2,
    studyMemberName : "블루",
    studyMemberRole : "member",
    }
];

function introduction (studyMemberId: number) {

    const member = studyMembers.find(
        member => member.studyMemberId === studyMemberId
    );

    if (!member) {
        console.log("해당 ID를 가진 멤버가 없습니다.");
        return;
    }

    if(member?.studyMemberGithubId) {
        console.log("안녕하세요 저는 " + member.studyMemberName + "이에요. 제 역할은 " + member.studyMemberRole + "입니다. 제 깃허브 주소는 " + member.studyMemberGithubId + "입니다.");
    } else {
        console.log("안녕하세요 저는 " + member.studyMemberName + "이에요. 제 역할은 " + member.studyMemberRole + "입니다.");
    }
}

introduction(1);
introduction(2);
introduction(999);