package com.hendisantika.candidateapp.repository;

import com.hendisantika.candidateapp.entity.Candidate;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : candidate-app
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 03/11/17
 * Time: 05.37
 * To change this template use File | Settings | File Templates.
 */
public interface CandidateRepo extends CrudRepository<Candidate, String>{
    @Query("SELECT c FROM Candidate c")
    public List<Candidate> findAllCandidate();

    @Query("SELECT c FROM Candidate c WHERE LOWER(c.fullName) LIKE LOWER(:name)")
    public List<Candidate> findByName(@Param("name") String name);
}
