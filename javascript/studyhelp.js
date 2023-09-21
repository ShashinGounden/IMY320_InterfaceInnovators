// JavaScript for interacting with comments

// Dummy data for comments (replace with your own logic to fetch comments from a server)
const commentsData = [
    { text: "This is a great study resource!", upvotes: 5, downvotes: 2 },
    { text: "I found the materials very helpful.", upvotes: 3, downvotes: 1 },
];

function renderComments() {
    const commentsList = document.querySelector(".comments-list");
    commentsList.innerHTML = ""; // Clear the existing comments

    commentsData.forEach((comment, index) => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
            <p>${comment.text}</p>
            <div class="votes">
                <span class="upvote" onclick="upvoteComment(${index})">Upvote (${comment.upvotes})</span>
                <span class="downvote" onclick="downvoteComment(${index})">Downvote (${comment.downvotes})</span>
            </div>
        `;

        commentsList.appendChild(commentElement);
    });
}

function upvoteComment(index) {
    commentsData[index].upvotes++;
    renderComments();
}

function downvoteComment(index) {
    commentsData[index].downvotes++;
    renderComments();
}

document.addEventListener("DOMContentLoaded", () => {
    renderComments();

    const submitButton = document.getElementById("submit-comment");
    const commentText = document.getElementById("comment-text");

    submitButton.addEventListener("click", () => {
        const newCommentText = commentText.value.trim();
        if (newCommentText !== "") {
            commentsData.push({ text: newCommentText, upvotes: 0, downvotes: 0 });
            commentText.value = ""; // Clear the input field
            renderComments();
        }
    });
});
