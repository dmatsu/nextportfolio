// app/contact/page.js

const Contact = () => {
    return (
        <>
			<div className="wrapper">
				<div className="container">
					<h1>Contact</h1>
					<p>お気軽にご連絡ください</p>
					<form>
						<label htmlFor="name">お名前</label>
						<input type="text" id="name" name="name" required />
						<label htmlFor="email">メールアドレス</label>
						<input type="email" id="email" name="email" required />
						<label htmlFor="textarea">ご用件</label>
						<textarea id="textarea" rows="10" name="message" required></textarea>
						<button type="submit">送信</button>
					</form>
				</div>
			</div>
		</>
    );
}

export default Contact