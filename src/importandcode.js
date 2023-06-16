<Field
          control="input"
          type="text"
          name="lname"
          //  label="Last name"
          placeholder="Enter your lastname"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
          value={formData.lname}
        />
        <Field
          control="input"
          type="email"
          name="email"
          // label="Email"
          placeholder="Enter your email address"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          value={formData.email}
        />
        <Field
          control="input"
          type="password"
          name="password"
          //  label="Password"
          placeholder="Enter your password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          value={formData.password}
        />
        <Field
          control="input"
          type="password"
          name="confirm_password"
          //  label="Confirm Password"
          placeholder="Re enter password"
          outerClass="fs-5 mb-2"
          className="form-control"
          onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
          value={formData.confirm_password}
        />